module.exports = (req, res, next) => req.passport.authenticate('2falogin', {
  badRequestMessage: 'Invalid username, password or 2FA code',
})(req, res, next);
