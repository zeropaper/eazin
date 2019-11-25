const user = require('./plugins/user');
// const twofa = require('./2fa');
const client = require('./plugins/client');
const company = require('./plugins/company');
const activity = require('./plugins/activity');
const docs = require('./plugins/docs');

module.exports = [
  user,
  // twofa,
  client,
  company,
  activity,
  docs,
];
