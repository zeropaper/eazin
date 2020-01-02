const path = require('path');
const jest = require('@neutrinojs/jest');

const absPath = (rel) => path.resolve(__dirname, '../../', rel);

const jestCommon = {
  moduleFileExtensions: ['js', 'jsx'],
  testRunner: 'jest-circus/runner',
  testRegex: null,
  verbose: true,
  modulePathIgnorePatterns: [
    absPath('dist'),
  ],
};

const jestType = (type) => ({
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputName: 'result.xml',
        outputDirectory: absPath(`test-results/${type}`),
      },
    ],
  ],
  testMatch: [
    absPath(`test/**/*${type}.test.js`),
    absPath(`packages/*/test/**/*${type}.test.js?(x)`),
  ],
  coverageDirectory: absPath(`test-results/${type}`),
});

module.exports = ({ type = 'unit' }) => {
  const jestConfig = jest(type === 'unit'
    ? {
      ...jestCommon,
      ...jestType(type),

      testEnvironment: 'node',
      collectCoverageFrom: [
        absPath('src/server/**/*.js'),
        absPath('packages/*/src/server/**/*.js'),
      ],
    }
    : {
      ...jestCommon,
      ...jestType(type),

      bail: 1,
      testEnvironment: absPath('test/e2e.environment.js'),
      setupFiles: [
        absPath('test/e2e.init'),
      ],
      collectCoverageFrom: [
        absPath('src/**/*.{mjs,jsx,js}'),
        absPath('packages/*/src/**/*.{mjs,jsx,js}'),
      ],
    });
  return jestConfig;
};
