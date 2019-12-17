const httperrors = require('httperrors');

module.exports = (req, res, next, id) => req.db.model('User')
  .findById(id, (err, user) => {
    if (err) return next(err);
    if (!user) return next(httperrors.NotFound());
    req.loadedParams = req.loadedParams || {};
    req.loadedParams.userId = user;
    return next();
  });
