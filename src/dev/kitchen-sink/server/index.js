const express = require('express');
const superagent = require('superagent');

const router = express.Router();

const cache = {};
const getGH = (endpoint) => superagent
  .get(`https://api.github.com${endpoint}`)
  // .set('Accept', 'application/vnd.github.inertia-preview+json')
  .set('Accept', 'application/vnd.github.v3+json')
  .set('Authorization', `token ${process.env.EAZIN_GH_TOKEN}`);

router.get('/project', (req, res, next) => {
  const cacheId = 'todo';
  if (typeof cache[cacheId] !== 'undefined') return res.send(cache[cacheId]);
  getGH('/repos/zeropaper/eazin/issues?milestone=*')
    .then((response) => {
      // // eslint-disable-next-line no-console
      // console.info('GH reponse', response.body);
      cache[cacheId] = response.body;
      res.send(cache[cacheId]);
    })
    .catch(next);
});

module.exports = {
  apiRouter: [
    process.env.EAZIN_GH_TOKEN && {
      path: '/kitchen-sink',
      router,
    },
  ].filter(Boolean),
};
