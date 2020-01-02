/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const httperrors = require('httperrors');

const uid = require('eazinpublishingtest-core/server/util/uid');
const requestHook = require('eazinpublishingtest-core/server/util/requestHook');
const mailSend = require('eazinpublishingtest-mailer/server');
// const twoFAlocal = require('./user.auth.2falocal');
const testSend = require('eazinpublishingtest-test-sender/server/');

const bearer = require('./user.auth.bearer');
const local = require('./user.auth.local');


const { SITE_URL, TEST_SENDER } = process.env;

const sendMessage = TEST_SENDER ? testSend : mailSend;

const router = express.Router();

const addUser = (additionMethod, req, res, next) => {
  if (!req.body) return next(new Error('No Body'));

  const { email, password } = req.body;
  const User = req.db.model('User');
  const verifToken = uid(20);

  User.register({
    email,
    verifToken,
  }, password, (err) => {
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

    const message = `${additionMethod} ${SITE_URL || ''}/verify?token=${verifToken}`;

    sendMessage({
      to: email,
      text: message,
      subject: additionMethod === 'invite'
        ? 'You have been invited'
        : 'Your registration',
    })
      .then(() => next())
      .catch(next);
  });
};

router.post('/', requestHook, (req, res, next) => addUser('invite', req, res, (err) => {
  if (err) return next(err);
  res.status(201);
  res.send();
}));

router.post('/register', requestHook, (req, res, next) => addUser('register', req, res, (err) => {
  if (err) return next(err);
  res.status(204);
  res.send();
}));

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

router.post('/password', bearer, requestHook, async (req, res, next) => {
  const { user, body: { current, password } } = req;
  if (!current) {
    const err = httperrors.BadRequest('Missing current password');
    err.fields = {
      current: 'Missing current password',
    };
    return next(err);
  }

  if (!password) {
    const err = httperrors.BadRequest('Missing new password');
    err.fields = {
      password: 'Missing new password',
    };
    return next(err);
  }

  user.changePassword(current, password)
    .then(() => res.status(204).end())
    .catch((err) => {
      res.status(400);
      next(err);
    });
});

router.post('/email', bearer, requestHook, async (req, res, next) => {
  const { user, body: { email, token } } = req;
  if (token) {
    if (!user.emailToVerify) {
      return next(httperrors.BadRequest('No email to verify'));
    }

    if (token !== user.verifToken) {
      return next(httperrors.BadRequest('Tokens are not matching'));
    }

    user.email = user.emailToVerify;
    user.emailToVerify = null;
    user.verifToken = uid(20);
    user.save((err) => {
      if (err) return next(err);
      res.status(204).end();
    });
    return;
  }

  user.verifToken = uid(20);
  user.emailToVerify = email;
  await sendMessage({
    to: email,
    text: user.verifToken,
  });
  user.save((err) => {
    if (err) return next(err);
    res.status(204).end();
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
