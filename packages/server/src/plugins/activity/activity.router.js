const express = require('express');

const check = require('../user/user.auth.checkRoles');
const bearer = require('../user/user.auth.bearer');
const requestHook = require('../../util/requestHook');

const router = express.Router();

router.get(
  '/',
  bearer,
  check(['get:activities']),
  requestHook,
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