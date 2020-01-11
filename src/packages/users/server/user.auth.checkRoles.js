const httperrors = require('httperrors');

const expandRoles = (params) => (role) => {
  if (!role.includes('/:')) return role;

  const parts = role.split('/:');
  const paramId = parts.pop();
  const expanded = `${parts.join('/:')}/${params[paramId]}`;
  return expanded;
};

// eslint-disable-next-line no-unused-vars
module.exports = (rolesToCheck) => (req, res, next) => {
  if (!req.user) return next(httperrors.Unauthorized());
  const {
    isAdmin,
    isVerified,
  } = req.user;
  if (isAdmin) return next();
  if (!isVerified) {
    res.status(403);
    return next(new Error('User Need Verification'));
  }

  const expandedRoles = rolesToCheck.map(expandRoles(req.params));
  const userRoles = req.user.roles;

  let exited;
  expandedRoles
    .forEach((role) => {
      if (exited) return;
      if (!userRoles.includes(role)) {
        exited = true;
        next(httperrors.Forbidden());
      }
    });

  return next();
};
