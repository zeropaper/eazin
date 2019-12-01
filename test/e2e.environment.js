/* eslint-disable no-console */
const NodeEnvironment = require('jest-environment-node');
const puppeteer = require('puppeteer');
const path = require('path');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const { promisify } = require('util');
const { writeFile: fsWriteFile } = require('fs');

const makeApp = require('../packages/server/src/server');
const plugins = require('../packages/server/src/plugins');

const reportTemplate = require('./e2e.report-template');
const documentationTemplate = require('./e2e.documentation-template');

const writeFile = promisify(fsWriteFile);

const slugify = (str) => str
  .trim()
  .toLowerCase()
  .split(/[^a-z0-9]+/g)
  .join('-');

const {
  TEST_KEEP_BROWSER,
  NODE_WATCH,
  HEADLESS,
  JEST_SERVE,
  SLOWMO,
  PORT = 3030, // eazin-demo-server production port
} = process.env;

const watching = (!!TEST_KEEP_BROWSER || !!NODE_WATCH) && !HEADLESS;

const screenshotsPath = path.resolve(`${__dirname}/../test-results/e2e/screenshots`);
const e2eOutputDir = path.resolve(__dirname, '../test-results/e2e');
const docsOutputDir = path.resolve(__dirname, '../test-results/docs');

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


const processDocsScreenshot = ({
  title,
  slug,
  testPages,
  number,
}) => async ({
  pageIndex = 0,
  description = '',
}) => {
  const screenshotPath = path
    .join(docsOutputDir, 'screenshots', `${number}-${pageIndex}-${slug}.png`);

  await testPages[pageIndex].screenshot({
    path: screenshotPath,
  });

  return {
    title,
    slug,
    pageIndex,
    screenshotPath: path.relative(docsOutputDir, screenshotPath),
    description,
  };
};

class PuppeteerEnvironment extends NodeEnvironment {
  async setup() {
    console.info('[E2E] setup');

    await super.setup();

    this.counter = 0;
    this.screenshots = [];
    this.docsInfo = [];

    this.global.baseURL = `http://localhost:${PORT}`;

    if (JEST_SERVE || !watching) {
      this.app = await makeApp({
        publicDir: 'demo/ui/build',
        dbURL: 'mongodb://localhost:27017/eazin-e2e-test',
        plugins,
      });
      await new Promise((res, rej) => this.app.listen(PORT, (err) => (err ? rej(err) : res())));

      console.info('[E2E] serving on %s', this.global.baseURL);
    } else {
      console.info('[E2E] served from %s', this.global.baseURL);
    }

    rimraf.sync(screenshotsPath);
    mkdirp.sync(screenshotsPath);

    rimraf.sync(docsOutputDir);
    mkdirp.sync(path.join(docsOutputDir, 'screenshots'));

    const commonOptions = {
      headless: !watching,
      slowMo: (!watching || SLOWMO) ? parseInt(SLOWMO || 20, 10) : 0,
      handleSIGINT: !TEST_KEEP_BROWSER,
      handleSIGTERM: !TEST_KEEP_BROWSER,
      handleSIGHUP: !TEST_KEEP_BROWSER,
    };

    this.global.testSlowMo = commonOptions.slowMo;
    this.global.testWatching = commonOptions.watching;

    const browser = await puppeteer.launch({
      ...commonOptions,
    });

    this.global.testPages = [
      await browser.newPage(),
    ];
    this.global.keepBrowserOpen = () => {
      if (TEST_KEEP_BROWSER) throw new Error('Keep open!');
      // browser.disconnect();
    };

    const addNewPageWithNewContext = async () => {
      const page = await newPageWithNewContext(browser);
      this.global.testPages.push(page);
    };
    this.global.addNewPageWithNewContext = addNewPageWithNewContext;

    await addNewPageWithNewContext();

    this.global.writeDocs = async ({
      info = {},
      screenshots = [],
    } = {}) => {
      const {
        title = 'Missing title',
        description = '',
      } = info;

      const generated = {
        title,
        description,
        screenshots: await Promise
          .all(screenshots
            .map(processDocsScreenshot({
              title,
              slug: slugify(title),
              testPages: this.global.testPages,
              number: this.docsInfo.length,
            }))),
      };

      this.docsInfo.push(generated);
    };

    this.global.testPages.forEach((page, p) => page.on('console', (msg) => {
      for (let i = 0; i < msg.args().length; i += 1) {
        console.log(`${p} ${i}: ${msg.args()[i]}`);
      }
    }));
  }

  async teardown() {
    console.info('[E2E] tearing down');

    await new Promise((res) => setTimeout(res, 200 * (this.global.slowMo + 1)));

    await writeFile(path.join(e2eOutputDir, 'index.html'), await reportTemplate({
      title: 'Eazin E2E Test Report',
      outputDirectory: e2eOutputDir,
      info: this.screenshots,
    }), 'utf8');


    await writeFile(path.join(docsOutputDir, 'index.html'), await documentationTemplate({
      title: 'Eazin Documenation',
      info: this.docsInfo,
    }), 'utf8');


    if (this.app && typeof this.app.close === 'function') this.app.close();


    await Promise.all((this.global.testPages || [])
      .map(async (page) => {
        try {
          const br = await page.browser();
          if (!TEST_KEEP_BROWSER) {
            console.info('[E2E] kill browser...');
            await closePage(br, page);
            await br.close();
          } else {
            console.info('[E2E] keep browser');
            // br.disconnect();
          }
        } catch (err) {
          console.warn(err.message);
        }
      }));

    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }

  handleTestEvent(event, state) {
    this.global.currentlyRunningTest = (state || {}).currentlyRunningTest;

    if (['test_fn_success', 'test_fn_failure'].indexOf(event.name) < 0) return;
    this.counter += 1;

    const slug = slugify((state.currentlyRunningTest || {}).name || '');

    const makePath = (num) => path
      .resolve(`${screenshotsPath}/${
        event.name === 'test_fn_success' ? 'success' : 'error'
      }-${this.counter}-${num}-${slug}.png`);

    const info = {
      slug,
      num: this.counter,
      screenshotPaths: [],
      state: { ...state.currentlyRunningTest },
    };
    this.screenshots.push(info);
    Promise.all(this.global.testPages.map((page, p) => {
      const screenshotPath = makePath(p);
      info.screenshotPaths.push(screenshotPath);
      return page.screenshot({
        path: screenshotPath,
      });
    }))
      .catch((err) => console.error(err.message));
  }
}

module.exports = PuppeteerEnvironment;
