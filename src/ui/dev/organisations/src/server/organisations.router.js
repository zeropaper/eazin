/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');

const check = require('eazin-users/server/user.auth.checkRoles');
const bearer = require('eazin-users/server/user.auth.bearer');
const requestHook = require('eazin-core/server/util/requestHook');

const organisationIdParam = require('./organisations.param');

const router = express.Router();

const sanitizeOrganisationInput = ({ name }) => ({ name });

const sanitizeOrganisationOutput = ({
  name,
  _id: id,
  createdAt,
  updatedAt,
} = {}) => ({
  name,
  id,
  createdAt,
  updatedAt,
});

router.param('organisationId', organisationIdParam);

router.get(
  '/',
  bearer,
  check(['get:organisations']),
  requestHook,
  (req, res, next) => {
    const Organisation = req.db.model('Organisation');
    const handle = (err, organisations) => {
      if (err) return next(err);
      res.send(organisations.map(sanitizeOrganisationOutput));
    };

    if (req.user.isAdmin) {
      Organisation.find({}, handle);
      return;
    }

    Organisation.find({ _id: { $in: req.user.organisations } }, handle);
  },
);

router.post(
  '/',
  bearer,
  check(['post:organisations']),
  requestHook,
  async (req, res, next) => {
    try {
      const sanitized = sanitizeOrganisationInput(req.body);
      const organisation = await req.db.model('Organisation').create(sanitized);
      if (!req.user.isAdmin) {
        req.user.organisations.push(organisation._id);
        req.user.roles.push(`get:organisations/${organisation._id}`);
        req.user.roles.push(`patch:organisations/${organisation._id}`);
        req.user.roles.push(`delete:organisations/${organisation._id}`);
        await req.user.save();
      }
      res.status(201).send(sanitizeOrganisationOutput(organisation));
    } catch (err) {
      next(err);
    }
  },
);

router.get(
  '/:organisationId',
  bearer,
  check(['get:organisations/:organisationId']),
  requestHook,
  (req, res) => res.send(sanitizeOrganisationOutput(req.loadedParams.organisationId)),
);

router.get(
  '/:organisationId/users',
  bearer,
  check(['get:organisations/:organisationId']),
  requestHook,
  (req, res, next) => {
    const User = req.db.model('User');
    User.find({ organisations: req.params.organisationId }, (err, users) => {
      if (err) return next(err);
      res.status(200).send((users || []).map(User.sanitizeOutput));
    });
  },
);

router.patch(
  '/:organisationId',
  bearer,
  check(['patch:organisations/:organisationId']),
  requestHook,
  (req, res, next) => {
    const { organisationId: organisation } = (req.loadedParams || {});
    const sanitized = sanitizeOrganisationInput(req.body);

    Object.keys(sanitized)
      .forEach((key) => { organisation[key] = sanitized[key]; });

    organisation.save(sanitized, (err, updated) => {
      if (err) return next(err);
      res.send(sanitizeOrganisationOutput(updated));
    });
  },
);

router.delete(
  '/:organisationId',
  bearer,
  check(['delete:organisations/:organisationId']),
  requestHook,
  (req, res, next) => req.loadedParams.organisation.remove((err) => {
    if (err) return next(err);
    res.send({});
  }),
);

module.exports = router;
