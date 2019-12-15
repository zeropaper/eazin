const express = require('express');

const check = require('eazin-users/src/server/user.auth.checkRoles');
const bearer = require('eazin-users/src/server/user.auth.bearer');
const requestHook = require('eazin-server/src/util/requestHook');

const groupIdParam = require('./groups.param');

const router = express.Router();

router.param('groupId', groupIdParam);

router.get(
  '/',
  bearer,
  check(['get:groups']),
  requestHook,
  (req, res, next) => {
    const Group = req.db.model('Group');
    const handle = (err, groups) => {
      if (err) return next(err);
      res.send(groups.map(Group.sanitizeOutput));
    };

    if (req.user.isAdmin) {
      Group.find({}, handle);
      return;
    }

    Group.find({ _id: { $in: req.user.groups } }, handle);
  },
);

router.post(
  '/',
  bearer,
  check(['post:groups']),
  requestHook,
  async (req, res, next) => {
    try {
      const Group = req.db.model('Group');
      const sanitized = Group.sanitizeInput(req.body);
      sanitized.admin = req.user._id;
      const group = await Group.create(sanitized);
      res.status(201).send(Group.sanitizeOutput(group));
    } catch (err) {
      next(err);
    }
  },
);

router.get(
  '/:groupId',
  bearer,
  check(['get:groups/:groupId']),
  requestHook,
  (req, res) => res.send(req.db.model('Group').sanitizeOutput(req.loadedParams.groupId)),
);

router.get(
  '/:groupId/members',
  bearer,
  check(['get:groups/:groupId']),
  requestHook,
  async (req, res, next) => {
    const { groupId: { members, admin } } = req.loadedParams;
    const User = req.db.model('User');
    User.find({ _id: [...members, admin] }, (err, users) => {
      if (err) return next(err);
      res.status(200).send((users || []).map(User.sanitizeOutput));
    });
  },
);

router.patch(
  '/:groupId',
  bearer,
  check(['patch:groups/:groupId']),
  requestHook,
  (req, res, next) => {
    const Group = req.db.model('Group');
    const { groupId: group } = (req.loadedParams || {});
    const sanitized = Group.sanitizeInput(req.body);

    Object.keys(sanitized)
      .forEach((key) => {
        if (typeof sanitized[key] !== 'undefined') group[key] = sanitized[key];
      });

    group.save(sanitized, (err, updated) => {
      if (err) return next(err);
      res.send(Group.sanitizeOutput(updated));
    });
  },
);

router.delete(
  '/:groupId',
  bearer,
  check(['delete:groups/:groupId']),
  requestHook,
  (req, res, next) => req.loadedParams.group.remove((err) => {
    if (err) return next(err);
    res.send({});
  }),
);

module.exports = router;
