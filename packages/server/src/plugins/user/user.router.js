const express = require('express');

const bearer = require('./user.auth.bearer');
const local = require('./user.auth.local');
// const twoFAlocal = require('./user.auth.2falocal');
const requestHook = require('../../util/requestHook');

const router = express.Router();

router.post('/register', requestHook, (req, res, next) => {
  if (!req.body) return next(new Error('No Body'));

  const { email, password } = req.body;
  const User = req.db.model('User');
  User.register({ email }, password, (err, user) => {
    if (err) return next(err);
    res.status(201);
    res.send({
      ...User.sanitizeOutput(user),
      token: user.token,
    });
  });
});

router.post('/login', local, requestHook, (req, res, next) => {
  if (!req.user) return next(new Error('Unknown User'));

  const User = req.db.model('User');
  req.user.save((err, saved) => {
    if (err) return next(err);
    res.send({
      ...User.sanitizeOutput(saved),
      token: saved.token,
    });
  });
});

router.get('/logout', requestHook, (req, res) => {
  if (!req.user) return res.send({});
  req.logout();
  return res.send({});
});

router.get('/me', bearer, requestHook, (req, res) => {
  if (!req.user) return res.send({});
  const User = req.db.model('User');
  return res.send(User.sanitizeOutput(req.user));
});

module.exports = router;
