/* eslint-disable global-require */
const passport = require('passport');
const mongoose = require('mongoose');
const BearerStrategy = require('passport-http-bearer').Strategy;

module.exports = {
  name: 'Users',
  apiRouter: [
    {
      path: '/user',
      router: require('./user.router'),
    },
    {
      path: '/users',
      router: require('./users.router'),
    },
  ],
  schemas: [
    {
      modelName: 'User',
      schema: require('./user.schema'),
    },
  ],
  passportPrepareHooks: [
    () => {
      const UserModel = mongoose.model('User');
      passport.use(UserModel.createStrategy());

      passport.use(new BearerStrategy((token, done) => {
        UserModel.findOne({ token }, (err, user) => {
          if (err) return done(err);
          if (!user) return done(null, false);
          return done(null, user, { scope: 'read' });
        });
      }));

      passport.serializeUser(UserModel.serializeUser());
      passport.deserializeUser(UserModel.deserializeUser());
    },
  ],
};
