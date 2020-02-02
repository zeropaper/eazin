const path = require('path');

const log = require('./log');

const rcpath = path.resolve(process.cwd(), process.env.EAZIN_RC_PATH || './.eazinrc');
// eslint-disable-next-line import/no-dynamic-require
const config = require(rcpath);

log(`config loaded from ${rcpath}.js`);

module.exports = () => config;
