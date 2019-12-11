const user = require('../../users');
// const twofa = require('../../fa');
const client = require('../../clients');
const organisations = require('../../organisations');
const groups = require('../../groups');
const activity = require('../../activities');
const docs = require('../../docs');
const webhook = require('../../webhook');

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
