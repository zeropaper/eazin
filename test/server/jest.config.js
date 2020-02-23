// eslint-disable-next-line import/no-extraneous-dependencies
const neutrino = require('neutrino');
const path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'test';
process.env.TEST_TYPE = 'unit';
process.env.EAZIN_RC_PATH = process.env.EAZIN_RC_PATH
  || path.resolve(__dirname, '../ci.eazinrc');

const config = neutrino().jest();
// eslint-disable-next-line no-console
// console.info('jest config', config);

module.exports = config;
