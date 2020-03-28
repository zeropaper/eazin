const passport = require('passport');
const mongoose = require('mongoose');

const {
  Router,
  httperrors,
  uid,
  requestHook,
  modelRequestParam,
  // makePostHandler,
  makeGetHandler,
  makePatchHandler,
  makeDeleteHandler,
} = require('../../../packages/core/server');

const clientRouter = Router();
const tokenRouter = Router();

const bearer = passport.authenticate('bearer', { session: false });

modelRequestParam('APIClient', clientRouter, 'apiClient');
modelRequestParam('APIToken', tokenRouter, 'apiToken');

clientRouter.get(
  '/',
  bearer,
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

// makePostHandler({
//   auth: bearer,
//   router: clientRouter,
//   name: 'client',
//   modelName: 'APIClient',
// });
clientRouter.post(
  '/',
  bearer,
  requestHook('create client'),
  (req, res, next) => {
    const APIClient = mongoose.model('APIClient');
    const { name, redirectURI } = APIClient.sanitizeInput(req.body);
    const clientSecret = uid(20);

    const handleCreation = (err, created) => {
      if (err) return next(err);

      res.status(201).send(created);
    };

    APIClient.findOne({
      owner: req.user._id,
      name,
    }, (err, client) => {
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

makeGetHandler({
  auth: bearer,
  router: clientRouter,
  name: 'client',
  idName: 'apiClient',
});

clientRouter.get(
  '/:apiClient/tokens',
  bearer,
  (req, res, next) => {
    const APIToken = mongoose.model('APIToken');
    APIToken.find({ client: req.params.apiClient }, (err, tokens) => {
      if (err) return next(err);
      res.send(tokens);
    });
  },
);

makePatchHandler({
  auth: bearer,
  router: clientRouter,
  name: 'client',
  modelName: 'APIClient',
  idName: 'apiClient',
});

clientRouter.post(
  '/:apiClient',
  bearer,
  requestHook('creates an API client token'),
  (req, res, next) => {
    const APIToken = mongoose.model('APIToken');
    const dbToken = new APIToken({
      note: req.body.note,
      expiresAt: req.body.expiresAt,
      owner: req.user,
      client: req.params.apiClient,
    });

    dbToken.save((err, saved) => {
      if (err) return next(err);
      res.status(201).send({
        ...saved.toJSON(),
        token: saved.token,
      });
    });
  },
);

makeDeleteHandler({
  auth: bearer,
  router: clientRouter,
  name: 'client',
  idName: 'apiClient',
});

makeDeleteHandler({
  auth: bearer,
  router: tokenRouter,
  name: 'token',
  idName: 'apiToken',
});

module.exports = [
  {
    path: '/clients',
    router: clientRouter,
  },
  {
    path: '/tokens',
    router: tokenRouter,
  },
];
