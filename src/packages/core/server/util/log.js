const { relative } = require('path');

const { log } = console;

module.exports = function proxiedLog(...args) {
  const line = ((new Error('log')).stack.split('\n')[2] || '').trim();
  if (!line) return log.call(...args);

  const file = line.match(/\(([^)]+)\)/)
    || line.match(/at (\/[^\s]+[0-9]+)/);
  if (!file || !file[1]) return log.call(...args);

  log.call(console, `\x1b[2m⬛ ${relative(process.cwd(), file[1])}\x1b[0m\n`, ...args);
};
