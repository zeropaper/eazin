const express = require('express');
const httperrors = require('httperrors');

const requestHook = require('eazin-core/server/util/requestHook');
const bearer = require('./user.auth.bearer');
// const twoFAlocal = require('./user.auth.2falocal');

const userIdParam = require('./users.param');
const check = require('./user.auth.checkRoles');

const router = express.Router();

router.param('userId', userIdParam);

router.get(
  '/',
  bearer,
  check(['get:users']),
  requestHook,
  (req, res, next) => {
    const User = req.db.model('User');

    User.search(req.query, (err, users) => {
      if (err) return next(err);
      res.send(users);
    });
  },
);

router.post(
  '/invite',
  bearer,
  check(['invite']),
  requestHook,
  (req, res, next) => next(httperrors.NotImplemented()),
);

router.patch(
  '/:userId',
  bearer,
  check(['patch:user']),
  requestHook,
  async (req, res, next) => {
    if (!req.user.isAdmin) return next(httperrors.Forbidden());
    const User = req.db.model('User');
    const update = User.sanitizeInput(req.body);
    const { loadedParams: { userId: user } } = req;

    Object.keys(update).forEach((key) => {
      user[key] = update[key];
    });

    user.save((err, updated) => {
      if (err) return next(err);
      res.status(200);
      res.send(User.sanitizeOutput(updated));
    });
  },
);

router.delete(
  '/:userId',
  bearer,
  check(['delete:user']),
  requestHook,
  (req, res, next) => {
    if (!req.user.isAdmin) return next(httperrors.Forbidden());
    const User = req.db.model('User');
    User.delete(req.params.userId, (err) => {
      if (err) return next(err);
      res.status(204);
      res.end();
    });
  },
);

module.exports = router;
