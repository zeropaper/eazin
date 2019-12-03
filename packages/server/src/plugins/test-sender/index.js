const fs = require('fs');

const {
  readFileSync,
  writeFileSync,
  existsSync,
} = fs;

const { TEST_SENDER = '/tmp/test-sender-messages.json' } = process.env;

const send = async (recipient, message) => {
  // eslint-disable-next-line no-console
  console.info('send', recipient, message, TEST_SENDER);

  if (!existsSync(TEST_SENDER)) writeFileSync(TEST_SENDER, '[]');

  const json = JSON.parse(readFileSync(TEST_SENDER, 'utf8'));
  json.push({
    recipient,
    message,
    date: new Date(),
  });
  writeFileSync(TEST_SENDER, JSON.stringify(json, null, 2));

  return 'Sent';
};


module.exports = send;
