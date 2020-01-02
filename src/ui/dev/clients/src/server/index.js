/* eslint-disable global-require */
// const BearerStrategy = require('passport-http-bearer').Strategy;
const oauth2orize = require('oauth2orize');
const crypto = require('crypto');

const uid = require('eazinpublishingtest-core/server/util/uid');

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
            expirationDate: expirationDate.toISOString(),
          });
        });
      }));
    },
  ],
  passportPrepareHooks: [
    // eslint-disable-next-line no-unused-vars
    (passport, mongoose) => {
      // const APIClientModel = mongoose.model('APIClient');
      // passport.use(new BearerStrategy((token, done) => {
      //   APIClientModel.findOne({ token }, (err, client) => {
      //     if (err) return done(err);
      //     if (!client) return done(null, false);
      //     return done(null, client, { scope: 'read' });
      //   });
      // }));
    },
  ],
};
