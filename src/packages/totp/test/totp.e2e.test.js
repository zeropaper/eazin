/* eslint-disable jest/expect-expect */
/* globals testPages, baseURL */
import totp from 'totp-generator';

import {
  saveScreenshot,
  fixtures,
  testidSelector,
  fastLogin,
} from '../../../../test/e2e.utils';

// const fieldIsAriaInvalid = (page, name) => page
//   .$eval(`[name="${name}"]`, (el) => el.getAttribute('aria-invalid'));

// let verif;

let secret;
let backupCodes;
describe('TOTP', () => {
  beforeAll(async () => {
    const [page] = testPages;
    await fixtures('packages/users/test/ui/account.fixtures');
    await fastLogin(page, 'user-api-token');
  });

  afterEach(saveScreenshot);

  it('can be set from the account page', async () => {
    const [page] = testPages;
    await page.goto(`${baseURL}/account`);
    const stored = JSON.parse(await page.evaluate(() => localStorage.getItem('eazin-1')));
    expect(stored).toHaveProperty('userToken', 'user-api-token');
    const totpSelector = testidSelector('totp-setup');
    await page.waitForSelector(totpSelector);

    const setupBtnSelector = `${totpSelector} button`;
    await page.waitForSelector(setupBtnSelector);
    await page.click(setupBtnSelector);

    const secretSelector = `${totpSelector} code`;
    await page.waitForSelector(secretSelector);
    secret = await page.$eval(secretSelector, (el) => el.textContent);

    const code = totp(`${secret}AAA`);
    await page.type(`${totpSelector} input[name="code"]`, code);
    await page.click(setupBtnSelector);

    await page.waitForSelector(`${totpSelector} ol`);
    backupCodes = await page.$$eval(`${totpSelector} ol > li`, (lis) => lis.map((li) => li.textContent));

    expect(backupCodes).toHaveLength(10);
  });

  it('requires a code for login', async () => {
    const [page] = testPages;
    await page.evaluate(() => localStorage.removeItem('eazin-1'));
    await page.goto(`${baseURL}/login`);
    // await page.waitForSelector('.anon');

    await page.waitForSelector('[name="email"]');
    await page.type('[name="email"]', 'some.user@eazin.dev');
    await page.type('[type="password"]', '1234567890Aa!');
    // throw new Error('Wait...');
    await page.click('[type="submit"]');
    await page.waitForSelector('[name="email"][readonly]');

    // await page.type('[name="code"]', '098765');
    // await page.click('[type="submit"]');
    // // throw new Error('Wait...');
    // await page.click('[name="code"]', { clickCount: 3 });

    await page.type('[name="code"]', totp(`${secret}AAA`));
    await page.click('[type="submit"]');
    await page.waitForSelector('.auth');
  });

  it('can use a backup code for login', async () => {
    const [page] = testPages;
    await page.evaluate(() => localStorage.removeItem('eazin-1'));
    await page.goto(`${baseURL}/login`);
    // await page.waitForSelector('.anon');

    await page.waitForSelector('[name="email"]');
    await page.type('[name="email"]', 'some.user@eazin.dev');
    await page.type('[type="password"]', '1234567890Aa!');
    // throw new Error('Wait...');
    await page.click('[type="submit"]');
    await page.waitForSelector('[name="email"][readonly]');

    // await page.type('[name="code"]', '098765');
    // await page.click('[type="submit"]');
    // // throw new Error('Wait...');
    // await page.click('[name="code"]', { clickCount: 3 });

    await page.type('[name="code"]', backupCodes[0]);
    await page.click('[type="submit"]');
    await page.waitForSelector('.auth');
  });
});
