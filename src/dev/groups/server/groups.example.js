const passport = require('passport');
const express = require('express');
const httperrors = require('httperrors');
const mongoose = require('mongoose');

const {
  // requestHook,
  modelRequestParam,
  log,
  // makePostHandler,
  // makeGetHandler,
  // makePatchHandler,
  // makeDeleteHandler,
} = require('../../../packages/core/server');

// const groupContentPlugin = require('./group-content-plugin');

// --------------------------------------------

log('Group examples in use!');

const documentModelName = 'GroupExampleDocument';

// --------------------------------------------

const bearer = passport.authenticate('bearer', { session: false });
// const bearer = (req, res, next) => next();

const router = express.Router();

const paramName = modelRequestParam(documentModelName, router);

const logReq = (req, res, next) => {
  // const { user } = req;
  // log(`${documentModelName} ${req.method}(${user && user.email}) request ${req.originalUrl}`, req.params);
  next();
};
const notImplemented = (req, res, next) => next(httperrors.NotImplemented());
const idPath = `/:${paramName}`;

router.use(bearer);

router.get('/', logReq, notImplemented);

router.post('/', logReq, notImplemented);

router.get(idPath, logReq, notImplemented);

router.patch(idPath, logReq, notImplemented);

router.delete(idPath, logReq, notImplemented);


// --------------------------------------------

const schema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,
});

// --------------------------------------------

module.exports = {
  apiRouter: [
    {
      path: '/group-documents',
      // path: '/groups/:groupId/documents',
      router,
    },
  ],
  schemas: [
    {
      modelName: documentModelName,
      schema,
    },
  ],
};
