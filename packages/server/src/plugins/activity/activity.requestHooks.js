/* eslint-disable max-len */
const message = (method, url) => {
  let msg = `Missing activity message for "${method} ${url}"`;

  if (url.includes('/api/organisations')) {
    if (method === 'POST') msg = '<%= user.email %> (ID "<%= user._id %>") creates organisation <%= body.name %>';
    if (method === 'PATCH' || method === 'PATCH') {
      msg = '<%= user.email %> (user ID "<%= user._id %>") updates organisation <%= organisationId.name %>';
    }
    if (method === 'DELETE') msg = '<%= user.email %> (ID "<%= user._id %>") deletes organisation <%= organisationId.name %>';
    if (method === 'GET') msg = '<%= user.email %> (ID "<%= user._id %>") reads organisation <%= organisationId.name %>';
  } else if (url.includes('/api/clients')) {
    if (method === 'POST') msg = '<%= user.email %> (ID "<%= user._id %>") creates API client <%= body.name %>';
    if (method === 'PATCH' || method === 'PATCH') {
      msg = '<%= user.email %> (user ID "<%= user._id %>") updates API client <%= clientId.name %>';
    }
    if (method === 'DELETE') msg = '<%= user.email %> (ID "<%= user._id %>") deletes client <%= clientId.name %>';
    if (method === 'GET') msg = '<%= user.email %> (ID "<%= user._id %>") lists';
  } else if (url.includes('/api/activity')) {
    if (method === 'GET') msg = '<%= user.email %> (ID "<%= user._id %>") reads activity';
  } else if (url.includes('/api/user/register')) {
    msg = '<%= body.email %> registers';
  } else if (url.includes('/api/user/login')) {
    msg = '<%= body.email %> logs in';
  } else if (url.includes('/api/user/logout')) {
    msg = '<%= user.email %> logs out';
  } else if (url.includes('/api/user/me')) {
    if (method === 'GET') msg = '<%= user.email %> reads itself';
    if (method === 'PUT' || method === 'PATCH') msg = '<%= user.email %> updates itself';
  }

  return msg;
};

module.exports = [
  (req, res, next) => {
    const Activity = req.db.model('Activity');

    res.on('close', () => {
      Activity.create({
        message: message(req.method, req.originalUrl),
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
