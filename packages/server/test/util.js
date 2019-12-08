// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('supertest');

// const User = require('../../server/src/user/user.model');
const server = require('../src/server');

module.exports = async ({ plugins = [] } = {}) => {
  // mongoose.connection.collections['collectionName'].drop( function(err) {
  //   console.log('collection dropped');
  // });

  const app = await server({ plugins });

  // await Promise.all(Object.keys(app.db.models)
  //   .map((modelName) => app.db.models[modelName].deleteMany({})));

  return {
    app,
    request: () => request(app),
    // HTTP methods shortcuts
    get: (url) => request(app).get(url),
    post: (url) => request(app).post(url),
    put: (url) => request(app).put(url),
    patch: (url) => request(app).patch(url),
    delete: (url) => request(app).delete(url),
    options: (url) => request(app).options(url),
    head: (url) => request(app).head(url),
    connect: (url) => request(app).connect(url),
    trace: (url) => request(app).trace(url),
  };
};
