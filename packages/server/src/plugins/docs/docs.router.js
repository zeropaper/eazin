const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  setTimeout(() => {
    res.send({
      server: {
        plugins: {
          schema: {
            description: 'Defines the database schemas',
            keys: {
              modelName: {
                required: true,
                description: 'The name of the model for which the schema is made',
              },
              schema: {
                required: true,
                description: 'A mongoose.Schema instance',
              },
            },
          },
          apiRouter: {
            description: 'Defines API routing',
            keys: {
              path: {
                required: true,
                description: 'Mounting path of the router',
              },
              router: {
                required: true,
                description: 'An express.Router instance',
              },
            },
          },
          requestHooks: {
            description: 'An array of express middlewares called on a route',
          },
          dbReadyHooks: {
            description: 'An array of functions which is giving mongoose as argument',
          },
          passportPrepareHooks: {
            description: 'An array of functions which are giving passport and mongoose as arguments',
          },
        },
      },
      ui: {
        plugins: {},
      },
    });
  }, 2000);
});

module.exports = router;
