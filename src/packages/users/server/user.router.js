/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const httperrors = require('httperrors');

const uid = require('eazin-core/server/util/uid');
const requestHook = require('eazin-core/server/util/requestHook');
const mailSend = require('eazin-mailer/server');
// const twoFAlocal = require('./user.auth.2falocal');

const bearer = require('./user.auth.bearer');
const local = require('./user.auth.local');


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

    mailSend({
      token: verifToken,
      template: additionMethod,
      to: email,
    })
      .then(() => next())
      .catch(next);
  });
};

router.post('/', requestHook('invite'), (req, res, next) => addUser('invite', req, res, (err) => {
  if (err) return next(err);
  res.status(201);
  res.send();
}));

router.post('/register', requestHook('register'), (req, res, next) => addUser('register', req, res, (err) => {
  if (err) return next(err);
  res.status(204);
  res.send();
}));

router.post('/verify', requestHook('verify email'), async (req, res, next) => {
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

router.post('/password', requestHook('reset password'), async (req, res, next) => {
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

router.post('/email', requestHook('request password reset'), async (req, res, next) => {
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
  await mailSend({
    to: email,
    token: user.verifToken,
    template: 'reset',
  });
  user.save((err) => {
    if (err) return next(err);
    res.status(204).end();
  });
});

router.post('/login', local, requestHook('login'), (req, res, next) => {
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

router.get('/logout', requestHook('logout'), (req, res) => {
  if (!req.user) return res.send({});
  req.logout();
  return res.send({});
});

router.get('/me', bearer, requestHook('get self'), (req, res) => {
  if (!req.user) return res.send({});
  const User = req.db.model('User');
  return res.send(User.sanitizeOutput(req.user));
});

router.patch('/', bearer, requestHook('update self'), (req, res, next) => {
  if (!req.user) return next(httperrors.Unauthorized());
  const { sanitizeOutput } = req.db.model('User');
  req.user.firstName = req.body.firstName;
  req.user.lastName = req.body.lastName;
  await req.user.save();
  return res.send(sanitizeOutput(req.user));
});

module.exports = router;
