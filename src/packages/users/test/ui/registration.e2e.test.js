/* eslint-disable jest/expect-expect */
/* globals testPages, baseURL */

import {
  saveScreenshot,
  sneakMessage,
  clearSneakMessages,
} from '../../../../../test/e2e.utils';

const fieldIsAriaInvalid = (page, name) => page
  .$eval(`[name="${name}"]`, (el) => el.getAttribute('aria-invalid'));

const submitDisabled = (page) => page
  .$eval('[type="submit"]', (el) => el.disabled);

let verif;
const email = `john+${Math.round(Math.random() * 1000000)}@eazin.test`;
const emailParts = email.split('@');

describe('User', () => {
  beforeAll(async () => {
    clearSneakMessages();
    const [page] = testPages;
    await page.goto(`${baseURL}/register`);
    await page.waitForSelector('[name="email"]');
  });

  afterEach(async () => {
    await saveScreenshot();
  });

  describe('registration', () => {
    it('has a field for email', async () => {
      const [page] = testPages;
      expect(process.env.TEST_SENDER).toBeTruthy();

      expect(await submitDisabled(page))
        .toBe(true);

      await page.type('[name="email"]', emailParts[0]);
      expect(await fieldIsAriaInvalid(page, 'email'))
        .toBe('true');
      await page.type('[name="email"]', '@eazin.test');
      expect(await fieldIsAriaInvalid(page, 'email'))
        .toBe('false');
      expect(await submitDisabled(page))
        .toBe(true);
    });

    it('has a field for password', async () => {
      const [page] = testPages;
      await page.type('[name="password"]', 'wei23e');
      expect(await fieldIsAriaInvalid(page, 'password'))
        .toBe('true');
      await page.type('[name="password"]', '!!jje9HGU9');
      expect(await fieldIsAriaInvalid(page, 'password'))
        .toBe('false');
      expect(await submitDisabled(page))
        .toBe(true);
    });

    it('has a field for password confirmation', async () => {
      const [page] = testPages;
      await page.type('[name="passwordConfirm"]', 'wei23e');
      expect(await fieldIsAriaInvalid(page, 'passwordConfirm'))
        .toBe('true');
      await page.type('[name="passwordConfirm"]', '!!jje9HGU9');
      expect(await fieldIsAriaInvalid(page, 'passwordConfirm'))
        .toBe('false');

      expect(await submitDisabled(page))
        .toBe(false);
    });

    it('notifies about verification mail', async () => {
      const [page] = testPages;
      expect(await submitDisabled(page))
        .toBe(false);
      await page.click('[type="submit"]');
      verif = await sneakMessage(email);

      expect(verif).toHaveProperty('token');
      expect(verif).toHaveProperty('template', 'register');
    });
  });

  describe('verification', () => {
    it('follows instructions', async () => {
      const [page] = testPages;
      await page.goto(`${baseURL}/verify?token=${verif.token}`);
      await page.waitForSelector('[name="firstName"]');
    });

    it('asks for some information', async () => {
      const [page] = testPages;

      expect(await submitDisabled(page))
        .toBe(true);

      await page.type('[name="firstName"]', 'John');
      expect(await submitDisabled(page))
        .toBe(true);

      await page.type('[name="lastName"]', 'Doe');
      expect(await submitDisabled(page))
        .toBe(false);

      await Promise.all([
        page.waitForNavigation(),
        page.click('[type="submit"]'),
      ]);
      await page.waitForSelector('[data-testid="layout-content"].auth');
    });
  });
});
