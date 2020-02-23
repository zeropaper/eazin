/* eslint-disable global-require */

const eazin = require('../packages/core/server');

const { log } = eazin;

eazin()
  .then((app) => app.listen({
    port: app.get('port'),
    host: app.get('host'),
  }, () => {
    log(`API server listening on ${app.get('localURL')}`, app.get('externalAccessURL'));
  }))
  // eslint-disable-next-line no-console
  .catch((err) => console.error(`Server start failed: ${err.message}\n${err.stack}`));
