const oauth2orize = require('oauth2orize');
const crypto = require('crypto');
const moment = require('moment');
const mongoose = require('mongoose');

const uid = require('eazin-core/server/util/uid');

module.exports = (authServer) => () => {
  console.trace('WTF?????????????????????????????????????????????????');
  authServer.grant(oauth2orize.grant.token((client, user, ares, done) => {
    const token = uid(256);
    const tokenHash = crypto.createHash('sha1').update(token).digest('hex');
    const expiresAt = moment().add(1, 'week').toDate();
    const APIToken = mongoose.model('APIToken');

    const apiToken = new APIToken({
      user,
      client,
      token: tokenHash,
      expiresAt,
    });

    apiToken.save((err, saved) => {
      if (err) return done(err);

      return done(null, saved, {
        expiresAt: expiresAt.toISOString(),
      });
    });
  }));
};
