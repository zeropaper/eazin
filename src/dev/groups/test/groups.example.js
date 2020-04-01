const passport = require('passport');
const express = require('express');
const httperrors = require('httperrors');
const mongoose = require('mongoose');

const {
  modelRequestParam,
  log,
} = require('../../../packages/core/server');
const requestHook = require('../../../packages/core/server/util/requestHook');
const makePostHandler = require('../../../packages/core/server/util/makePostHandler');
const makeGetHandler = require('../../../packages/core/server/util/makeGetHandler');
const makePatchHandler = require('../../../packages/core/server/util/makePatchHandler');
const makeDeleteHandler = require('../../../packages/core/server/util/makeDeleteHandler');
const check = require('../../../packages/users/server/user.auth.checkRoles');

// --------------------------------------------

log('Group examples in use!');

const documentModelName = 'GroupDocument';

// --------------------------------------------

const bearer = passport.authenticate('bearer', { session: false });

const router = express.Router({ mergeParams: true });

const paramName = modelRequestParam(documentModelName, router);

const opts = {
  router,
  auth: bearer,
  name: 'group document',
  idName: paramName,
  modelName: documentModelName,
};

makePostHandler(opts);

router.get('/',
  bearer,
  requestHook(`list ${opts.name}s`),
  (req, res, next) => {
    const Model = mongoose.model(documentModelName);

    const handle = (err, activities) => {
      if (err) return next(err);
      res.send(activities);
    };

    const query = { ...req.query };
    if (req.user.isAdmin) return Model.search(query, handle);

    query.group = req.params.groupId;
    return Model.search(query, handle);
  });

makeGetHandler(opts);

makePatchHandler(opts);

makeDeleteHandler(opts);

// --------------------------------------------

const checkGroupMember = async (groupId, userId) => {
  const group = await mongoose.model('Group').findById(groupId);
  if (group.members.indexOf(userId) < 0) {
    throw httperrors.Unauthorized('Not Group Member');
  }
};

const accessCheck = async (description, req, res, next) => {
  const {
    user,
    routingLevels: [, routerPath, subRouterPath],
    params,
  } = req;

  const done = (err) => {
    if (typeof next === 'function') {
      next(err);
    } else if (err) {
      throw err;
    }
  };

  if (!user) return done(httperrors.NotFound());

  if (
    user.isAdmin
    || routerPath !== '/groups'
    || subRouterPath !== '/:groupId/documents'
  ) {
    return done();
  }

  try {
    const checks = [];
    await checkGroupMember(params.groupId, user._id);

    if (checks.length) await check(checks)(req, res);
    done();
  } catch (err) {
    done(err);
  }
};

// --------------------------------------------

const schema = new mongoose.Schema({
  group: { type: 'ObjectId', required: true, ref: 'Group' },
  title: { type: String, required: true },
  content: String,
});

// --------------------------------------------

module.exports = {
  apiGroupsSubRouter: [
    {
      path: '/groups',
      subPath: '/:groupId/documents',
      router,
    },
  ],
  schemas: [
    {
      modelName: documentModelName,
      schema,
    },
  ],
  requestHooks: [
    accessCheck,
  ],
};
