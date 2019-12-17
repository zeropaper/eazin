// eslint-disable-next-line import/no-extraneous-dependencies
const neutrino = require('neutrino');

process.env.NODE_ENV = process.env.NODE_ENV || 'test';
process.env.TEST_TYPE = 'unit';

const config = neutrino().jest();
// eslint-disable-next-line no-console
// console.info('jest config', config);

module.exports = config;
