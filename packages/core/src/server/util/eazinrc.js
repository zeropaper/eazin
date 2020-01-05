const path = require('path');

const rcpath = path.resolve(process.cwd(), process.env.EAZIN_RC_PATH || './.eazinrc');
// eslint-disable-next-line import/no-dynamic-require
const config = require(rcpath);

// eslint-disable-next-line no-console
console.info('[eazin] config loaded from', rcpath);

module.exports = () => config;
