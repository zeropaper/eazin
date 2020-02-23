/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-arrow-callback */
const mongoose = require('mongoose');

const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const uid = require('eazin-core/server/util/uid');

const schema = new Schema({
  token: String,
  isAdmin: { type: Boolean, default: false },
  isVerified: { type: Boolean, default: false },
  emailToVerify: String,
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

schema.methods.changePassword = async function changeUserPassword(current, password) {
  const res = await this.authenticate(current);
  if (res.error) {
    res.error.fields = { current: res.error.message };
    throw res.error;
  }
  await this.setPassword(password);
  await this.save();
};

schema.statics.sanitizeInput = ({
  email,
  roles,
  firstName,
  lastName,
}) => ({
  email,
  roles,
  firstName,
  lastName,
});

schema.statics.sanitizeOutput = ({
  _id: id,
  email,
  roles,
  firstName,
  lastName,
  isVerified,
  createdAt,
  updatedAt,
}) => ({
  id,
  email,
  roles,
  firstName,
  lastName,
  isVerified,
  createdAt,
  updatedAt,
});

module.exports = schema;
