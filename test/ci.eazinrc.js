const {
  NODE_ENV = 'development',
  JEST_SERVE: PORT = 3030,
} = process.env;

const config = {
  env: NODE_ENV,
  port: PORT,
  siteName: `eazin ${NODE_ENV}`,
  baseURL: `http://localhost:${PORT}/`,
  dbURL: `mongodb://localhost:27017/eazin-ci-${NODE_ENV}`,
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


// eslint-disable-next-line no-console
console.info('[eazin] using "%s" config', NODE_ENV);

module.exports = config;
