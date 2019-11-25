const mongoose = require('mongoose');
// eslint-disable-next-line import/no-extraneous-dependencies
const template = require('lodash.template');

const { Schema } = mongoose;

const schema = new Schema({
  message: String,
  data: Schema.Types.Mixed,
}, { timestamps: true });

schema.pre('save', async function preSaveActivity() {
  const tmpl = template(this.message || 'Missing activity message');
  this.message = tmpl(this.data || {});
});

module.exports = schema;
