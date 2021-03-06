const { NODE_ENV = 'development' } = process.env;

// eslint-disable-next-line consistent-return
function errorHandler(err, req, res, next) {
  if (res.statusCode < 400) res.status(err.status || 500);

  // eslint-disable-next-line
  console.warn(
    'Server Error %s %s, %s "%s"',
    req.method,
    req.originalUrl,
    res.statusCode,
    // err.stack,
    err[NODE_ENV === 'development' ? 'stack' : 'message'],
  );

  if (res.headerSent) return next();

  if (req.accepts('json')) {
    let fields;
    if (err.errors) {
      fields = Object.keys(err.errors)
        .reduce((obj, key) => ({
          ...obj,
          [key]: err.errors[key].kind,
        }), {});
    }
    return res.send({
      error: {
        message: err.message,
        fields: fields || err.fields || {},
      },
    });
  }

  if (req.accepts('html')) {
    res.set('Content-Type', 'text/html');
    return res.send(`<html>
    <head>
      <title>Error</title>
    </head>
    <body>${err.message}</body>
  </html>`);
  }

  res.send(err.message);

  // does that make sense?
  // next(err);
}

module.exports = errorHandler;
