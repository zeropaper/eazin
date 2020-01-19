/* eslint-disable global-require */
const path = require('path');
const server = require('../packages/core/server');

const {
  PORT = 5001,
  PUBLIC_DIR = path.resolve(__dirname, '../../html-build'),
} = process.env;

server({
  publicDir: PUBLIC_DIR,
  plugins: [
    require('../packages/users/server'),

    require('../dev/kitchen-sink/server'),
    require('../dev/groups/server'),
    require('../dev/activities/server'),
    require('../dev/clients/server'),
    require('../dev/organisations/server'),
    require('../dev/webhook/server'),
    require('../dev/docs/server'),
    // require('../dev/repositories/server'),
    // require('../dev/ws/server'),
  ],
})
  .then((app) => {
    // eslint-disable-next-line no-console
    app.listen(PORT, () => console.info('API server listening on', PORT));
  })
  // eslint-disable-next-line no-console
  .catch((err) => console.error(`Server start failed: ${err.message}\n${err.stack}`));
