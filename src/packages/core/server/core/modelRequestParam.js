const mongoose = require('mongoose');
const httperrors = require('httperrors');

module.exports = (modelName, router, forcedName) => {
  const paramName = forcedName
    || `${modelName.slice(0, 1).toLowerCase()}${modelName.slice(1)}Id`;

  router.param(paramName, (req, res, next, id) => mongoose.model(modelName)
    .findById(id, (err, doc) => {
      req.loadedParams = req.loadedParams || {};
      if (err) return next(err);

      if (!doc) {
        res.status(404);
        return next(httperrors.NotFound());
      }

      req.loadedParams[paramName] = doc;
      return next();
    }));

  return paramName;
};
