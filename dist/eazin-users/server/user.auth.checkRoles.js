const httperrors = require('httperrors');
const eazinRc = require('eazin-core/server/util/eazinrc');

// 0: "method:resource"
// 1: "method"
// 2: "resource"
// 3: ""
// 4: undefined
// 5: undefined
// 6: undefined
// --------------------------------------------
// 0: "method:resource/:resourceId"
// 1: "method"
// 2: "resource"
// 3: "/:resourceId"
// 4: "resourceId"
// 5: ""
// 6: undefined
// --------------------------------------------
// 0: "method:resource/:resourceId/sub/action"
// 1: "method"
// 2: "resource"
// 3: "/:resourceId/sub/action"
// 4: "resourceId"
// 5: "/sub/action"
// 6: "sub/action"
const exp = /([^:]+):([^/]+)(\/:([^/]+)(\/(.*)|)|)/;

const expandRoles = (params) => (role) => {
  if (!role.includes('/:')) return role;

  /* eslint-disable no-unused-vars */
  const [,
    method,
    resource,
    x,
    resourceId,
    y,
    subResource,
  ] = role.match(exp);
  /* eslint-enable no-unused-vars */
  const expanded = role.replace(`/:${resourceId}`, `/${params[resourceId]}`);
  return expanded;
};

// eslint-disable-next-line no-unused-vars
module.exports = (rolesToCheck) => async (req, res, next) => {
  const { env } = eazinRc();
  const done = (err) => {
    if (typeof next === 'function') {
      next(err);
    } else if (err) {
      throw err;
    }
  };

  try {
    if (!req.user) throw httperrors.Unauthorized();
    const {
      isAdmin,
      isVerified,
    } = req.user;
    if (!isVerified) {
      res.status(403);
      throw new Error('User Need Verification');
    }
    if (isAdmin) return done();

    const expandedRoles = rolesToCheck.map(expandRoles(req.params));
    const userRoles = req.user.roles;

    let exited;
    expandedRoles
      .forEach((role) => {
        if (exited) return;
        if (!userRoles.includes(role)) {
          exited = true;
          const err = httperrors.Forbidden(env !== 'production' ? `Missing "${role}" role` : 'Forbidden');
          err.reason = `Missing "${role}" role`;
          throw err;
        }
      });

    done();
  } catch (err) {
    done(err);
  }
};
