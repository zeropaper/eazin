const httperrors = require('httperrors');


module.exports = (req, res, next, id) => req.db.model('Company')
  .findById(id, (err, company) => {
    if (err) return next(err);
    if (!company) return next(httperrors.NotFound());
    req.loadedParams = req.loadedParams || {};
    req.loadedParams.companyId = company;
    return next();
  });
