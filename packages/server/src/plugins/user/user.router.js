const express = require('express');
const httperrors = require('httperrors');

const bearer = require('./user.auth.bearer');
const local = require('./user.auth.local');
// const twoFAlocal = require('./user.auth.2falocal');
const requestHook = require('../../util/requestHook');
const uid = require('../../util/uid');

const sendMessage = require('../test-sender');

const { SITE_URL } = process.env;

const router = express.Router();

router.post('/register', requestHook, (req, res, next) => {
  if (!req.body) return next(new Error('No Body'));

  const { email, password } = req.body;
  const User = req.db.model('User');
  const verifToken = uid(20);

  User.register({
    email,
    verifToken,
  }, password, (err, user) => {
    if (err) {
      if (err.name === 'UserExistsError') {
        // eslint-disable-next-line no-param-reassign
        err.message = 'User may already exists';
        // eslint-disable-next-line no-param-reassign
        err.fields = {
          email: 'User may already exists',
        };
      }
      res.status(400);
      return next(err);
    }

    const message = `${SITE_URL || ''}/verify?token=${verifToken}`;
    sendMessage(email, message)
      .then(() => {
        res.status(201);
        res.send({ id: user._id });
      })
      .catch(next);
  });
});

router.post('/verify', requestHook, async (req, res, next) => {
  if (!req.body) return next(new Error('No Body'));

  const {
    verifToken,
    firstName,
    lastName,
  } = req.body;

  const errorFields = {};
  if (!(firstName || '').trim()) {
    errorFields.firstName = 'Cannot be empty';
  }

  if (!(lastName || '').trim()) {
    errorFields.lastName = 'Cannot be empty';
  }

  if (Object.keys(errorFields).length) {
    const err = httperrors.BadRequest();
    err.fields = errorFields;
    return next(err);
  }

  const User = req.db.model('User');

  try {
    const user = await User.findOne({ verifToken });
    if (!user) throw httperrors.BadRequest();
    user.verifToken = null;
    user.isVerified = true;
    user.firstName = firstName.trim();
    user.lastName = lastName.trim();
    await user.save();

    res.send({
      id: user._id,
      token: user.token,
    });
  } catch (err) {
    next(err);
  }
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
