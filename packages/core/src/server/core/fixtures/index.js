const path = require('path');
const express = require('express');

const process = require('./process');

module.exports = (db) => {
  const fixturesRouter = express.Router();

  // eslint-disable-next-line consistent-return
  fixturesRouter.post('/', express.json(), async (req, res, next) => {
    const { body: definition } = req;

    let used = {};
    if (typeof definition.file === 'string') {
      const fixturesPath = path.resolve(__dirname, '../../../../../../', definition.file);
      try {
        // eslint-disable-next-line
        used = process(require(fixturesPath));
      } catch (err) {
        // eslint-disable-next-line no-console
        console.info('######### Cannot process fixtures', fixturesPath);
        return next(err);
      }
    } else {
      used = definition;
    }

    // // eslint-disable-next-line no-console
    // console.info('######### fixtures creation starts');
    const keys = Object.keys(used);
    Promise.all(keys.map(async (modelName) => {
      const Model = db.model(modelName);
      await Model.deleteMany({});
      if (modelName === 'User') {
        return Promise.all(used[modelName].map(({
          password = '1234567890Aa!',
          ...rest
        }) => Model.register(rest, password)));
      }
      return Model.insertMany(used[modelName]);
    }))
      .then((created) => {
        const obj = {};
        keys.forEach((key, k) => { obj[key] = created[k]; });
        res.send(obj);
      })
      .catch(next);
  });

  fixturesRouter.delete('/', (req, res, next) => {
    Promise.all(Object.keys(db.models).map((modelName) => db.model(modelName).deleteMany({})))
      .then(() => { res.status(204); res.end(); })
      .catch(next);
  });

  return fixturesRouter;
};
