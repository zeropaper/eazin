/* eslint-disable prefer-arrow-callback */
const mongoose = require('mongoose');

const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const uid = require('../../util/uid');

const schema = new Schema({
  token: String,
  isAdmin: { type: Boolean, default: false },
  isVerified: { type: Boolean, default: false },
  verifToken: String,
  roles: [String],
  firstName: String,
  lastName: String,
}, { timestamps: true });

schema.pre('save', function preSave(next) {
  this.verifToken = this.verifToken || uid(16);
  this.token = this.token || uid(16);
  next();
});

// https://github.com/saintedlama/passport-local-mongoose#main-options
schema.plugin(passportLocalMongoose, {
  usernameField: 'email',
});

schema.statics.sanitizeInput = ({
  email,
  roles,
  firstName,
  lastName,
  organisations,
}) => ({
  email,
  roles,
  firstName,
  lastName,
  organisations,
});

schema.statics.sanitizeOutput = ({
  _id: id,
  email,
  roles,
  firstName,
  lastName,
  organisations,
  isVerified,
  createdAt,
  updatedAt,
}) => ({
  id,
  email,
  roles,
  firstName,
  lastName,
  organisations,
  isVerified,
  createdAt,
  updatedAt,
});

module.exports = schema;
