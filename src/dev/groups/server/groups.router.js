/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');

const check = require('../../../packages/users/server/user.auth.checkRoles');
const bearer = require('../../../packages/users/server/user.auth.bearer');
const requestHook = require('../../../packages/core/server/util/requestHook');

const groupIdParam = require('./groups.param');

const router = express.Router();

router.param('groupId', groupIdParam);

router.get(
  '/',
  bearer,
  check(['get:groups']),
  requestHook('list groups'),
  (req, res, next) => {
    const Group = req.db.model('Group');

    const handle = (err, groups) => {
      if (err) return next(err);
      res.send(groups);
    };

    if (req.user.isAdmin) {
      Group.search({
        ...req.query,
        limit: 10,
      }, handle);
      return;
    }

    const userId = req.user._id;
    Group.search({
      ...req.query,
      limit: 10,
      filters: {
        $or: [
          { members: userId },
          { admin: userId },
        ],
      },
    }, handle);
  },
);

router.post(
  '/',
  bearer,
  check(['post:groups']),
  requestHook('create group'),
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
  requestHook('get group details'),
  (req, res) => res.send(req.db.model('Group').sanitizeOutput(req.loadedParams.groupId)),
);

router.post(
  '/:groupId/members',
  bearer,
  check(['invite:groups/:groupId']),
  requestHook('add group member'),
  (req, res, next) => req.loadedParams.groupId.addMembers(req.body)
    .then((members) => res.status(200).send(members))
    .catch(next),
);

router.get(
  '/:groupId/members',
  bearer,
  check(['get:groups/:groupId']),
  requestHook('get group members'),
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
  requestHook('update group'),
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
  '/:groupId/members',
  bearer,
  check(['revoke:groups/:groupId']),
  requestHook('remove group member'),
  (req, res, next) => req.loadedParams.groupId.removeMembers(req.body)
    .then((members) => res.status(200).send(members))
    .catch(next),
);

router.delete(
  '/:groupId',
  bearer,
  check(['delete:groups/:groupId']),
  requestHook('delete group'),
  (req, res, next) => req.loadedParams.groupId.remove(async (err) => {
    if (err) return next(err);
    res.status(204);
    res.end();
  }),
);

module.exports = router;
