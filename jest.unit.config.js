// eslint-disable-next-line import/no-extraneous-dependencies
const neutrino = require('neutrino');

process.env.NODE_ENV = process.env.NODE_ENV || 'test';
process.env.TEST_TYPE = 'unit';

module.exports = neutrino().jest();
