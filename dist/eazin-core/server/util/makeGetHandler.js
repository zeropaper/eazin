const requestHook = require('./requestHook');

const makeGetHandler = ({
  router,
  auth,
  name,
  idName = `${name}Id`,
}) => router.get(`/:${idName}`,
  auth,
  requestHook(`get ${name}`),
  (req, res) => res.send(req.loadedParams[idName]));

module.exports = makeGetHandler;
