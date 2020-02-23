const express = require('express');
const passport = require('passport');

const check = require('eazin-users/server/user.auth.checkRoles');
const requestHook = require('eazin-core/server/util/requestHook');

const router = express.Router();

router.get(
  '/',
  passport.authenticate('bearer', { session: false }),
  check(['get:activities']),
  requestHook('<%= user.email %> reads activity log'),
  (req, res, next) => {
    const Activity = req.db.model('Activity');

    const handle = (err, activities) => {
      if (err) return next(err);
      res.send(activities);
    };

    if (req.user.isAdmin) return Activity.search(req.query, handle);

    // !!!!!!!
    handle(null, { data: [], page: 0, totalCount: 0 });
  },
);

module.exports = router;
