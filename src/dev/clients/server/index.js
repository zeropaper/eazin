/* eslint-disable global-require */
const oauth2orize = require('oauth2orize');

const authServer = oauth2orize.createServer();
const check = require('../../../packages/users/server/user.auth.checkRoles');

module.exports = {
  name: 'API Clients',
  apiRouter: require('./client.router'),
  schemas: require('./client.schemas'),
  schemaPlugins: [
    require('./client.schemaPlugin')(authServer),
  ],
  dbReadyHooks: [
    require('./client.dbReady')(authServer),
  ],
  passportPrepareHooks: [
    require('./client.passportPrepare')(authServer),
  ],
  requestHooks: [
    async (desc, req, res, next) => {
      const done = (err) => {
        if (typeof next === 'function') {
          next(err);
        } else if (err) {
          throw err;
        }
      };

      try {
        const checks = [];
        const {
          method,
          routingLevels: [, routerPath],
          params: {
            apiClient,
            apiToken,
          },
        } = req;
        if (['/tokens', '/clients'].indexOf(routerPath) < 0) {
          return done();
        }
        const lcMethod = method.toLowerCase();

        if (lcMethod === 'post') {
          checks.push('post:clients');
        }

        if (!apiClient && lcMethod === 'get') {
          checks.push('get:clients');
        }

        if (apiClient) checks.push(`${lcMethod}:clients/:apiClient`);

        if (apiToken) checks.push(`${lcMethod}:tokens/:apiToken`);

        if (checks.length) await check(checks)(req, res);
        done();
      } catch (err) {
        done(err);
      }
    },
  ],
};
