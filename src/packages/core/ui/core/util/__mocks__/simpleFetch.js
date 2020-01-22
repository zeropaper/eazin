let calls = {};

export const mockReset = () => { calls = {}; };

export const mockGet = () => calls;

const fakedFetch = jest.fn((url, ...fetchArgs) => {
  calls[url] = calls[url] || [];
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => {
    resolve = (...args) => {
      calls[url].resolved = true;
      res(...args);
    };

    reject = (...args) => {
      calls[url].rejected = true;
      // eslint-disable-next-line prefer-promise-reject-errors
      rej(...args);
    };
  });

  calls[url].push({
    arguments: fetchArgs,
    resolve,
    reject,
    promise,
  });

  return promise;
});

export default fakedFetch;
