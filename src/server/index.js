/* eslint-disable global-require */
const path = require('path');
const server = require('../packages/core/src/server');

const {
  PORT = 5001,
  PUBLIC_DIR = path.resolve(__dirname, '../../html-build'),
} = process.env;

server({
  publicDir: PUBLIC_DIR,
  plugins: [
    require('../packages/users/src/server'),
    // require('../../packages/mailer/src/server'),

    require('../dev/kitchen-sink/src/server'),
    require('../dev/groups/src/server'),
    require('../dev/organisations/src/server'),
    require('../dev/clients/src/server'),
    require('../dev/webhook/src/server'),
    require('../dev/docs/src/server'),
  ],
})
  .then((app) => {
    // eslint-disable-next-line no-console
    app.listen(PORT, () => console.info('API server listening on', PORT));
  })
  // eslint-disable-next-line no-console
  .catch((err) => console.error(`Server start failed: ${err.message}\n${err.stack}`));
