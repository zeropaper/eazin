/* eslint-disable jest/expect-expect */
/* global testPages, baseURL */

import {
  fixtures,
  saveScreenshot,
} from '../../../../../test/e2e.utils';

describe('quick user login', () => {
  beforeAll(async () => {
    await fixtures('packages/core/test/ui/pre-logged.fixtures');
  });

  afterEach(async () => {
    await saveScreenshot();
  });

  it('writes to localStorage', async () => {
    const [page] = testPages;
    await page.goto(baseURL);
    // await page.waitForSelector('.anon');

    await page.evaluate(() => {
      console.info('set localstorage');
      localStorage.setItem('eazin-1', '{"userToken":"admin-api-token"}');
    });
  });

  it('is logged in', async () => {
    const [page] = testPages;
    await page.goto(baseURL);
    await page.waitForSelector('.auth');
  });
});
