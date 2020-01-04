const {
  readFileSync,
  writeFileSync,
  existsSync,
} = require('fs');
const nodemailer = require('nodemailer');

const eazinRc = require('eazin-core/server/util/eazinrc');

const {
  NODE_ENV = 'development',
  TEST_SENDER_FILE = '/tmp/test-sender-messages.json',
} = process.env;

const {
  siteName,
  baseURL,
  'eazin-mailer': {
    transport,
    siteSender,
    templates,
  },
} = eazinRc();

const transporter = NODE_ENV !== 'test' && nodemailer.createTransport(transport);

const testSend = async (vars) => {
  // eslint-disable-next-line no-console
  console.info('[eazin-mailer] test send', vars, TEST_SENDER_FILE);

  if (!existsSync(TEST_SENDER_FILE)) writeFileSync(TEST_SENDER_FILE, '[]');

  const json = JSON.parse(readFileSync(TEST_SENDER_FILE, 'utf8'));
  json.push({
    vars,
    date: new Date(),
  });
  writeFileSync(TEST_SENDER_FILE, JSON.stringify(json, null, 2));

  return vars;
};


const prepareMail = (options, fn) => fn({
  ...options,
  siteName,
  baseURL,
  from: siteSender,
});

module.exports = async ({
  template,
  ...options
}) => {
  if (typeof templates[template] !== 'function') throw new Error(`Could not find email template for "${template}"`);
  const vars = {
    from: siteSender,
    ...prepareMail(options, templates[template]),
    to: options.to,
  };

  return NODE_ENV === 'test'
    ? testSend(vars)
    : transporter.sendMail(vars);
};
