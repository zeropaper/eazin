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
            // 'config:airbnb-base',
            'plugin:jest/recommended'
          ],
        },
        envs: ['node', 'jest'],
        rules: {
          'max-len': ["error", {
            code: 120,
            ignoreComments: true,
            ignoreTrailingComments: true,
          }],
          'no-shadow': ['error', { 'allow': ['err', 'error'] }],
          'no-underscore-dangle': ['off'],
          'jest/no-disabled-tests': ['warn'],
          'max-classes-per-file': ['warn'],
          'consistent-return': ['off'],
        },
      },
    }),
  ].filter(Boolean),
};
