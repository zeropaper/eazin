/* globals testPages, baseURL, addNewPageWithNewContext */

import {
  saveScreenshot,
} from '../../../../../test/e2e.utils';

describe('Core E2E test setup', () => {
  afterEach(async () => {
    await saveScreenshot();
  });

  // eslint-disable-next-line jest/expect-expect
  it('starts', async () => {
    await addNewPageWithNewContext();
    await Promise.all(testPages.map((page) => page.goto(baseURL)));
  });
});
