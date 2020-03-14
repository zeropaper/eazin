/* eslint-disable global-require */
// const BearerStrategy = require('passport-http-bearer').Strategy;
const oauth2orize = require('oauth2orize');

const authServer = oauth2orize.createServer();

module.exports = {
  name: 'API Clients',
  apiRouter: [
    {
      path: '/clients',
      router: require('./client.router'),
    },
  ],
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
};
