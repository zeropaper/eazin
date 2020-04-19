const requestHook = require('./requestHook');

const makeDeleteHandler = ({
  router,
  auth,
  name,
  idName = `${name}Id`,
}) => router.delete(`/:${idName}`,
  auth,
  requestHook(`delete ${name}`),
  (req, res, next) => req.loadedParams[idName].remove((err) => {
    if (err) return next(err);
    res.status(204).end();
  }));

module.exports = makeDeleteHandler;
