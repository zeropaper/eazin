const {
  readFileSync,
  writeFileSync,
  existsSync,
} = require('fs');
const nodemailer = require('nodemailer');

const eazinRc = require('eazin-core/server/util/eazinrc');

const {
  TEST_SENDER_FILE = '/tmp/test-sender-messages.json',
} = process.env;

let transporter;

const testSend = async (vars) => {
  if (!existsSync(TEST_SENDER_FILE)) writeFileSync(TEST_SENDER_FILE, '[]');

  const json = JSON.parse(readFileSync(TEST_SENDER_FILE, 'utf8'));
  json.push({
    ...vars,
    date: new Date(),
  });
  writeFileSync(TEST_SENDER_FILE, JSON.stringify(json, null, 2));

  return vars;
};


const prepareMail = (options, fn) => {
  const {
    env,
    siteName,
    baseURL,
    'eazin-mailer': {
      transport,
      siteSender,
    } = {},
  } = eazinRc();

  transporter = transporter
    || (env !== 'test' && nodemailer.createTransport(transport));

  return fn({
    ...options,
    siteName,
    baseURL,
    from: siteSender,
  });
};

module.exports = async ({
  template,
  ...options
}) => {
  const {
    env,
    'eazin-mailer': {
      siteSender,
      templates,
    } = {},
  } = eazinRc();

  if (typeof templates[template] !== 'function') throw new Error(`Could not find email template for "${template}"`);
  const vars = {
    from: siteSender,
    ...prepareMail(options, templates[template]),
    to: options.to,
  };

  return env === 'test'
    ? testSend({ ...options, template, ...vars })
    : transporter.sendMail(vars);
};
