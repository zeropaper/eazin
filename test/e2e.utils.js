/* globals screenshotsPath, screenshotsSlug, testPages, screenshots */
import path from 'path';
import http from 'http';
import { mkdirp } from 'fs-extra';

import {
  testidSelector,
  waitMs,
  waitFor,
  sneakMessage,
  clearSneakMessages,
  noop,
} from './util';

export {
  testidSelector,
  waitMs,
  waitFor,
  sneakMessage,
  clearSneakMessages,
  noop,
};

export const getTextareaValue = (page, testId) => page
  .$eval(`${testidSelector(testId)} textarea:not([aria-hidden="true"])`, (el) => el.value);

export const ifHeadless = async (yes, no) => {
  const {
    CI,
    NODE_WATCH,
  } = process.env;

  if (CI || !NODE_WATCH) {
    await yes();
  } else {
    await no();
  }
};

export const typeFast = (page, testId, value) => page.$eval(testidSelector(testId), (el, val) => {
  // eslint-disable-next-line no-param-reassign
  el.value = val || '';
}, value);

// export const getPageUser = async (page) => {
//   const storage = await page.evaluate(() => window.localStorage.getItem('eazin-1'));
//   console.info('getPageUser', storage);
// };

export const saveScreenshot = async () => {
  await mkdirp(path.join(screenshotsPath, screenshotsSlug));
  return Promise.all(testPages.map(async (page, p) => {
    // const pageUser = await getPageUser(page);
    // const username = pageUser ? pageUser.email : 'anon';
    // const filename = `${p}-${username}.png`;
    const filename = `${p}-browser.png`;
    const screenshotPath = path.join(screenshotsPath, screenshotsSlug, filename);
    const prev = (screenshots[screenshotsSlug] || {});
    screenshots[screenshotsSlug] = {
      ...prev,
      screenshots: [
        ...(prev.screenshots || []),
        filename,
      ],
    };
    return page.screenshot({
      path: screenshotPath,
    });
  }))
    // eslint-disable-next-line no-console
    .catch((err) => console.error(err.message));
};

export const request = (pathname, data, method = 'post') => {
  const { PORT = 3030 } = process.env;

  const json = JSON.stringify(data);

  const options = {
    hostname: 'localhost',
    port: PORT,
    path: pathname,
    method: method.toUpperCase(),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Content-Length': json.length,
    },
  };

  return new Promise((res, rej) => {
    let receieved = '';
    try {
      const httpRequest = http.request(options, (response) => {
        response.on('data', (d) => { receieved += d; });
        response.on('end', () => { res(receieved); });
      });

      httpRequest.on('error', (err) => {
        // eslint-disable-next-line no-console
        console.warn('test request failed', err.stack);
        rej(err);
      });

      httpRequest.write(json);
      httpRequest.end();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('test request failed', err.stack);
      rej(err);
    }
  });
};

export const fixtures = async (data) => request('/fixtures', typeof data === 'string'
  ? { file: data }
  : data);

export const clearFixtures = () => request('/fixtures', {}, 'delete');


export default {
  testidSelector,
  waitMs,
  getTextareaValue,
  noop,
  ifHeadless,
  typeFast,
  waitFor,
  sneakMessage,
  clearSneakMessages,
  saveScreenshot,
  request,
  fixtures,
  clearFixtures,
};
