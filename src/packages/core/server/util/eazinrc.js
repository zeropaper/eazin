const path = require('path');

// const log = require('./log');

const rcpath = path.resolve(process.cwd(), process.env.EAZIN_RC_PATH || './.eazinrc');
// eslint-disable-next-line import/no-dynamic-require
const config = require(rcpath);

if (!config.port) throw new Error('.eazinrc.js error: missing port');
if (!config.host) throw new Error('.eazinrc.js error: missing host');
if (!config.dbURL) throw new Error('.eazinrc.js error: missing dbURL');
if (!config.baseURL) throw new Error('.eazinrc.js error: missing baseURL');

// log(`config loaded from ${rcpath}.js`);

module.exports = () => config;
