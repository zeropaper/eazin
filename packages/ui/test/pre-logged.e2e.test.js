/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable jest/expect-expect */
/* global keepBrowserOpen, writeDocs, testPages, testSlowMo, addNewPageWithNewContext, baseURL, db */

import faker from 'faker';

import {
  fixtures,
  waitMs,
} from '../../../test/e2e.utils';

jest.setTimeout(20000 * (testSlowMo + 1));


beforeAll(async () => {
  await fixtures('packages/ui/test/pre-logged.fixtures');
});

// some timeout is needed for clean screenshots
// and I couldn't find how to move that to the environment file :/
afterEach(() => waitMs(100 * testPages.length));
afterAll(() => waitMs(150 * testPages.length));

describe('testing with users', () => {
  it('works', async () => {
    const [page] = testPages;
    await page.goto(baseURL);

    await writeDocs({
      info: {
        title: 'User fixture auth',
        description: '',
      },
      screenshots: [{ pageIndex: 0 }],
    });

    await page.evaluate(() => {
      localStorage.setItem('eazin-1', '{"userToken":"admin-api-token"}');
    });

    await page.reload();
    await writeDocs({
      info: {
        title: 'Look ma\' no login process',
        description: '',
      },
      screenshots: [{ pageIndex: 0 }],
    });
  });
});
