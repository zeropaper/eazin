const httperrors = require('httperrors');
const moment = require('moment');
const mongoose = require('mongoose');
const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;

module.exports = () => () => {
  const APIToken = mongoose.model('APIToken');
  const User = mongoose.model('User');

  const ensureTTL = (apiToken, done) => {
    if (!apiToken.expiresAt) {
      return done(null, apiToken, apiToken.scope);
    }

    const date = moment(apiToken.expiresAt).toDate();
    if (date <= new Date()) {
      return done(httperrors.Unauthorized('Token expired'));
    }

    return done(null, apiToken, apiToken.scope);
  };

  // "bearer" for APIClient startegy, checks APIToken
  passport.use('bearer-apiclient', new BearerStrategy((token, done) => {
    APIToken.findOne({ token }, (err, apiToken) => {
      if (err) return done(err);
      if (apiToken) return ensureTTL(apiToken, done);

      done(null, false);
    });
  }));

  // "bearer" startegy, checks first for APIToken and User after
  passport.use('bearer-composite', new BearerStrategy((token, done) => {
    // const hashedToken = crypto.createHash('sha1').update(token).digest('hex');
    APIToken.findOne({
      // token: hashedToken,
      token,
    }, (err, apiToken) => {
      if (err) return done(err);
      if (apiToken) return ensureTTL(apiToken, done);

      User.findOne({ token }, (err, user) => {
        if (err) return done(err);
        // plugin point needed here
        if (!user) return done(null, false);
        return done(null, user, { scope: 'read' });
      });
    });
  }));
};
