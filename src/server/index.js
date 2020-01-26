/* eslint-disable global-require */
const ngrok = require('ngrok');

const server = require('../packages/core/server');
const log = require('../packages/core/server/util/log');

const {
  PORT = 5001,
} = process.env;

server()
  .then((app) => {
    app.listen(PORT, async () => {
      const ngrokURL = await ngrok.connect(PORT);
      log(`API server listening on http://localhost:${PORT}`, ngrokURL);
      app.on('close', () => {
        log('kill ngrok');
        ngrok.kill();
      });
    });
  })
  // eslint-disable-next-line no-console
  .catch((err) => console.error(`Server start failed: ${err.message}\n${err.stack}`));
