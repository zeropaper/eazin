const path = require('path');
const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');

const absPath = str => `${__dirname}/${str}`;

const { TEST_TYPE, TEST_SENDER } = process.env;

const jestCommon = {
  moduleFileExtensions: ['js', 'jsx'],
  testRunner: 'jest-circus/runner',
  testRegex: null,
  verbose: true,
  moduleNameMapper: {
    '^react-dom$': `${require.resolve('@hot-loader/react-dom')}`,
  },
};

if (TEST_TYPE && !TEST_SENDER) {
  throw new Error('No TEST_SENDER set');
}

const jestConfig = jest(TEST_TYPE === 'unit'
  ? {
    ...jestCommon,
    reporters: [
      'default',
      [
        'jest-junit',
        {
          outputName: 'result.xml',
          outputDirectory: absPath(`test-results/unit`),
        },
      ],
    ],
    testMatch: [
      absPath('test/**/*unit.test.js'),
      absPath('packages/*/test/**/*unit.test.js?(x)')
    ],
    coverageDirectory: path.join(`${__dirname}/test-results/unit`),
    testEnvironment: 'node',
    setupFiles: [
      // absPath('test/unit.init'),
    ],
  }
  : {
    ...jestCommon,
    bail: 1,
    reporters: [
      'default',
      [
        'jest-junit',
        {
          outputName: 'result.xml',
          outputDirectory: absPath(`test-results/e2e`),
        },
      ],
    ],
    testMatch: ['**/test/**/*e2e.test.js'],
    coverageDirectory: path.join(`${__dirname}/test-results/e2e`),
    testEnvironment: absPath('test/e2e.environment.js'),
    setupFiles: [
      absPath('test/e2e.init'),
    ],
  });

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    jestConfig,
    airbnb({
      eslint: {
        baseConfig: {
          extends: [
            'plugin:jest/recommended',
          ],
        },
        envs: ['browser', 'jest', 'node'],
        rules: {
          'max-len': ['error', {
            code: 120,
            ignoreComments: true,
            ignoreTrailingComments: true,
          }],
          'react/prop-types': ['warn'],
          'jest/no-disabled-tests': ['warn'],
          'max-classes-per-file': ['warn'],
          'no-underscore-dangle': ['off'],
          'react/jsx-props-no-spreading': ['off'],
          'consistent-return': ['off'],
        },
      },
    }),
    react(),
    (neutrino) => {
      neutrino.config.module.rule('lint')
        .include
        .add(path.resolve(__dirname, './packages/ui/src'))
        .add(path.resolve(__dirname, './packages/ui/test'))
        .add(path.resolve(__dirname, './packages/ui/storie'))
        .add(path.resolve(__dirname, './packages/server/src'))
        .add(path.resolve(__dirname, './packages/server/test'))
        .end();
    },
  ].filter(Boolean),
};
