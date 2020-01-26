/* eslint-disable global-require */
const server = require('../packages/core/server');

const {
  PORT = 5001,
} = process.env;

server()
  .then((app) => {
    // eslint-disable-next-line no-console
    app.listen(PORT, () => console.info('API server listening on', PORT));
  })
  // eslint-disable-next-line no-console
  .catch((err) => console.error(`Server start failed: ${err.message}\n${err.stack}`));
