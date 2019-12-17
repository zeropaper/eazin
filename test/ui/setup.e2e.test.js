/* globals testPages, addNewPageWithNewContext */

describe('E2E test setup', () => {
  // eslint-disable-next-line jest/expect-expect
  it('starts', async () => {
    await addNewPageWithNewContext();
    await Promise.all(testPages.map((page) => page.goto('https://google.com')));
  });
});
