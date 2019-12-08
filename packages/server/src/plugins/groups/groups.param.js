const httperrors = require('httperrors');


module.exports = (req, res, next, id) => req.db.model('Group')
  .findById(id, (err, group) => {
    if (err) return next(err);
    if (!group) return next(httperrors.NotFound());
    req.loadedParams = req.loadedParams || {};
    req.loadedParams.groupId = group;
    return next();
  });
