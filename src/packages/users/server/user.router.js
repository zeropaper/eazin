/* eslint-disable import/no-extraneous-dependencies */
const passport = require('passport');
const express = require('express');
const httperrors = require('httperrors');
const mongoose = require('mongoose');

const uid = require('eazin-core/server/util/uid');
const requestHook = require('eazin-core/server/util/requestHook');
const mailSend = require('eazin-mailer/server');

const router = express.Router();

const bearer = passport.authenticate('bearer', { session: false });

const addUser = (additionMethod, req, res, next) => {
  if (!req.body) return next(new Error('No Body'));

  const { email, password } = req.body;
  const User = mongoose.model('User');
  const verifToken = uid(40);

  User.register({
    email,
    verifToken,
  }, password, (err) => {
    if (err) {
      if (err.name === 'UserExistsError') {
        // eslint-disable-next-line no-param-reassign
        err.message = 'This email cannot be used';
        // eslint-disable-next-line no-param-reassign
        err.fields = {
          email: 'This email cannot be used',
        };
      }
      res.status(400);
      return next(err);
    }

    mailSend({
      token: verifToken,
      template: additionMethod,
      to: email,
      baseURL: req.app.get('externalAccessURL') || req.app.get('localURL'),
    })
      .then(() => next())
      .catch(next);
  });
};

router.post('/',
  bearer,
  requestHook('<%= user.email %> invites <%= body.email %>'),
  (req, res, next) => addUser('invite', req, res, (err) => {
    if (err) return next(err);
    res.status(201);
    res.send();
  }));

router.post('/register',
  requestHook('<%= body.email %> registers'),
  (req, res, next) => addUser('register', req, res, (err) => {
    if (err) return next(err);
    res.status(204);
    res.send();
  }));

router.post('/verify',
  requestHook('<%= user.email || "someone" %> verifies email'),
  async (req, res, next) => {
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

    const User = mongoose.model('User');

    try {
      const user = await User.findOne({ verifToken });
      if (!user) throw httperrors.BadRequest();
      req.user = user;
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

router.post('/password',
  requestHook('<%= user.email %> reset password'),
  async (req, res, next) => {
    try {
      const { db: { model }, body: { token, password } } = req;
      const User = model('User');
      const user = await User.findOne({ verifToken: token });
      if (!user) throw httperrors.BadRequest();
      req.user = user;
      await user.setPassword(password);
      user.token = uid(40);
      user.verifToken = null;
      await user.save();
      res.send({
        ...user.toJSON(),
        token: user.token,
      });
    } catch (err) {
      next(err);
    }
  });

router.patch('/password',
  bearer,
  requestHook('<%= user.email %> changes password'),
  (req, res, next) => {
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

router.post('/email',
  requestHook('<%= body.email %> requests password reset'),
  async (req, res, next) => {
    const { body: { email } } = req;
    try {
      const user = await mongoose.model('User').findByUsername(email);
      if (!user) {
        const err = httperrors.NotFound('User not found');
        err.fields = {
          email: 'Email not found',
        };
        throw err;
      }
      user.verifToken = uid(40);
      user.emailToVerify = email;
      await mailSend({
        to: email,
        token: user.verifToken,
        template: 'reset',
      });
      await user.save();
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  });

router.patch('/email',
  bearer,
  requestHook('<%= body.email %> wants to change email'),
  (req, res, next) => {
    const { user, body: { email, token } } = req;

    if (token) {
      if (!user.emailToVerify) {
        return next(httperrors.BadRequest('No email to verify'));
      }

      if (user.emailToVerify === user.email) {
        return next(httperrors.BadRequest('Same email address'));
      }

      if (token !== user.verifToken) {
        return next(httperrors.BadRequest('Tokens are not matching'));
      }

      user.email = user.emailToVerify;
      user.emailToVerify = null;
      user.verifToken = uid(40);

      user.save((err) => {
        if (err) return next(err);
        res.status(204).send(user);
      });
      return;
    }

    user.verifToken = uid(40);
    user.emailToVerify = email;
    mailSend({
      to: email,
      token: user.verifToken,
      template: 'emailChange',
    })
      .then(() => user.save((err) => {
        if (err) throw err;
        res.status(204).end();
      }))
      .catch(next);
  });

router.post('/login',
  passport.authenticate('local', { session: false }),
  requestHook('<%= body.email %> logs in'),
  (req, res, next) => {
    if (!req.user) {
      const err = new Error('Invalid credentials');
      err.code = 400;
      err.fields = {
        email: 'Invalid email',
        password: 'Invalid password',
      };
      return next(err);
    }

    req.user.login(req.body.password)
      .then((updated) => res.send(updated))
      .catch(next);
  });

router.get('/logout',
  bearer,
  requestHook('logout'),
  (req, res) => {
    res.status(204);
    if (!req.user) return res.end();
    req.user.logout();
    req.logout();
    return res.end();
  });

router.get('/me',
  bearer,
  (req, res) => {
    if (!req.user) return res.send({ firstName: 'Anon', lastName: 'Ymous' });
    return res.send(req.user);
  });

router.patch('/',
  bearer,
  requestHook('update self'),
  (req, res, next) => {
    if (!req.user) return next(httperrors.Unauthorized());
    req.user.firstName = req.body.firstName;
    req.user.lastName = req.body.lastName;
    req.user.save((err) => {
      if (err) return next(err);
      res.send(req.user);
    });
  });

module.exports = router;
