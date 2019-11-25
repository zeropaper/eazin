/* eslint-env node */
const server = require('./src/server');

const plugins = require('./src/plugins');

const { PORT = 5000 } = process.env;

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
