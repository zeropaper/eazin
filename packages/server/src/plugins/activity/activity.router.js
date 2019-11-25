const express = require('express');

const check = require('../user/user.auth.checkRoles');
const bearer = require('../user/user.auth.bearer');
const requestHook = require('../../util/requestHook');

const router = express.Router();

const sanitizeActivityOutput = ({
  message,
  _id: id,
  createdAt,
  updatedAt,
} = {}) => ({
  message,
  id,
  createdAt,
  updatedAt,
});

router.get(
  '/',
  bearer,
  check(['get:activities']),
  requestHook,
  (req, res, next) => {
    const Activity = req.db.model('Activity');

    const handle = (err, activities) => {
      if (err) return next(err);
      res.send(activities.map(sanitizeActivityOutput));
    };

    if (req.user.isAdmin) {
      Activity.find({}, handle);
      return;
    }

    // !!!!!!!
    handle(null, []);
  },
);

module.exports = router;
