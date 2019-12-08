const user = require('./plugins/user');
// const twofa = require('./2fa');
const client = require('./plugins/client');
const organisations = require('./plugins/organisations');
const groups = require('./plugins/groups');
const activity = require('./plugins/activity');
const docs = require('./plugins/docs');
const webhook = require('./plugins/webhook');

module.exports = [
  user,
  // twofa,
  client,
  organisations,
  groups,
  activity,
  docs,
  webhook,
];
