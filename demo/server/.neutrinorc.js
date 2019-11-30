const path = require('path');
const airbnb = require('@neutrinojs/airbnb-base');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    airbnb({
      eslint: {
        baseConfig: {
          extends: [
            // 'config:airbnb',
            'plugin:jest/recommended'
          ],
        },
        envs: ['browser', 'jest'],
        rules: {
          'max-len': ["error", {
            code: 120,
            ignoreComments: true,
            ignoreTrailingComments: true,
          }],
          'no-underscore-dangle': ['off'],
          'jest/no-disabled-tests': ['warn'],
          'max-classes-per-file': ['warn'],
          'consistent-return': ['warn'],
        },
      },
    }),
    (neutrino) => {
      neutrino.config.resolve.modules
        .add(path.join(__dirname, 'node_modules'))
        .end();
    },
  ],
};
