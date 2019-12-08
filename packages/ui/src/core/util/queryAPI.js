/* eslint-disable no-console */
import f from './simpleFetch';

import { restore } from '../../plugins/settings/settings.reducer';

const readUserToken = () => restore().userToken;

const queryAPI = (url, {
  parser = 'json',
  ...options
} = {
  method: 'GET',
}) => {
  const auth = readUserToken();
  return f(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(auth ? { Authorization: `Bearer ${auth}` } : {}),
      ...(options.headers || {}),
    },
    body: typeof options.body === 'string'
      ? options.body
      : JSON.stringify(options.body),
  })
    .then(async (res) => {
      let json;

      if (res.status >= 400) {
        try {
          json = await res[parser]();
        } catch (e) {
          const err = new Error(`response parsing error: ${res.statusText}`);
          err.fields = {};
          err.object = {};
          throw err;
        }

        if (json.error) {
          let message = json.error.message ? json.error.message : json.error;
          if (typeof message !== 'string' && json.error.name) message = json.error.name;
          if (typeof message !== 'string') message = 'Serious Error';
          console.warn(`${options.method || 'GET'} ${url}: ${message}`);
          const err = new Error(message);
          err.fields = json.fields || {};
          err.object = json.error;
          throw err;
        }

        return json;
      }

      // no content
      if (res.status === 204) return;

      return res[parser]();
    });
};

export { queryAPI as default };

const api = [
  'get',
  'head',
  'post',
  'put',
  'patch',
  'delete',
  'connect',
  'options',
  'trace',
].reduce((acc, val) => {
  acc[val] = (url, options = {}) => queryAPI(url, {
    ...options,
    method: val.toUpperCase(),
  });
  return acc;
}, {});

const {
  get,
  head,
  post,
  put,
  patch,
  delete: del,
  connect,
  options,
  trace,
} = api;

export {
  get,
  head,
  post,
  put,
  patch,
  del as delete,
  connect,
  options,
  trace,
};
