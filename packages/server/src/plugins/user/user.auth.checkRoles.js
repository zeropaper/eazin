const httperrors = require('httperrors');

// eslint-disable-next-line no-unused-vars
module.exports = (rolesToCheck) => (req, res, next) => {
  if (!req.user) return next(httperrors.Unauthorized());
  const {
    isAdmin,
    isVerified,
    companies,
  } = req.user;
  if (isAdmin) return next();
  if (!isVerified) {
    res.status(403);
    return next(new Error('User Need Verification'));
  }

  // let exited;
  // rolesToCheck.forEach((role) => {
  //   if (exited) return;
  //   if (!req.user.roles.includes(role)) {
  //     exited = true;
  //     next(httperrors.Forbidden());
  //   }
  // });

  const {
    companyId: { _id: companyId } = {},
  } = (req.loadedParams || {});
  if (companyId && !companies.includes(companyId)) {
    return next(httperrors.Forbidden());
  }

  return next();
};
