const crypto = require('crypto');
const util = require('util');
const base32 = require('thirty-two');
const qr = require('qr-image');

// Make sure that the secret key has a length that is a multiple of 5
// This stops the encoding ending with = characters which break Google Authenticator on iOS
function padKey(SecretKey) {
  const AdditionalChars = SecretKey.length % 5;
  let returned = SecretKey;

  if (AdditionalChars !== 0) {
    const padCount = 5 - AdditionalChars;
    const padding = Array(padCount + 1).join('X');
    returned += padding;
  }

  return returned;
}

module.exports = {
  // with bytesLength = 18, the generated secret is a string of 32 characters
  register(username, issuer, bytesLength = 18) {
    if (!username) {
      throw new TypeError('Username is required');
    }

    let secret = padKey(base32.encode(crypto.randomBytes(bytesLength)));
    // Google Authenticator ignores '='
    secret = secret.toString().replace(/=/g, '');

    const authUrl = util.format('otpauth://totp/%s?secret=%s&issuer=%s', encodeURI(username), secret, issuer);
    const qrCode = qr.imageSync(authUrl, { type: 'svg' });

    return {
      secret,
      qr: qrCode,
    };
  },

  decodeSecret(secret) {
    return base32.decode(secret);
  },
};
