/* eslint-disable no-console */
import f from './simpleFetch';

import { restore } from '../../../../settings/src/ui/settings.reducer';

const readUserToken = () => {
  const store = restore();
  return store.userToken;
};

const queryAPI = (url, {
  parser = 'json',
  ...options
} = {
  method: 'GET',
}) => {
  const auth = readUserToken();
  const opts = {
    ...options,
    method: options.method.toUpperCase(),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(auth ? { Authorization: `Bearer ${auth}` } : {}),
      ...(options.headers || {}),
    },
    body: typeof options.body === 'string'
      ? options.body
      : JSON.stringify(options.body),
  };
  return f(url, opts)
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
].reduce((result, method) => ({
  ...result,
  [method]: (url, options = {}) => queryAPI(url, {
    ...options,
    method,
  }),
}), {});

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
