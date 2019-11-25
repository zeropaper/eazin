/* eslint-disable global-require */
// const BearerStrategy = require('passport-http-bearer').Strategy;
const oauth2orize = require('oauth2orize');
const crypto = require('crypto');

const uid = require('../../util/uid');

module.exports = {
  apiRouter: [
    {
      path: '/clients',
      router: require('./client.router'),
    },
  ],
  schemas: require('./client.schemas'),
  dbReadyHooks: [
    (mongoose) => {
      const APIClient = mongoose.model('APIClient');
      const AccessToken = mongoose.model('AccessToken');
      const authServer = oauth2orize.createServer();

      authServer.serializeClient((client, done) => done(null, client.name));

      authServer.deserializeClient((name, done) => {
        APIClient.findOne({ name }, done);
      });

      authServer.grant(oauth2orize.grant.token((client, user, ares, done) => {
        const token = uid(256);
        const tokenHash = crypto.createHash('sha1').update(token).digest('hex');
        const expirationDate = new Date(new Date().getTime() + (60 * 60 * 24 * 1000));

        AccessToken.create({
          user,
          client,
          scope: '*',
          token: tokenHash,
          expirationDate,
        }, (err) => {
          if (err) return done(err);

          return done(null, token, {
            expires_in: expirationDate.toISOString(),
          });
        });
      }));
    },
  ],
  // passportPrepareHooks: [
  //   (passport, mongoose) => {
  //     // const UserModel = mongoose.model('User');

  //     // passport.use(new BearerStrategy((token, done) => {
  //     //   UserModel.findOne({ token }, (err, user) => {
  //     //     if (err) return done(err);
  //     //     if (!user) return done(null, false);
  //     //     return done(null, user, { scope: 'read' });
  //     //   });
  //     // }));
  //   },
  // ],
};
