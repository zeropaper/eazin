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
    absPath(`test/**/*.${type}.test.js`),
    absPath(`src/**/test/**/*.${type}.test.js?(x)`),
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
        // absPath('src/server/**/*.js'),
        absPath('src/**/server/**/*.js'),
      ],
      modulePathIgnorePatterns: [
        '<rootDir>/build',
        '<rootDir>/dist',
        '<rootDir>/build/**/*',
        '<rootDir>/dist/**/*',
        '<rootDir>/node_modules/eazin-*/**/*',
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
        // absPath('src/**/*.{mjs,jsx,js}'),
        absPath('src/**/ui/**/*.{mjs,jsx,js}'),
      ],
    });
  return jestConfig;
};
