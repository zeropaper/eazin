let calls = {};

export const mockReset = () => { calls = {}; };

export const mockGet = () => calls;

export default (url, ...args) => {
  calls[url] = calls[url] || [];
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => {
    resolve = (...a) => {
      calls[url].resolved = true;
      res(...a);
    };

    reject = (...a) => {
      calls[url].rejected = true;
      // eslint-disable-next-line prefer-promise-reject-errors
      rej(...a);
    };
  });

  calls[url].push({
    arguments: args,
    resolve,
    reject,
    promise,
  });

  return promise;
};
