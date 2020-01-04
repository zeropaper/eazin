const path = require('path');

const rcpath = process.env.EAZIN_RC_PATH
  || path.resolve(process.cwd(), './.eazinrc');
// eslint-disable-next-line import/no-dynamic-require
const config = require(rcpath);

// eslint-disable-next-line no-console
console.info('[eazin] config loaded from', rcpath);

module.exports = () => config;
