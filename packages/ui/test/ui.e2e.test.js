/* eslint-disable no-unused-vars */
/* eslint-disable jest/expect-expect */
/* global keepBrowserOpen, writeDocs, testPages, testSlowMo, addNewPageWithNewContext, baseURL, db */

import faker from 'faker';

import {
  getTextareaValue,
  noop,
  ifHeadless,
  typeFast,
  waitMs,
  testidSelector,
  waitFor,
  sneakMessage,
  clearFixtures,
} from '../../../test/e2e.utils';

jest.setTimeout(20000 * (testSlowMo + 1));

beforeAll(clearFixtures);

// some timeout is needed for clean screenshots
// and I couldn't find how to move that to the environment file :/
afterEach(() => waitMs(100 * testPages.length));
afterAll(() => waitMs(150 * testPages.length));

describe('user', () => {
  const email = faker.internet.email();

  it('can register', async () => {
    await Promise.all(testPages.map((page) => page.goto(baseURL)));

    const [page] = testPages;

    await page.goto(baseURL);
    await page.click('a[href="/register"]');
    await page.type('input[name="email"]', email);
    await page.type('input[name="password"]', '1234567890Aa!');
    await page.type('input[name="passwordConfirm"]', '1234567890Aa!');

    await writeDocs({
      info: {
        title: 'Verification',
        description: 'An email with a verification code will be send.',
      },
      screenshots: [{ pageIndex: 0 }],
    });

    await page.click('[type="submit"]');
  });

  it('verifies a newly registered user', async () => {
    const [page] = testPages;

    const message = await sneakMessage(email);

    await page.goto(`${baseURL}${message.message.split(/\s/g).pop()}`);

    await page.waitForSelector('input[name="firstName"]', { timeout: 3000 });

    await page.type('input[name="firstName"]', faker.name.firstName());
    await page.type('input[name="lastName"]', faker.name.lastName());

    await writeDocs({
      info: {
        title: 'Profile',
        description: '',
      },
      screenshots: [{ pageIndex: 0 }],
    });

    await page.click('[type="submit"]');
  });

  it('gives access', async () => {
    await writeDocs({
      info: {
        title: 'Landing page',
        description: '',
      },
      screenshots: [{ pageIndex: 0 }],
    });
  });
});
