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
const capitalize = require('lodash.capitalize');

const initWS = require('./core/ws');
const modelRequestParam = require('./core/modelRequestParam');
const fixtures = require('./core/fixtures');
const searchPlugin = require('./core/search');
const errorHandler = require('./core/errorHandler');
const requestHook = require('./util/requestHook');
const uid = require('./util/uid');
const log = require('./util/log');
const makePostHandler = require('./util/makePostHandler');
const makeGetHandler = require('./util/makeGetHandler');
const makePatchHandler = require('./util/makePatchHandler');
const makeDeleteHandler = require('./util/makeDeleteHandler');

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
  app.set('host', config.host || 'localhost');
  app.set('localURL', config.localURL
    || `http://${app.get('host')}:${config.port}`);

  if (config.externalAccessURL) {
    app.set('externalAccessURL', config.externalAccessURL);
  } else if (config.env === 'development') {
    try {
      app.set('externalAccessURL', await ngrokTunnel(app.get('localURL'), config.ngrokDefaultURL));
      log('externalAccessURL', app.get('externalAccessURL'));
    } catch (err) {
      log(err.message);
    }
  }

  app.set('siteName', config.siteName
    || config.appId
    || (config.externalAccessURL
      || app.get('localURL')).split('//').pop());

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
      noSearch,
      searchOptions = {},
    }) => {
      if (!modelName || !schema) return;

      plugins.forEach(({ schemaPlugins = [] }) => {
        schemaPlugins.forEach(({
          modelName: pluginModelName,
          plugin: schemaPlugin,
        }) => {
          if (pluginModelName !== modelName && pluginModelName !== '*') return;
          schema.plugin(schemaPlugin, { eazinConfig: config });
        });
      });

      // that smells
      if (!noSearch) searchPlugin(schema, searchOptions);
      mongoose.model(modelName, schema);
    });
  });

  // ##### call dbReadyHooks plugin point
  plugins.forEach(({ dbReadyHooks = [] } = {}) => {
    dbReadyHooks.forEach((fn) => fn(mongoose));
  });

  // ##### call passportPrepareHooks plugin point
  plugins.forEach(({ passportPrepareHooks = [] } = {}) => {
    passportPrepareHooks.forEach((fn) => fn(config, passport, mongoose));
  });

  app.disable('x-powered-by');
  app.use(helmet());

  const apiRouter = express.Router();
  const apiPath = '/api';
  apiRouter.use(express.json());
  apiRouter.use(express.urlencoded({ extended: true }));
  apiRouter.use(passport.initialize());
  apiRouter.get('/up', (req, res) => res.send('OK'));

  apiRouter.use((req, res, next) => {
    req.hookRequest = callRequestHooks;
    next();
  });

  // ##### call apiRouter plugin point
  plugins.forEach(({ name, apiRouter: routingPlugins = [] }) => {
    routingPlugins.forEach(({ path: routerPath, router }) => {
      if (!routerPath || !router) return;

      if (name) {
        const subRouterPluginHook = `api${capitalize(name)}SubRouter`;
        plugins.forEach(({
          [subRouterPluginHook]: subPlugins = [],
        } = {}) => {
          subPlugins.forEach(({
            path: subRouterParentPath,
            subPath: subRouterPath,
            router: subRouter,
          }) => {
            if (
              subRouterParentPath !== routerPath
              || !subRouter
            ) return;

            router.use(subRouterPath || '/', (req, res, next) => {
              req.routingLevels = [apiPath, routerPath, subRouterPath]
                .filter(Boolean);
              next();
            }, subRouter);
          });
        });
      }

      apiRouter.use(routerPath, (req, res, next) => {
        req.routingLevels = [apiPath, routerPath];
        next();
      }, router);
    });
  });

  if (!NO_WS) initWS(httpServer, plugins);

  if (config.env === 'production') app.use(compression());

  app.use(apiPath, apiRouter);

  if (config.publicDir) {
    const staticIndexPath = path.resolve(process.cwd(), config.publicDir, 'index.html');
    try {
      const indexHTML = fs.readFileSync(staticIndexPath);
      app.use(express.static(config.publicDir, { dotfiles: 'allow' }));

      app.use((req, res, next) => {
        if (!req.accepts('html') || req.method !== 'GET') {
          next();
          return;
        }
        // log(`"${req.url}" not found, falling back to index.html`);
        res.set('Content-Type', 'text/html');
        res.send(indexHTML);
      });
    } catch (err) {
      log('Cannot serve "%s"', staticIndexPath);
    }
  }

  const db = await mongoose.connect(config.dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.set('db', db);

  if (config.env !== 'production') {
    app.use('/fixtures', fixtures(db));
    app.use('/kill', (req, res) => {
      res.status(204).end();
      httpServer.close();
    });
  }

  app.use(errorHandler);

  return {
    listen: (...args) => {
      if (!args.length) {
        return httpServer.listen({
          port: app.get('port'),
          host: app.get('host'),
        });
      }
      return httpServer.listen(...args);
    },
    close: (...args) => httpServer.close(...args),
    get: (name) => app.get(name),
    app,
  };
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
eazin.makePostHandler = makePostHandler;
eazin.makeGetHandler = makeGetHandler;
eazin.makePatchHandler = makePatchHandler;
eazin.makeDeleteHandler = makeDeleteHandler;
eazin.eazinRC = eazinRC;
eazin.model = (name) => mongoose.model(name);

module.exports = eazin;
