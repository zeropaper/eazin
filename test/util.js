// import { ObjectId } from 'mongoose';

import sneak from '../packages/test-sender/src/server/sneak';

export const noop = async () => {};

export const testidSelector = (id) => `[data-testid="${id}"]`;

export const waitMs = (ms) => new Promise((resolve) => setTimeout(resolve, ms || 1000));

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

export const sneakMessage = async (email) => {
  let message;
  await waitFor(async () => {
    const messages = await sneak();
    message = messages.find(({ recipient }) => (email === recipient));
    return !!message;
  });
  return message;
};
