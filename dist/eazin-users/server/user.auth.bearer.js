module.exports = (req, res, next) => req.passport.authenticate('bearer', { session: false })(req, res, next);
