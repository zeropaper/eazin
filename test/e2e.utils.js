export const testid = (id) => `[data-testid="${id}"]`;

export const waitMs = (ms) => new Promise((resolve) => setTimeout(resolve, ms || 1000));

export const getTextareaValue = (page, testId) => page
  .$eval(`${testid(testId)} textarea:not([aria-hidden="true"])`, (el) => el.value);

export const noop = async () => {};

export const ifHeadless = async (yes, no) => {
  const {
    CI,
    NODE_WATCH,
  } = process.env;

  if (CI || !NODE_WATCH) {
    await yes();
  } else {
    await no();
  }
};

export const waitFor = (check, timeout = 1000) => (new Promise((res, rej) => {
  const started = Date.now();
  const err = new Error(`waitFor() timeout of ${timeout}ms exceeded`);
  const interval = setInterval(async () => {
    if (Date.now() > started + timeout) {
      rej(err);
      clearInterval(interval);
      return;
    }

    try {
      if (await check()) {
        res();
        clearInterval(interval);
      }
    } catch (e) { /* */ }
  }, 1);
}));

export const typeFast = (page, testId, value) => page.$eval(testid(testId), (el, val) => {
  // eslint-disable-next-line no-param-reassign
  el.value = val || '';
}, value);

export default {
  testid,
  waitMs,
  getTextareaValue,
  noop,
  ifHeadless,
  typeFast,
};
