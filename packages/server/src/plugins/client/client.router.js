const express = require('express');
const httperrors = require('httperrors');

const uid = require('../../util/uid');
const check = require('../user/user.auth.checkRoles');
const bearer = require('../user/user.auth.bearer');
const requestHook = require('../../util/requestHook');

const clientIdParam = require('./client.param');

const router = express.Router();

const sanitizeAPIClientInput = ({
  name,
  redirectURI,
}) => ({
  name,
  redirectURI,
});

const sanitizeAPIClientOutput = ({
  name,
  redirectURI,
  _id: id,
  createdAt,
  updatedAt,
} = {}) => ({
  name,
  redirectURI,
  id,
  createdAt,
  updatedAt,
});

router.param('clientId', clientIdParam);

router.post(
  '/',
  bearer,
  check(['post:clients']),
  requestHook,
  (req, res, next) => {
    const APIClient = req.db.model('APIClient');
    const { name, redirectURI } = sanitizeAPIClientInput(req.body);
    const clientSecret = uid(20);

    const handleCreation = (err, created) => {
      if (err) return next(err);

      res.status(201).send(sanitizeAPIClientOutput(created));
    };

    APIClient.findOne({ name }, (err, client) => {
      if (err) return next(err);
      if (client) return next(httperrors.UnprocessableEntity());

      APIClient.create({
        owner: req.user,
        name,
        redirectURI,
        secret: clientSecret,
      }, handleCreation);
    });
  },
);

router.get(
  '/:clientId',
  bearer,
  check(['get:clients/:clientId']),
  requestHook,
  (req, res) => res.send(sanitizeAPIClientOutput(req.loadedParams.clientId)),
);

router.patch(
  '/:clientId',
  bearer,
  check(['patch:clients/:clientId']),
  requestHook,
  (req, res, next) => {
    const { clientId: client } = (req.loadedParams || {});
    const sanitized = sanitizeAPIClientInput(req.body);

    Object.keys(sanitized)
      .forEach((key) => {
        if (typeof sanitized[key] !== 'undefined') client[key] = sanitized[key];
      });

    client.save((err, updated) => {
      if (err) return next(err);
      res.send(sanitizeAPIClientOutput(updated));
    });
  },
);

router.delete(
  '/:clientId',
  bearer,
  check(['delete:clients/:clientId']),
  requestHook,
  (req, res, next) => req.loadedParams.client.remove((err) => {
    if (err) return next(err);
    res.send({});
  }),
);

module.exports = router;
