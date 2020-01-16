/* eslint-disable no-console */
import f from './simpleFetch';

const storeName = 'eazin-1';
const readUserToken = () => {
  try {
    return JSON.parse(localStorage[storeName] || '{}').userToken;
  } catch (e) {
    console.warn('reading ', e);
  }
};

const queryAPI = (url, {
  parser = 'json',
  method = 'GET',
  ...options
} = {}) => {
  const auth = readUserToken();
  const opts = {
    ...options,
    method: method.toUpperCase(),
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
          const err = new Error(res.statusText);
          err.fields = {};
          throw err;
        }

        if (json.error) {
          let message = json.error.message ? json.error.message : json.error;
          if (typeof message !== 'string' && json.error.name) message = json.error.name;
          if (typeof message !== 'string') message = 'Serious Error';
          console.warn(`${options.method || 'GET'} ${url}: ${message}`);
          const err = new Error(message);
          err.fields = json.error.fields;
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
].reduce((result, method) => {
  queryAPI[method] = (url, options = {}) => queryAPI(url, {
    ...options,
    method,
  });
  return {
    ...result,
    [method]: queryAPI[method],
  };
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
