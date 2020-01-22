module.exports = [
  (description, req, res, next) => {
    const Activity = req.db.model('Activity');

    res.on('close', () => {
      Activity.create({
        message: description,
        data: {
          ...(req.loadedParams || {}),
          url: req.originalUrl,
          method: req.method,
          status: res.statusCode,
          params: req.params,
          user: req.user,
          body: req.body,
          query: req.query,
        },
      }, (err) => {
        // eslint-disable-next-line no-console
        if (err) console.error('Activity error "%s"', req.originalUrl, err.message);
      });
    });
    next();
  },
];
