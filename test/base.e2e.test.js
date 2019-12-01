/* eslint-disable no-unused-vars */
/* eslint-disable jest/expect-expect */
/* global keepBrowserOpen, writeDocs, testPages, testSlowMo, addNewPageWithNewContext, baseURL */

import {
  waitMs,
  testid,
  getTextareaValue,
  noop,
  ifHeadless,
  typeFast,
  waitFor,
} from './e2e.utils';

jest.setTimeout(20000 * (testSlowMo + 1));

// some timeout is needed for clean screenshots
// and I couldn't find how to move that to the environment file :/
afterEach(() => waitMs(100 * testPages.length));
afterAll(() => waitMs(150 * testPages.length));

describe('EAZIN', () => {
  it('loads 2 browser pages', async () => {
    const [page1, page2] = testPages;

    await Promise.all(testPages.map((page) => page.goto(baseURL)));

    keepBrowserOpen();
  });
});
