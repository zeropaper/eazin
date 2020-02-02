// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('supertest');

const server = require('../../src/packages/core/server');

module.exports = async ({ plugins = [] } = {}) => {
  const { app } = await server({ plugins });

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
