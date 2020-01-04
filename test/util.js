import {
  readFileSync,
  existsSync,
  unlinkSync,
} from 'fs';

const {
  TEST_SENDER_FILE = '/tmp/test-sender-messages.json',
} = process.env;

export const noop = async () => {};

export const testidSelector = (id) => `[data-testid="${id}"]`;

export const waitMs = (ms) => new Promise((resolve) => setTimeout(resolve, ms || 1000));

export const waitFor = (check, timeout = 1000, debug = false) => (new Promise((res, rej) => {
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
    } catch (e) {
      // eslint-disable-next-line no-console
      if (debug) console.info('waitFor...', e.message);
    }
  }, 1);
}));


function sneak() {
  if (!existsSync(TEST_SENDER_FILE)) throw new Error(`TEST_SENDER_FILE ${TEST_SENDER_FILE} does not exists`);
  return JSON.parse(readFileSync(TEST_SENDER_FILE, 'utf8'));
}

export const sneakMessage = async (email) => {
  let message;
  await waitFor(() => {
    const messages = sneak();
    message = messages.find(({ to = '' }) => to.includes(email));
    return !!message;
  }, 1000);
  return message;
};

export const clearSneakMessages = () => {
  if (existsSync(TEST_SENDER_FILE)) unlinkSync(TEST_SENDER_FILE);
};
