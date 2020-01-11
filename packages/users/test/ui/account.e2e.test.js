/* eslint-disable jest/expect-expect */
/* globals testPages, baseURL */

import {
  saveScreenshot,
  fixtures,
} from '../../../../test/e2e.utils';

const fieldIsAriaInvalid = (page, name) => page
  .$eval(`[name="${name}"]`, (el) => el.getAttribute('aria-invalid'));

const submitPasswordDisabled = (page) => page
  .$eval('[data-testid="password-change"] [type="submit"]', (el) => el.disabled);

// let verif;
describe('Account', () => {
  beforeAll(async () => {
    const [page] = testPages;
    await fixtures('packages/users/test/ui/account.fixtures');
    await page.goto(baseURL);
    await page.waitForSelector('.anon');

    await page.evaluate(() => {
      localStorage.setItem('eazin-1', '{"userToken":"user-api-token"}');
    });
    await page.goto(`${baseURL}/account`);
    await page.waitForSelector('.auth');
  });

  afterEach(async () => {
    await saveScreenshot();
  });

  describe('password change', () => {
    it('checks the fields', async () => {
      const [page] = testPages;
      await page.type('[name="current"]', '123456');
      expect(await fieldIsAriaInvalid(page, 'current'))
        .toBe('true');
      await page.type('[name="current"]', '7890Aa!');
      expect(await fieldIsAriaInvalid(page, 'current'))
        .toBe('false');
      expect(await submitPasswordDisabled(page))
        .toBe(true);

      await page.type('[name="password"]', 'Aa!123456');
      expect(await fieldIsAriaInvalid(page, 'password'))
        .toBe('true');
      await page.type('[name="password"]', '7890');
      expect(await fieldIsAriaInvalid(page, 'password'))
        .toBe('false');
      expect(await submitPasswordDisabled(page))
        .toBe(true);

      await page.type('[name="passwordConfirm"]', 'Aa!123456');
      expect(await fieldIsAriaInvalid(page, 'passwordConfirm'))
        .toBe('true');
      await page.type('[name="passwordConfirm"]', '7890');
      expect(await fieldIsAriaInvalid(page, 'passwordConfirm'))
        .toBe('false');
      expect(await submitPasswordDisabled(page))
        .toBe(false);

      // await page.click('[data-testid="password-change"] [type="submit"]');
    });

    // TODO:
    // - logout
    // - login with new password
  });

  describe('email change', () => {
    // TODO:
    // - change to already used address (should not be possible)
    // - change address
    // - follow instructions in verification mail
  });
});
