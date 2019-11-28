// Whilst the configuration object can be modified here, the recommended way of making
// changes is via the presets' options or Neutrino's API in `.neutrinorc.js` instead.
// Neutrino's inspect feature can be used to view/export the generated configuration.
// eslint-disable-next-line import/no-extraneous-dependencies
const neutrino = require('neutrino');

const config = neutrino().webpack();

// config.devtool = false;
config.optimization.minimize = false;

module.exports = config;
