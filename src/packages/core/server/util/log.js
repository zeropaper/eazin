const { relative } = require('path');

const { log } = console;

const reset = '\x1b[0m';
// const Bright = '\x1b[1m';
// const dim = '\x1b[2m';
// const underscore = '\x1b[4m';
// const Blink = '\x1b[5m';
// const Reverse = '\x1b[7m';
// const Hidden = '\x1b[8m';

const colors = [[
  '\x1b[30m',
  '\x1b[31m',
  '\x1b[32m',
  '\x1b[33m',
  '\x1b[34m',
  '\x1b[35m',
  '\x1b[36m',
  '\x1b[37m',
], [
  '\x1b[40m',
  '\x1b[41m',
  '\x1b[42m',
  '\x1b[43m',
  '\x1b[44m',
  '\x1b[45m',
  '\x1b[46m',
  '\x1b[47m',
].reverse()];

const used = {};
const getColor = (str) => {
  // const s = str.split('/eazin-').pop().split('/packages/').pop();
  if (used[str]) return used[str];
  const next = Object.keys(used).length;
  used[str] = `${colors[0][next % colors[0].length]}`;
  return used[str];
};

module.exports = function proxiedLog(...args) {
  const line = ((new Error('log')).stack.split('\n')[2] || '').trim();
  if (!line) return log.call(...args);

  const file = line.match(/\(([^)]+)\)/)
    || line.match(/at (\/[^\s]+[0-9]+)/);
  if (!file || !file[1]) return log.call(...args);

  const relativePath = relative(process.cwd(), file[1]);
  const color = getColor(relativePath.split(':')[0]);
  log.call(console, `\n${color}[eazin] ${relativePath}${reset}`);
  log.call(console, ...args);
};
