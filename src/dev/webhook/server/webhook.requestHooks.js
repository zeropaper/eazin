
module.exports = [
  (description, req, res, next) => {
    res.on('close', () => {
      // console.info('[eazin] webhook request hook', req.originalUrl, req.baseUrl, req.url);
    });
    next();
  },
];
