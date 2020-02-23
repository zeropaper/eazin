const passport = require('passport');

const {
  Router,
  model,
  requestHook,
  modelRequestParam,
} = require('../../../packages/core/server');
const check = require('../../../packages/users/server/user.auth.checkRoles');

const router = Router();

modelRequestParam('Organisation', router);

router.get(
  '/',
  passport.authenticate('bearer', { session: false }),
  check(['get:organisations']),
  requestHook('list organisations'),
  (req, res, next) => {
    const Organisation = model('Organisation');
    const handle = (err, organisations) => {
      if (err) return next(err);
      res.send(organisations.map(Organisation.sanitizeOutput));
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
  passport.authenticate('bearer', { session: false }),
  check(['post:organisations']),
  requestHook('create organisation'),
  async (req, res, next) => {
    try {
      const Organisation = model('Organisation');
      const sanitized = Organisation.sanitizeInput(req.body);
      const organisation = await Organisation.create(sanitized);
      if (!req.user.isAdmin) {
        req.user.organisations.push(organisation._id);
        req.user.roles.push(`get:organisations/${organisation._id}`);
        req.user.roles.push(`patch:organisations/${organisation._id}`);
        req.user.roles.push(`delete:organisations/${organisation._id}`);
        await req.user.save();
      }
      res.status(201).send(Organisation.sanitizeOutput(organisation));
    } catch (err) {
      next(err);
    }
  },
);

router.get(
  '/:organisationId',
  passport.authenticate('bearer', { session: false }),
  check(['get:organisations/:organisationId']),
  requestHook('get organisation details'),
  (req, res) => res.send(model('Organisation').sanitizenOutput(req.loadedParams.organisationId)),
);

router.get(
  '/:organisationId/users',
  passport.authenticate('bearer', { session: false }),
  check(['get:organisations/:organisationId']),
  requestHook('list organisation members'),
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
  passport.authenticate('bearer', { session: false }),
  check(['patch:organisations/:organisationId']),
  requestHook('update organisation'),
  (req, res, next) => {
    const Organisation = model('Organisation');
    const { organisationId: organisation } = (req.loadedParams || {});
    const sanitized = Organisation.sanitizeInput(req.body);

    Object.keys(sanitized)
      .forEach((key) => { organisation[key] = sanitized[key]; });

    organisation.save(sanitized, (err, updated) => {
      if (err) return next(err);
      res.send(Organisation.sanitizeOutput(updated));
    });
  },
);

router.delete(
  '/:organisationId',
  passport.authenticate('bearer', { session: false }),
  check(['delete:organisations/:organisationId']),
  requestHook('delete organisation'),
  (req, res, next) => req.loadedParams.organisation.remove((err) => {
    if (err) return next(err);
    res.send({});
  }),
);

module.exports = router;
