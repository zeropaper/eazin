/* eslint-disable import/no-extraneous-dependencies */
const {
  httperrors,
  Router,
  requestHook,
} = require('eazin-core/server');
const mongoose = require('mongoose');
const passport = require('passport');

const { totp } = require('notp');
const TwoFAStartegy = require('passport-2fa-totp').Strategy;
const GoogleAuthenticator = require('passport-2fa-totp').GoogeAuthenticator;

const router = Router();

router.post('/setup',
  passport.authenticate('bearer', { session: false }),
  requestHook('request 2fa secret'),
  (req, res, next) => {
    const siteName = req.app.get('siteName');
    if (!siteName) return next(httperrors.InternalServerError('Missing siteName'));
    res.send(GoogleAuthenticator.register(`${siteName} (${req.user.email})`));
  });

router.post('/verify',
  passport.authenticate('bearer', { session: false }),
  requestHook('verify 2fa secret'),
  (req, res, next) => {
    if (!req.body.code) {
      const missingCodeError = httperrors.BadRequest('Missing 2FA code');
      missingCodeError.fields = { code: '2FA code is required' };
      next(missingCodeError);
      return;
    }

    const secret = GoogleAuthenticator.decodeSecret(req.body.secret);
    const verif = totp.verify(req.body.code, secret, {
      window: 6,
      time: 30,
    });

    if (!verif || typeof verif.delta === 'undefined') {
      next(httperrors.BadRequest('2FA code verification error'));
      return;
    }

    req.user.secret = req.body.secret;
    req.user.save((err) => {
      if (err) return next(err);
      res.status(204).end();
    });
  });

module.exports = {
  schemaPlugins: [
    {
      modelName: 'User',
      plugin: (schema) => {
        schema.add({
          secret: String,
        });
      },
    },
  ],
  passportPrepareHooks: [
    () => {
      const User = mongoose.model('User');

      passport.use('2fa-node', new TwoFAStartegy({
        usernameField: 'email',
        passwordField: 'password',
        codeField: 'code',
        passReqToCallback: true,
      }, (req, email, password, done) => {
        User.findByUsername(email, (err, user) => {
          if (err) return done(err);

          if (!user) {
            const userErr = new Error('Invalid email or password.');
            userErr.code = 400;
            userErr.fields = {
              email: 'Invalid email',
              password: 'Invalid password',
            };
            return done(userErr);
          }

          if (!req.body.code) {
            const missingCodeError = httperrors.BadRequest('Missing 2FA code');
            missingCodeError.fields = {
              code: '2FA code is required',
            };
            done(missingCodeError);
            return;
          }

          user.authenticate(password, (err) => {
            if (err) return done(err);

            if (!user.secret) {
              req.res.send({
                ...User.sanitizeOutput(),
                token: user.token,
              });
            } else {
              done(null, user);
            }
          });
        });
      }, (req, user, done) => {
        if (!user.secret) {
          done(new Error('Google Authenticator not set'));
        } else {
          done(null, GoogleAuthenticator.decodeSecret(user.secret), 30);
        }
      }));
    },
  ],
  apiRouter: [
    {
      path: '/2fa',
      router,
    },
  ],
  requestHooks: [
    (description, req, res, next) => {
      if (!req.originalUrl.endsWith('/user/login')) return next();

      passport.authenticate('2fa-node')(req, res, next);
    },
  ],
};
