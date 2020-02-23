/* eslint-disable global-require */

const {
  TEST_TYPE,
  JEST_SERVE: PORT = 3030,
} = process.env;

const config = {
  // appName: 'test eazin',
  env: 'test',
  port: PORT,
  host: 'localhost',
  dbURL: `mongodb://localhost:27017/eazin-${TEST_TYPE}-test`,
  siteName: `eazin ${TEST_TYPE} test`,
  publicDir: './html-build',
};

// ------------------------------------------------------------

config['eazin-mailer'] = {
  siteSender: `${config.siteName} <no-reply@eazin.local>`,
  // eslint-disable-next-line global-require
  templates: require('../src/packages/users/server/user.email.templates'),
  transport: 'test',
};

// ------------------------------------------------------------

module.exports = config;
