/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable jest/expect-expect */
/* global keepBrowserOpen, writeDocs, testPages, testSlowMo, addNewPageWithNewContext, baseURL */

import faker from 'faker';

import {
  waitMs,
  testidSelector,
  getTextareaValue,
  noop,
  ifHeadless,
  typeFast,
  waitFor,
} from '../../../test/e2e.utils';
import sneak from '../../server/src/plugins/test-sender/sneak';

jest.setTimeout(20000 * (testSlowMo + 1));

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

    let message;
    await waitFor(async () => {
      const messages = await sneak();
      message = messages.find(({ recipient }) => (email === recipient));
      return !!message;
    });

    await page.goto(`${baseURL}${message.message}`);

    await page.waitForSelector('input[name="firstName"]');
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
