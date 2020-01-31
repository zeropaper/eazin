/* eslint-env node */
/* eslint-disable global-require */
const express = require('express');
const passport = require('passport');
const superagent = require('superagent');
const httperrors = require('httperrors');
const http = require('http');
const fs = require('fs');
const path = require('path');
const compression = require('compression');
const mongoose = require('mongoose');
const helmet = require('helmet');
const series = require('async-series');

const initWS = require('./core/ws');
const modelRequestParam = require('./core/modelRequestParam');
const fixtures = require('./core/fixtures');
const searchPlugin = require('./core/search');
const errorHandler = require('./core/errorHandler');
const requestHook = require('./util/requestHook');
const uid = require('./util/uid');
const log = require('./util/log');

const eazinRC = require('./util/eazinrc');

const {
  NO_WS,
} = process.env;

mongoose.set('useCreateIndex', true);

const loadPlugin = (cwd = process.cwd()) => (pluginPath) => (
  typeof pluginPath === 'string'
    // eslint-disable-next-line import/no-dynamic-require
    ? require(path.resolve(cwd, pluginPath))
    : pluginPath
);

const ngrokDefaultURL = 'http://127.0.0.1:4040/api/tunnels';

const ngrokTunnel = async (localURL, ngrokURL = ngrokDefaultURL) => {
  const tunnelsResponse = await superagent
    .get(ngrokURL);
  const { tunnels } = tunnelsResponse.body;
  const tunnel = tunnels.find(({
    proto,
    config: { addr },
  }) => (
    proto === 'https'
    && addr === localURL
  ));
  return (tunnel || {}).public_url;
};

const eazin = async ({
  plugins: passedPlugins,
} = {}) => {
  const config = eazinRC();
  const plugins = passedPlugins || config.plugins.map(loadPlugin());

  const app = express();
  const httpServer = http.Server(app);
  app.set('port', config.port);
  app.set('localURL', config.localURL
    || `http://${config.hostname || 'localhost'}:${config.port}`);
  try {
    app.set('externalAccessURL', config.externalAccessURL
      || await ngrokTunnel(app.get('localURL')));
    log('externalAccessURL', app.get('externalAccessURL'));
  } catch (err) {
    log(err.message);
  }

  // eslint-disable-next-line consistent-return
  const callRequestHooks = (description, req, res, next) => {
    let hooks = [];
    // ##### call requestHooks plugin point
    plugins.forEach(({ requestHooks = [] } = {}) => {
      hooks = [...hooks, ...requestHooks];
    });
    if (!hooks.length) return next();
    series(hooks.map((hook) => (cb) => hook(description, req, res, cb)), next);
  };

  // ##### call schema plugin point
  plugins.forEach(({
    schemas = [],
  } = {}) => {
    schemas.forEach(({
      modelName,
      schema,
      addSearch,
      searchOptions = {},
    }) => {
      if (!modelName || !schema) return;

      plugins.forEach(({ schemaPlugins = [] }) => {
        schemaPlugins.forEach(({
          modelName: pluginModelName,
          plugin: schemaPlugin,
        }) => {
          if (pluginModelName !== modelName) return;
          schema.plugin(schemaPlugin, { eazinConfig: config });
        });
      });

      if (!addSearch) searchPlugin(schema, searchOptions);
      mongoose.model(modelName, schema);
    });
  });

  // ##### call dbReadyHooks plugin point
  plugins.forEach(({ dbReadyHooks = [] } = {}) => {
    dbReadyHooks.forEach((fn) => fn(mongoose));
  });

  // ##### call passportPrepareHooks plugin point
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

  // ##### call apiRouter plugin point
  plugins.forEach(({ apiRouter: apiPlugins = [] } = {}) => {
    apiPlugins.forEach(({ path: apiPath, router }) => {
      if (!apiPath || !router) return;
      apiRouter.use(apiPath, router);
    });
  });

  if (!NO_WS) initWS(httpServer, plugins);

  if (config.env === 'production') app.use(compression());

  if (config.publicDir) {
    app.use(express.static(config.publicDir, { dotfiles: 'allow' }));

    const staticIndexPath = path.join(config.publicDir, 'index.html');
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

  const db = await mongoose.connect(config.dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.db = db;
  httpServer.db = db;
  app.set('db', db);

  if (config.env !== 'production') app.use('/fixtures', fixtures(db));

  app.use(errorHandler);

  const { listen } = app;
  app.listen = (...args) => {
    let cb = () => {};
    if (typeof args[args.length - 1] === 'function') cb = args.pop();

    listen.call(app, ...args, (err) => {
      if (!err) {
        // ##### call appReadyHooks plugin point
        plugins.forEach(({ appReadyHooks = [] } = {}) => {
          appReadyHooks.forEach((fn) => fn(app));
        });
      }
      return cb(err);
    });
  };
  return app;
};

eazin.Router = express.Router;
eazin.httperrors = httperrors;
eazin.mongoose = mongoose;
eazin.series = series;
eazin.searchPlugin = searchPlugin;
eazin.errorHandler = errorHandler;
eazin.requestHook = requestHook;
eazin.uid = uid;
eazin.log = log;
eazin.modelRequestParam = modelRequestParam;
eazin.model = (name) => mongoose.model(name);

module.exports = eazin;
