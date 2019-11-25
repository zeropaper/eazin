/* eslint-disable prefer-arrow-callback */
const mongoose = require('mongoose');

const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const schema = new Schema({
  isVerified: Boolean,
  verificationCode: String,
  isAdmin: Boolean,
  token: String,
  roles: [String],
}, { timestamps: true });

const allowed = '1234567890abcdefghijklmnopqrstuvwxyz!?@#()-._+/[]{}ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const randString = (length = 36) => {
  let str = '';
  const s = () => allowed[Math.floor(Math.random() * allowed.length)];
  for (; str.length <= length;) {
    str += s();
  }
  return str;
};

schema.pre('save', function preSave(next) {
  this.token = this.token || randString();
  next();
});

// https://github.com/saintedlama/passport-local-mongoose#main-options
schema.plugin(passportLocalMongoose, {
  usernameField: 'email',
});

schema.statics.sanitizeOutput = ({
  _id: id,
  username,
  roles,
  companies,
  isVerified,
}) => ({
  id,
  username,
  roles,
  companies,
  isVerified,
});

module.exports = schema;
