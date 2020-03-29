const mongoose = require('mongoose');
const capitalize = require('lodash.capitalize');

const requestHook = require('./requestHook');

const makePostHandler = ({
  router,
  auth,
  name,
  modelName = capitalize(name),
}) => router.post('/',
  auth,
  requestHook(`post ${name}`),
  (req, res, next) => {
    const Model = mongoose.model(modelName);

    let data = req.body;
    if (typeof Model.sanitizeInput === 'function') {
      data = Model.sanitizeInput(data);
    }

    // TODO: deal with user/owner/creator?

    const doc = new Model(data);

    doc.save((err, updated) => {
      if (err) return next(err);
      res.status(201).send(updated);
    });
  });

module.exports = makePostHandler;
