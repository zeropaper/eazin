/* eslint-env node */
const server = require('@eazin/server');
const plugins = require('@eazin/server/src/plugins');

const { PORT = 3000 } = process.env;

// eslint-disable-next-line no-console
console.info('Starting server...');
server({
  plugins,
}).then((app) => {
  app.listen(parseInt(PORT, 10), () => {
    // eslint-disable-next-line no-console
    console.log(`...listening on *:${PORT}`);
  });
});
