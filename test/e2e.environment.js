/* eslint-disable no-console */
const NodeEnvironment = require('jest-environment-node');
const puppeteer = require('puppeteer');
const path = require('path');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const { promisify } = require('util');
const { writeFile: fsWriteFile } = require('fs');
const tcpPortUsed = require('tcp-port-used');

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

const app = makeApp({
  publicDir: 'demo/ui/build',
  dbURL: 'mongodb://localhost:27017/eazin-e2e-test',
  plugins,
});

class PuppeteerEnvironment extends NodeEnvironment {
  async setup() {
    await super.setup();

    this.counter = 0;
    this.screenshots = [];
    this.docsInfo = [];

    this.global.baseURL = `http://localhost:${PORT}`;
    const PORTint = parseInt(PORT, 10);

    this.app = await app;
    this.global.db = this.app.db;

    if (JEST_SERVE || !watching) {
      if (!await tcpPortUsed.check(PORTint)) this.app.listen(PORTint);
    }
    await tcpPortUsed.waitUntilUsed(PORTint, 500, 4000);

    rimraf.sync(screenshotsPath);
    mkdirp.sync(screenshotsPath);

    if (!watching) {
      rimraf.sync(docsOutputDir);
      mkdirp.sync(path.join(docsOutputDir, 'screenshots'));
    }

    const commonOptions = {
      headless: !watching,
      slowMo: (!watching || SLOWMO) ? parseInt(SLOWMO || 20, 10) : 0,
      handleSIGINT: !TEST_KEEP_BROWSER,
      handleSIGTERM: !TEST_KEEP_BROWSER,
      handleSIGHUP: !TEST_KEEP_BROWSER,
    };
    const browser = await puppeteer.launch({
      ...commonOptions,
    });

    this.global.testSlowMo = commonOptions.slowMo;
    this.global.testWatching = commonOptions.watching;

    this.global.testPages = [
      await browser.newPage(),
    ];
    this.global.testPages[0].on('console', (msg) => {
      for (let i = 0; i < msg.args().length; i += 1) {
        console.log(`0 ${i}: ${msg.args()[i]}`);
      }
    });

    // this.global.keepBrowserOpen = () => {
    //   // browser.disconnect();
    //   // this.teardown();
    //   if (TEST_KEEP_BROWSER) throw new Error('Keep open!');
    //   // process.abort();
    //   // process.exit(1);
    // };

    const addNewPageWithNewContext = async () => {
      const page = await newPageWithNewContext(browser);
      this.global.testPages.push(page);
      page.on('console', (msg) => {
        for (let i = 0; i < msg.args().length; i += 1) {
          console.log(`${this.global.testPages.length} ${i}: ${msg.args()[i]}`);
        }
      });
    };
    this.global.addNewPageWithNewContext = addNewPageWithNewContext;

    // await addNewPageWithNewContext();

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
  }

  async teardown() {
    try {
      await new Promise((res) => setTimeout(res, 200 * (this.global.slowMo + 1)));

      const report = await reportTemplate({
        title: 'Eazin E2E Test Report',
        outputDirectory: e2eOutputDir,
        info: this.screenshots,
      });
      await writeFile(path.join(e2eOutputDir, 'index.html'), report, 'utf8');

      if (!watching) {
        const docs = await documentationTemplate({
          title: 'Eazin Documenation',
          info: this.docsInfo,
        });
        await writeFile(path.join(docsOutputDir, 'index.html'), docs, 'utf8');
      }

      if (this.app && typeof this.app.close === 'function') this.app.close();

      await Promise.all((this.global.testPages || [])
        .map(async (page) => {
          try {
            const br = await page.browser();
            if (!TEST_KEEP_BROWSER) {
              await closePage(br, page);
              await br.close();
            } else {
              // br.disconnect();
            }
          } catch (err) {
            console.warn(err.message);
          }
        }));
    } catch (err) {
      console.error(err.stack);
    }

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
