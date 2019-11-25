const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  name: String,
  features: [String],
}, { timestamps: true });

module.exports = schema;
