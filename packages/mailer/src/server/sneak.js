const {
  readFileSync,
  existsSync,
} = require('fs');

const { TEST_SENDER_FILE } = process.env;

module.exports = async function sneak() {
  if (!existsSync(TEST_SENDER_FILE)) throw new Error(`TEST_SENDER_FILE ${TEST_SENDER_FILE} does not exists`);
  return JSON.parse(readFileSync(TEST_SENDER_FILE, 'utf8'));
};
