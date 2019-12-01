/* eslint-env node */
const server = require('eazin-server');
const plugins = require('eazin-server/src/plugins');

const {
  PORT = 3000,
  PUBLIC_DIR = '../ui/build',
  MONGODB_URL = 'mongodb://localhost:27017/eazin-demo',
} = process.env;

// eslint-disable-next-line no-console
console.info('Starting server...');
server({
  publicDir: PUBLIC_DIR,
  dbURL: MONGODB_URL,
  plugins,
}).then((app) => {
  app.listen(parseInt(PORT, 10), () => {
    // eslint-disable-next-line no-console
    console.log(`...listening on *:${PORT}`);
  });
});
