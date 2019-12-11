const {
  readFileSync,
  existsSync,
} = require('fs');

const { TEST_SENDER } = process.env;

module.exports = async function sneak() {
  if (!existsSync(TEST_SENDER)) return [];
  return JSON.parse(readFileSync(TEST_SENDER, 'utf8'));
};
