// eslint-disable-next-line max-len
module.exports = (description = 'Missing request hook description') => (req, res, next) => req.hookRequest(description, req, res, next);
