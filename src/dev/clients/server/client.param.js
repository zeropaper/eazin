const httperrors = require('httperrors');


module.exports = (req, res, next, id) => req.db.model('APIClient')
  .findById(id, (err, client) => {
    if (err) return next(err);
    if (!client) return next(httperrors.NotFound());
    req.loadedParams = req.loadedParams || {};
    req.loadedParams.clientId = client;
    return next();
  });
