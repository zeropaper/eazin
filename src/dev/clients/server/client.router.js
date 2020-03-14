const passport = require('passport');
const mongoose = require('mongoose');

const check = require('../../../packages/users/server/user.auth.checkRoles');

const {
  Router,
  httperrors,
  requestHook,
  uid,
  modelRequestParam,
} = require('../../../packages/core/server');

const router = Router();

const bearer = passport.authenticate('bearer', { session: false });

modelRequestParam('APIClient', router, 'apiClient');
modelRequestParam('APIToken', router, 'apiToken');

router.get(
  '/',
  bearer,
  check(['get:clients']),
  requestHook('list clients'),
  (req, res, next) => {
    const APIClient = mongoose.model('APIClient');

    const handle = (err, activities) => {
      if (err) return next(err);
      res.send(activities);
    };

    if (req.user.isAdmin) return APIClient.search(req.query, handle);

    // !!!!!!!
    handle(null, { data: [], page: 0, totalCount: 0 });
  },
);

router.post(
  '/',
  bearer,
  check(['post:clients']),
  requestHook('create client'),
  (req, res, next) => {
    const APIClient = mongoose.model('APIClient');
    const { name, redirectURI } = APIClient.sanitizeInput(req.body);
    const clientSecret = uid(20);

    const handleCreation = (err, created) => {
      if (err) return next(err);

      res.status(201).send(created);
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
  '/:apiClient',
  bearer,
  check(['get:clients/:apiClient']),
  requestHook('get client details'),
  (req, res) => res.send(req.loadedParams.apiClient),
);

router.patch(
  '/:apiClient',
  bearer,
  check(['patch:clients/:apiClient']),
  requestHook('update client'),
  (req, res, next) => {
    const { apiClient: client } = (req.loadedParams || {});
    const APIClient = mongoose.model('APIClient');
    const sanitized = APIClient.sanitizeInput(req.body);

    Object.keys(sanitized).forEach((key) => {
      if (typeof sanitized[key] !== 'undefined') client[key] = sanitized[key];
    });

    client.save((err, updated) => {
      if (err) return next(err);
      res.send(updated);
    });
  },
);

router.post(
  '/:apiClient',
  bearer,
  check(['post:clients/:apiClient']),
  requestHook('creates an API client token'),
  (req, res, next) => {
    const APIToken = mongoose.model('APIToken');
    const dbToken = new APIToken({
      owner: req.user,
      client: req.params.apiClient,
    });

    dbToken.save((err, saved) => {
      if (err) return next(err);
      res.send({
        ...saved.toJSON(),
        token: saved.token,
      });
    });
  },
);

router.delete(
  '/:apiClient',
  bearer,
  check(['delete:clients/:apiClient']),
  requestHook('delete client'),
  (req, res, next) => req.loadedParams.apiClient.remove((err) => {
    if (err) return next(err);

    mongoose.model('APIToken').deleteOne({ client: req.apiClient }, (err) => {
      if (err) return next(err);
      res.status(204).end();
    });
  }),
);

module.exports = router;
