/* eslint-disable global-require */
const path = require('path');

const {
  PORT = 5001,
  PUBLIC_DIR = path.resolve(__dirname, './html-build'),
  NODE_ENV = 'development',
  APP_ID = 'eazin',
} = process.env;

const config = {
  appId: APP_ID,
  port: PORT,
  env: NODE_ENV,
  publicDir: PUBLIC_DIR,
  siteName: `eazin ${NODE_ENV}`,
  baseURL: 'http://localhost:5000/',
  dbURL: `mongodb://localhost:27017/${APP_ID}-${NODE_ENV}`,
  plugins: [
    './src/packages/users/server',
    // --------- vvvv DEV vvvv
    './src/dev/kitchen-sink/server',
    './src/dev/groups/server',
    './src/dev/activities/server',
    './src/dev/clients/server',
    './src/dev/organisations/server',
    './src/dev/docs/server',
  ],
};

// ------------------------------------------------------------

config['eazin-mailer'] = {
  siteSender: `${config.siteName} <no-reply@eazin.local>`,
  // eslint-disable-next-line global-require
  templates: require('./src/packages/users/server/user.email.templates'),
  // for NodemailerApp usage
  transport: {
    host: 'localhost',
    port: 1025,
    auth: {
      user: 'project.1',
      pass: 'secret.1',
    },
  },
};

// ------------------------------------------------------------

module.exports = config;
