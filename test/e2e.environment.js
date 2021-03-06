/* eslint-disable global-require */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
const NodeEnvironment = require('jest-environment-node');
const puppeteer = require('puppeteer');
const path = require('path');
const rimraf = require('rimraf');
const mongoose = require('mongoose');
const {
  mkdirpSync,
  mkdirp,
  move,
  pathExists,
} = require('fs-extra');
const { dir: tmpDir } = require('tmp-promise');
const superagent = require('superagent');

const eazin = require('../src/packages/core/server');

const plugins = [
  require('../src/packages/users/server'),
  require('../src/packages/totp/server'),

  require('../src/dev/groups/server'),
  require('../src/dev/organisations/server'),
  require('../src/dev/clients/server'),
];

const {
  TEST_KEEP_BROWSER,
  NODE_WATCH,
  HEADLESS,
  SLOWMO,
} = process.env;

const watching = (!!TEST_KEEP_BROWSER || !!NODE_WATCH) && !HEADLESS;

const screenshotsPath = path.resolve(`${__dirname}/../test-results/e2e/screenshots`);

async function newPageWithNewContext(browser) {
  const { browserContextId } = await browser._connection.send('Target.createBrowserContext');
  const page = await browser._createPageInContext(browserContextId);
  page.browserContextId = browserContextId;
  return page;
}

async function closePage(browser, page) {
  if (page.browserContextId !== undefined) {
    await browser._connection.send('Target.disposeBrowserContext', {
      browserContextId: page.browserContextId,
    });
  } else {
    await page.close();
  }
}

rimraf.sync(screenshotsPath);
mkdirpSync(`${screenshotsPath}/success`);
mkdirpSync(`${screenshotsPath}/failure`);

const slugify = (str) => str
  .trim()
  .toLowerCase()
  .split(/[^a-z0-9/]+/g)
  .join('-');

const fullName = (test) => (test.parent && test.parent.parent
  ? `${fullName(test.parent)}/${test.name || ''}`
  : (test.name || ''));

const pageLogger = (num) => (msg) => {
  for (let i = 0; i < msg.args().length; i += 1) {
    console.log(`${num} ${i}: ${msg.args()[i]}`);
  }
};

class PuppeteerEnvironment extends NodeEnvironment {
  async setup() {
    await super.setup();

    try {
      this.app = await eazin({ plugins });
      this.global.baseURL = this.app.get('localURL');

      if (TEST_KEEP_BROWSER) {
        try {
          await superagent.post(`${this.global.baseURL}/kill`);
        } catch (e) { /* */ }
      }

      await this.app.listen();
    } catch (err) {
      console.error('[E2E] serving error', err.stack);
    }

    const commonOptions = {
      headless: !watching,
      slowMo: (!watching || SLOWMO) ? parseInt(SLOWMO || 20, 10) : 0,
    };
    const browser = await puppeteer.launch({
      ...commonOptions,
    });

    this.global.screenshots = {};
    const tmp = await tmpDir();
    const { path: tmpPath, cleanup: tmpCleanup } = tmp;
    this.tmpCleanup = tmpCleanup;
    this.global.screenshotsPath = tmpPath;
    this.global.testSlowMo = commonOptions.slowMo;
    this.global.testWatching = commonOptions.watching;

    const pages = await browser.pages();
    this.global.testPages = [
      ...pages,
    ];
    // this.global.testPages[0].on('console', pageLogger(1));

    const addNewPageWithNewContext = async ({
      logConsole = false,
    } = {}) => {
      const page = await newPageWithNewContext(browser);
      this.global.testPages.push(page);
      if (logConsole) page.on('console', pageLogger(this.global.testPages.length));
      return page;
    };
    this.global.addNewPageWithNewContext = addNewPageWithNewContext;
  }

  runScript(script) {
    return super.runScript(script);
  }

  handleTestEvent(event, state) {
    this.global.currentlyRunningTest = (state || {}).currentlyRunningTest;

    const {
      currentlyRunningTest: current,
    } = this.global;

    if (current) {
      this.global.screenshotsSlug = slugify(fullName(current));
    }

    const { screenshotsSlug: slug } = this.global;

    if (['test_fn_success', 'test_fn_failure'].includes(event.name)) {
      const result = event.name.includes('success') ? 'success' : 'failure';
      this.global.screenshots[slug] = this.global.screenshots[slug] || {};
      this.global.screenshots[slug].result = result;
    }
  }

  async teardown() {
    await Promise.all(Object.keys(this.global.screenshots || {})
      .map(async (slug) => {
        try {
          const { result } = this.global.screenshots[slug];
          const src = path.join(this.global.screenshotsPath, slug);
          if (!(await pathExists(src)) || !screenshotsPath || !result || !slug) return;
          const dest = path.join(screenshotsPath, result, slug);
          await mkdirp(path.dirname(dest));
          await move(src, dest, { overwrite: true });
        } catch (e) {
          console.warn('[E2E] teardown screenshot error', e.stack);
        }
      }));

    if (this.app && !TEST_KEEP_BROWSER) {
      await mongoose.connection.close();
      await this.app.close();
    }

    await Promise.all((this.global.testPages || [])
      .map(async (page) => {
        try {
          const br = await page.browser();
          if (!TEST_KEEP_BROWSER) {
            await closePage(br, page);
            await br.close();
          } else {
            br.disconnect();
          }
        } catch (err) {
          console.warn(err.message);
        }
      }));

    // if (typeof this.tmpCleanup === 'function') await this.tmpCleanup();
    await super.teardown();
  }
}

module.exports = PuppeteerEnvironment;
