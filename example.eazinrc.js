const emailTemplates = require('eazin-users/server/user.email.templates');

const {
  PORT = 6060,
  NODE_ENV = 'development',
  MONGODB_URL = `mongodb://localhost:27017/eazin-site-${NODE_ENV}`,
  NOTIFICATION_EMAIL,
  NOTIFICATION_EMAIL_SERVER,
  NOTIFICATION_EMAIL_PASS,
  NOTIFICATION_EMAIL_PORT,
} = process.env;

const config = {
  appId: 'eazin.site',
  port: PORT,
  host: 'localhost',
  env: NODE_ENV,
  publicDir: './build',
  dbURL: MONGODB_URL,
  siteName: 'eazin.dev',
  localURL: NODE_ENV !== 'production'
    ? `http://localhost:${PORT}/`
    : 'https://example.com/',

  plugins: [
    'node_modules/eazin-users/server',
  ],
};

// ------------------------------------------------------------

config['eazin-mailer'] = {
  siteSender: `${config.siteName} <no-reply@eazin.dev>`,
  templates: emailTemplates,
  transport: NODE_ENV !== 'production'
    ? {
      host: 'localhost',
      port: 1025,
      auth: {
        user: 'project.2',
        pass: 'secret.2',
      },
    } : {
      host: NOTIFICATION_EMAIL_SERVER,
      port: NOTIFICATION_EMAIL_PORT,
      auth: {
        user: NOTIFICATION_EMAIL,
        pass: NOTIFICATION_EMAIL_PASS,
      },
    },
};

// ------------------------------------------------------------


// eslint-disable-next-line no-console
console.info('[eazin] using "%s" config', NODE_ENV);

module.exports = config;
