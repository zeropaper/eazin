const mongoose = require('mongoose');
const capitalize = require('lodash.capitalize');

const requestHook = require('./requestHook');

const makePatchHandler = ({
  router,
  auth,
  name,
  idName = `${name}Id`,
  modelName = capitalize(name),
}) => router.patch(`/:${idName}`,
  auth,
  requestHook(`patch ${name}`),
  (req, res, next) => {
    const { [idName]: doc } = (req.loadedParams || {});
    const Model = mongoose.model(modelName);

    let data = req.body;
    if (typeof Model.sanitizeInput === 'function') {
      data = Model.sanitizeInput(data);
    }

    Object.keys(data).forEach((key) => {
      if (typeof data[key] !== 'undefined') doc[key] = data[key];
    });

    doc.save((err, updated) => {
      if (err) return next(err);
      res.send(updated);
    });
  });

module.exports = makePatchHandler;
