const path = require('path');
const express = require('express');

const process = require('./process');

module.exports = (db) => {
  const fixturesRouter = express.Router();

  fixturesRouter.post('/', express.json(), async (req, res, next) => {
    const { body: definition } = req;

    let used = {};
    if (typeof definition.file === 'string') {
      const fixturesPath = path.resolve(__dirname, '../../../../../', definition.file);
      try {
      // eslint-disable-next-line
      used = process(require(fixturesPath));
      } catch (err) {
      // eslint-disable-next-line no-console
        console.info('######### Fixtures cannot be found at', fixturesPath);
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
      return Model.insertMany(used[modelName]);
    }))
      .then((created) => {
        const obj = {};
        keys.forEach((key, k) => { obj[key] = created[k]; });
        // // eslint-disable-next-line no-console
        // console.info('######### fixtures creation finished');
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
