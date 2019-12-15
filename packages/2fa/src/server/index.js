/* eslint-disable global-require */
const TwoFAStartegy = require('passport-2fa-totp').Strategy;
const GoogleAuthenticator = require('passport-2fa-totp').GoogeAuthenticator;

module.exports = {
  apiRouter: [
    {
      path: '/2fa',
      router: require('./2fa.router'),
    },
  ],
  passportPrepareHooks: [
    (passport, mongoose) => {
      const UserModel = mongoose.model('User');
      passport.use('2falogin', new TwoFAStartegy({
        usernameField: 'email',
        passwordField: 'password',
        codeField: 'code',
        passReqToCallback: true,
      }, (req, email, password, done) => {
        // debug('first pass req', email);
        UserModel.findByUsername(email, (err, user) => {
          if (err) return done(err);
          if (!user) return done(new Error('Invalid email or password.'));

          user.authenticate(password, (err, authUser) => {
            // debug('…authenticated?', err, authUser);
            if (err) return done(err);

            if (!authUser.secret) {
              req.logIn(authUser, (err) => {
                // debug('…logged in?', err);
                if (err) return done(err);
                // req.flash('info', 'Successfully logged in.');

                // const destination = req.query.destination || req.body.destination || '/account';
                // req.session.destination = destination;
                // req.flash('info', '2FA setup required.');
                req.res.redirect('/2fa');
              });
            } else {
              done(null, user);
            }
          });
        });
      }, (req, user, done) => {
        // debug('second pass req.user', !!req.user, user.email);
        if (!user.secret) {
          done(new Error('Google Authenticator not set'));
        } else {
          done(null, GoogleAuthenticator.decodeSecret(user.secret), 30);
        }
      }));

      passport.use('2faregister', new TwoFAStartegy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true,
        skipTotpVerification: true,
      }, ((req, email, password, done) => {
        UserModel.register({ email }, password, done);
      })));
    },
  ],
};
