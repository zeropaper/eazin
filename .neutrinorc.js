const path = require('path');
const airbnb = require('@neutrinojs/airbnb');
const jest = require('@neutrinojs/jest');

const absPath = str => `${__dirname}/${str}`;

const { TEST_TYPE } = process.env;

const jestCommon = {
  moduleFileExtensions: ['js', 'jsx'],
  testRunner: 'jest-circus/runner',
  testRegex: null,
  verbose: true,
  // moduleNameMapper: {
  //   '^react-dom$': `${require.resolve('@hot-loader/react-dom')}`,
  // },
};

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
    // setupFiles: [
    //   absPath('test/unit.init'),
    // ],
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
    // testEnvironment: absPath('test/e2e.environment.js'),
    // setupFiles: [
    //   absPath('test/e2e.init'),
    // ],
  });

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    jestConfig,
  ].filter(Boolean),
};
