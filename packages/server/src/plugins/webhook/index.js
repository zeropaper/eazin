/* eslint-disable global-require */
module.exports = {
  apiRouter: [
    {
      path: '/webhook',
      router: require('./webhook.router'),
    },
  ],
  requestHooks: require('./webhook.requestHooks'),
};
