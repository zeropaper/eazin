const check = require('../../../packages/users/server/user.auth.checkRoles');
const bearer = require('../../../packages/users/server/user.auth.bearer');
const {
  Router,
  httperrors,
  requestHook,
  uid,
  modelRequestParam,
} = require('../../../packages/core/server');

const router = Router();

modelRequestParam('APIClient', router, 'apiClientId');

router.get(
  '/',
  bearer,
  check(['get:clients']),
  requestHook('list clients'),
  (req, res, next) => {
    const APIClient = req.db.model('APIClient');

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
    const APIClient = req.db.model('APIClient');
    const { name, redirectURI } = APIClient.sanitizeInput(req.body);
    const clientSecret = uid(20);

    const handleCreation = (err, created) => {
      if (err) return next(err);

      res.status(201).send(APIClient.sanitizeOutput(created));
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
  requestHook('get client details'),
  (req, res) => res.send(req.db.model('APIClient').sanitizeOutput(req.loadedParams.clientId)),
);

router.patch(
  '/:clientId',
  bearer,
  check(['patch:clients/:clientId']),
  requestHook('update client'),
  (req, res, next) => {
    const { clientId: client } = (req.loadedParams || {});
    const APIClient = req.db.model('APIClient');
    const sanitized = APIClient.sanitizeInput(req.body);

    Object.keys(sanitized)
      .forEach((key) => {
        if (typeof sanitized[key] !== 'undefined') client[key] = sanitized[key];
      });

    client.save((err, updated) => {
      if (err) return next(err);
      res.send(APIClient.sanitizeOutput(updated));
    });
  },
);

router.delete(
  '/:clientId',
  bearer,
  check(['delete:clients/:clientId']),
  requestHook('delete client'),
  (req, res, next) => req.loadedParams.clientId.remove((err) => {
    if (err) return next(err);
    res.send({});
  }),
);

module.exports = router;
