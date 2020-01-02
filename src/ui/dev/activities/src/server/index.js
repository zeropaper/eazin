/* eslint-disable global-require */

module.exports = {
  apiRouter: [
    {
      path: '/activities',
      router: require('./activity.router'),
    },
  ],
  schemas: [
    {
      modelName: 'Activity',
      schema: require('./activity.schema'),
    },
  ],
  requestHooks: require('./activity.requestHooks'),
};
