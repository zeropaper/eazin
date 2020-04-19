/* eslint-disable import/no-extraneous-dependencies */
const crypto = require('crypto');
const {
  httperrors,
  Router,
  requestHook,
} = require('eazin-core/server');
const mongoose = require('mongoose');
const passport = require('passport');

const { totp } = require('notp');
const TwoFAStartegy = require('passport-2fa-totp').Strategy;
const GoogleAuthenticator = require('./GoogleAuthenticator');

const bearer = passport.authenticate('bearer', { session: false });

const {
  EAZIN_OTP_BACKUP_SECRET = 'sl1ghtlyUns4f3',
} = process.env;

const randomStr = (len = 12) => {
  const arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let ans = '';
  for (let i = len; i > 0; i -= 1) {
    ans += arr[Math.floor(Math.random() * arr.length)];
  }
  return ans;
};

const generateCodes = (secret, count = 10) => {
  const returned = {
    plain: [],
    hashed: [],
  };
  for (let c = 0; c < count; c += 1) {
    const code = randomStr();
    returned.hashed.push(crypto.createHmac('sha256', secret)
      .update(code)
      .digest('hex')
      .toString());
    returned.plain.push(code);
  }
  return returned;
};

const router = Router();
router.get('/setup',
  bearer,
  requestHook('request totp status'),
  (req, res) => res.send(!!(req.user.totp || {}).secret));

router.post('/setup',
  bearer,
  requestHook('request totp secret'),
  (req, res, next) => {
    const siteName = req.app.get('siteName');
    if (!siteName) return next(httperrors.InternalServerError('Missing siteName'));

    const info = GoogleAuthenticator.register(req.user.email, siteName);
    info.qr64 = `data:image/svg+xml;base64,${Buffer.from(info.qr).toString('base64')}`;

    req.user.totp.secretVerification = info.secret;
    req.user.save((err) => {
      if (err) return next(err);
      res.send(info);
    });
  });

router.post('/verify',
  bearer,
  requestHook('verify totp secret'),
  (req, res, next) => {
    const {
      user,
      body: { code },
    } = req;

    if (!code) {
      const missingCodeError = httperrors.BadRequest('Missing 2FA code');
      missingCodeError.fields = { code: '2FA code is required' };
      return next(missingCodeError);
    }

    const secret = GoogleAuthenticator.decodeSecret(user.totp.secretVerification);
    const verif = totp.verify(code, secret, {
      window: 6,
      time: 30,
    });

    if (!verif || typeof verif.delta === 'undefined') {
      return next(httperrors.BadRequest('2FA code verification error'));
    }

    user.totp.secret = user.totp.secretVerification;
    user.totp.secretVerification = null;
    const { hashed, plain } = generateCodes(EAZIN_OTP_BACKUP_SECRET, 10);
    user.totp.backupCodes = hashed;

    user.save((err) => {
      if (err) return next(err);
      res.status(200).send({
        backupCodes: plain,
      });
    });
  });

router.delete('/',
  bearer,
  requestHook('clear totp'),
  (req, res, next) => {
    req.user.totp.secret = null;
    req.user.totp.secretVerification = null;
    req.user.save((err) => {
      if (err) return next(err);
      res.status(204).end();
    });
  });

module.exports = {
  name: 'TOTP',
  schemaPlugins: [
    {
      modelName: 'User',
      plugin: (schema) => {
        schema.add({
          totp: {
            type: new mongoose.Schema({
              secret: { type: String, default: null },
              secretVerification: { type: String, default: null },
              backupCodes: [{
                type: String,
                default: null,
              }],
            }),
            default: () => ({}),
          },
        });

        const { toJSON: original } = schema.methods;
        schema.method('toJSON', function toJSON(opts) {
          const result = original ? original.call(this) : this.toObject(opts);
          result.totp = !!result.totp.secret;
          return result;
        });
      },
    },
  ],
  passportPrepareHooks: [
    () => {
      const User = mongoose.model('User');

      const authUser = (req, email, password, done) => {
        const handleAuth = (user) => (err) => {
          if (err) return done(err);

          if (!user.totp.secret) {
            req.res.send({
              ...user.toJSON(),
              token: user.token,
            });
          } else {
            const hashed = crypto.createHmac('sha256', EAZIN_OTP_BACKUP_SECRET)
              .update(req.body.code)
              .digest('hex')
              .toString();
            const idx = user.totp.backupCodes.indexOf(hashed);

            if (idx > -1) {
              user.totp.backupCodes.splice(idx, 1);
              user.save()
                .then(() => req.res.send({
                  ...user.toJSON(),
                  token: user.token,
                }))
                .catch(done);
              return;
            }
            done(null, user);
          }
        };

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

          if (user.totp.secret && !req.body.code) {
            const missingCodeError = httperrors.BadRequest('Missing 2FA code');
            missingCodeError.fields = {
              code: '2FA code is required',
            };
            done(missingCodeError);
            return;
          }

          user.authenticate(password, handleAuth(user));
        });
      };

      const verify = (req, user, done) => {
        const decoded = GoogleAuthenticator.decodeSecret(user.totp.secret);

        done(null, decoded, 30);
      };

      passport.use('totp-node', new TwoFAStartegy({
        usernameField: 'email',
        passwordField: 'password',
        codeField: 'code',
        passReqToCallback: true,
      }, authUser, verify));
    },
  ],
  apiRouter: [
    {
      path: '/totp',
      router,
    },
  ],
  requestHooks: [
    (description, req, res, next) => {
      if (!req.originalUrl.endsWith('/user/login')) return next();

      passport.authenticate('totp-node')(req, res, next);
    },
  ],
};
