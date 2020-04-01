/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-arrow-callback */
const mongoose = require('mongoose');
const { deprecate } = require('util');

const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const uid = require('eazin-core/server/util/uid');
const mailSend = require('eazin-mailer/server');

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

schema.methods.login = async function login(password) {
  const res = await this.authenticate(password);
  if (res.error) {
    res.error.code = 400;
    res.error.fields = { password: res.error.message };
    throw res.error;
  }
  const user = this;
  user.token = uid(40);
  await user.save();
  return {
    ...user.toJSON(),
    token: user.token,
  };
};

schema.methods.logout = async function logout() {
  this.token = uid(40);
  await this.save();
};

schema.methods.changePassword = async function changeUserPassword(current, password) {
  const res = await this.authenticate(current);
  if (res.error) {
    res.error.code = 400;
    res.error.fields = { current: res.error.message };
    throw res.error;
  }
  await this.setPassword(password);
  await this.save();
};

schema.methods.toJSON = function toJSON(opts) {
  const {
    password,
    token,
    verifToken,
    emailToVerify,
    __v,

    _id: id,
    ...rest
  } = this.toObject(opts);
  return {
    id,
    ...rest,
  };
};

schema.methods.ensureRoles = function ensureRoles(roles, next) {
  this.roles = Array.from((new Set([
    ...roles,
    ...this.roles,
  ])).values());
  if (typeof next === 'function') return this.save(next);
  if (next) return this.save();
};

schema.statics.invite = async function inviteUser(baseURL, email, {
  sender,
  message: senderMessage,
  ...rest
} = {}) {
  const User = this;
  const verifToken = uid(40);

  User.register({
    ...User.sanitizeInput(rest),
    email,
    verifToken,
  }, uid(20), (err) => {
    if (err) {
      if (err.name === 'UserExistsError') {
        // eslint-disable-next-line no-param-reassign
        err.message = 'User may already exists';
        // eslint-disable-next-line no-param-reassign
        err.fields = {
          email: 'User may already exists',
        };
      }
      throw err;
    }

    return mailSend({
      token: verifToken,
      template: 'invite',
      to: email,
      baseURL,
      sender,
      senderMessage,
    });
  });
};

schema.statics.sanitizeInput = deprecate(({
  email,
  roles,
  firstName,
  lastName,
}) => ({
  email,
  roles,
  firstName,
  lastName,
}), 'use validation');

module.exports = schema;
