/* eslint-disable global-require */

module.exports = {
  apiRouter: [
    {
      path: '/companies',
      router: require('./company.router'),
    },
  ],
  schemas: [
    {
      modelName: 'Company',
      schema: require('./company.schema'),
    },
  ],
  schemaPlugins: require('./company.schemaPlugins'),
};
