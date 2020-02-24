const passport = require('passport');
const mongoose = require('mongoose');

const {
  httperrors,
  Router,
  modelRequestParam,
  requestHook,
} = require('eazin-core/server');

const check = require('./user.auth.checkRoles');

const router = Router();

modelRequestParam('User', router);

router.get(
  '/',
  passport.authenticate('bearer', { session: false }),
  check(['get:users']),
  requestHook('list users'),
  (req, res, next) => {
    const User = mongoose.model('User');

    User.search(req.query, (err, users) => {
      if (err) return next(err);
      res.send(users);
    });
  },
);

router.post(
  '/invite',
  passport.authenticate('bearer', { session: false }),
  check(['invite']),
  requestHook('invite'),
  (req, res, next) => next(httperrors.NotImplemented()),
);

router.patch(
  '/:userId',
  passport.authenticate('bearer', { session: false }),
  check(['patch:user']),
  requestHook('update user'),
  async (req, res, next) => {
    if (!req.user.isAdmin) return next(httperrors.Forbidden());
    const User = mongoose.model('User');
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
  passport.authenticate('bearer', { session: false }),
  check(['delete:user']),
  requestHook('delete user'),
  (req, res, next) => {
    if (!req.user.isAdmin) return next(httperrors.Forbidden());
    const User = mongoose.model('User');
    User.delete(req.params.userId, (err) => {
      if (err) return next(err);
      res.status(204);
      res.end();
    });
  },
);

module.exports = router;
