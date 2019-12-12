// eslint-disable-next-line import/no-extraneous-dependencies
const eazin = require('eazin-server');

const plugins = require('eazin-server/src/plugins');

const { PORT = 5000 } = process.env;

// eslint-disable-next-line no-console
console.info('Starting server...');
eazin({
  plugins,
}).then((app) => {
  app.listen(parseInt(PORT, 10), () => {
    // eslint-disable-next-line no-console
    console.log(`...listening on *:${PORT}`);
  });
});
