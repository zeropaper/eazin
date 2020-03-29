/* eslint-disable global-require */

module.exports = {
  name: 'Groups',
  apiRouter: [
    {
      path: '/groups',
      router: require('./groups.router'),
    },
  ],
  schemas: [
    {
      modelName: 'Group',
      schema: require('./groups.schema'),
    },
  ],
};
