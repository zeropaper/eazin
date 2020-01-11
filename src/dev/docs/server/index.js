const router = require('./docs.router');

module.exports = {
  apiRouter: [
    {
      path: '/docs',
      router,
    },
  ],
};
