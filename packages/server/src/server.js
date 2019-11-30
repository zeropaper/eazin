/* eslint-env node */
/* eslint-disable global-require */
const express = require('express');
// const cookieParser = require('cookie-parser');
const passport = require('passport');
const http = require('http');
const fs = require('fs');
const path = require('path');
const compression = require('compression');
const mongoose = require('mongoose');
const helmet = require('helmet');
const series = require('async-series');

const initWS = require('./core/ws');
const searchPlugin = require('./core/search');
const errorHandler = require('./core/errorHandler');

const {
  PUBLIC_DIR,
  NO_WS,
  NODE_ENV = 'development',
  APP_ID = 'HTS',
  // COOKIE_SECRET = 'B4d_1d3a_)*/!!!iuehiuenieinolkmélw90w287',
} = process.env;

const makeApp = async ({
  dbURL = `mongodb://localhost:27017/${APP_ID}-${NODE_ENV}`,
  publicDir = PUBLIC_DIR,
  plugins,
} = {}) => {
  const app = express();
  const httpServer = http.Server(app);

  const callRequestHooks = (req, res, next) => {
    let hooks = [];
    plugins.forEach(({ requestHooks = [] } = {}) => {
      hooks = [...hooks, ...requestHooks];
    });
    if (!hooks.length) return next();
    series(hooks.map((hook) => (cb) => hook(req, res, cb)), next);
  };

  plugins.forEach(({
    schemas = [],
  } = {}) => {
    schemas.forEach(({
      modelName,
      schema,
      noSearch,
      searchOptions = {},
    }) => {
      if (!modelName || !schema) return;

      plugins.forEach(({ schemaPlugins = [] }) => {
        schemaPlugins.forEach(({
          modelName: pluginModelName,
          plugin: schemaPlugin,
        }) => {
          if (pluginModelName !== modelName) return;
          schema.plugin(schemaPlugin);
        });
      });

      if (!noSearch) searchPlugin(schema, searchOptions);
      mongoose.model(modelName, schema);
    });
  });

  plugins.forEach(({ dbReadyHooks = [] } = {}) => {
    dbReadyHooks.forEach((fn) => fn(mongoose));
  });

  plugins.forEach(({ passportPrepareHooks = [] } = {}) => {
    passportPrepareHooks.forEach((fn) => fn(passport, mongoose));
  });

  app.disable('x-powered-by');
  app.use(helmet());

  const apiRouter = express.Router();
  apiRouter.use(express.json());
  apiRouter.use(express.urlencoded({ extended: true }));
  apiRouter.use(passport.initialize());
  apiRouter.get('/up', (req, res) => res.send('OK'));

  apiRouter.use((req, res, next) => {
    req.db = app.db;
    req.passport = passport;
    req.hookRequest = callRequestHooks;
    next();
  });

  plugins.forEach(({ apiRouter: apiPlugins = [] } = {}) => {
    apiPlugins.forEach(({ path: apiPath, router }) => {
      if (!apiPath || !router) return;
      apiRouter.use(apiPath, router);
    });
  });

  if (!NO_WS) initWS(httpServer);

  if (NODE_ENV === 'production') app.use(compression());

  const publicDirAbsPath = !!publicDir && path.resolve(publicDir);
  if (publicDirAbsPath) {
    app.use(express.static(publicDirAbsPath, { dotfiles: 'allow' }));

    const staticIndexPath = path.join(publicDirAbsPath, 'index.html');
    try {
      const indexHTML = fs.readFileSync(staticIndexPath);
      app.use((req, res, next) => {
        if (!req.accepts('html') || req.method !== 'GET') {
          next();
          return;
        }
        res.set('Content-Type', 'text/html');
        res.send(indexHTML);
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('Cannot serve "%s"', staticIndexPath);
    }
  }

  app.use('/api', apiRouter);

  app.use(errorHandler);

  httpServer.db = await mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  app.db = httpServer.db;

  return httpServer;
};

module.exports = makeApp;
