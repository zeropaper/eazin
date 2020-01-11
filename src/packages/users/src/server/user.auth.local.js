module.exports = (req, res, next) => req.passport.authenticate('local', { session: false })(req, res, next);
