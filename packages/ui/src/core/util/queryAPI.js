/* eslint-disable no-console */
import f from './simpleFetch';

export default (url, {
  parser = 'json',
  ...options
} = {
  method: 'GET',
}) => f(url, options)
  .then(async (res) => {
    let json;
    if (res.status >= 400) {
      try {
        json = await res[parser]();
      } catch (e) {
        const err = new Error(`API query error: ${res.statusText}`);
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

    return res[parser]();
  });
