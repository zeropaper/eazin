const httperrors = require('httperrors');


module.exports = (req, res, next, id) => req.db.model('Organisation')
  .findById(id, (err, organisation) => {
    if (err) return next(err);
    if (!organisation) return next(httperrors.NotFound());
    req.loadedParams = req.loadedParams || {};
    req.loadedParams.organisationId = organisation;
    return next();
  });
