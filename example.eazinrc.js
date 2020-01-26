const {
  NODE_ENV = 'development',
} = process.env;

const config = {
  env: NODE_ENV,
  siteName: `eazin ${NODE_ENV}`,
  baseURL: 'http://localhost:5000/',
};

// ------------------------------------------------------------

config['eazin-mailer'] = {
  siteSender: `${config.siteName} <no-reply@eazin.local>`,
  // eslint-disable-next-line global-require
  templates: require('./src/packages/users/server/user.email.templates'),
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


// eslint-disable-next-line no-console
console.info('[eazin] using "%s" config', NODE_ENV);

module.exports = config;
