/* eslint-env node */
const path = require('path');
const server = require('../../packages/server');
const plugins = require('../../packages/server/src/plugins');

const {
  PORT = 3000,
  PUBLIC_DIR = path.resolve(__dirname, '../ui/build'),
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
