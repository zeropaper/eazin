/* eslint-disable global-require */

module.exports = {
  apiRouter: [
    {
      path: '/organisations',
      router: require('./organisations.router'),
    },
  ],
  schemas: [
    {
      modelName: 'Organisation',
      schema: require('./organisations.schema'),
    },
  ],
  schemaPlugins: require('./organisations.schemaPlugins'),
};
