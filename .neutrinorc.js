const path = require('path');
const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');

const absPath = str => `${__dirname}/${str}`;

const { readdirSync } = require('fs')

const getDirs = dir => readdirSync(dir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);
const packageNames = getDirs('packages')

// const packageDirs = packageNames
//   .map(name => `packages/${name}`)
//   .reduce((pkgs, pkg) => [
//     ...pkgs,
//     ...getDirs(pkg)
//       .filter(name => ['src', 'test'].includes(name))
//       .map(name => `${pkg}/${name}`)
//       .reduce((types, type) => [
//         ...types,
//         type,
//         // ...getDirs(type)
//         //   .map(name => `${type}/${name}`),
//       ], []),
//   ], []);

// console.info('packageDirs', packageDirs);

// process.exit()

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
    (neutrino) => {
      // neutrino.config.resolve.modules
      //   .add(path.join(__dirname, 'node_modules'))
      //   .add(path.join(__dirname, 'packages'))
      //   .end();
      // packageNames
      //   .forEach(name => neutrino.config.resolve.modules
      //     .add(path.resolve(__dirname, `packages/${name}/node_modules`))
      //     .end());

      neutrino.config.resolve.alias
        .set('react-dom', '@hot-loader/react-dom')
        .end();
      packageNames
        .forEach(name => neutrino.config.resolve.alias
          .set(`eazin-${name}`, path.resolve(__dirname, `packages/${name}`))
          .end());
    },

    // jestConfig,

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
          'no-shadow': ['error', { 'allow': ['err', 'error'] }],
          'import/no-extraneous-dependencies': ['error', {
            peerDependencies: true,
          }],
        },
      },
    }),

    // react({
    //   env: {
    //     NODE_ENV: 'production',
    //   },
    //   devServer: {
    //     port: 8080,
    //     proxy: {
    //       '/api': 'http://localhost:8081',
    //       '/socket.io': 'http://localhost:8081',
    //     },
    //   },
    //   html: {
    //     title: 'eazin',
    //     lang: 'en',
    //     meta: {
    //       viewport: 'width=device-width, initial-scale=1',
    //     },
    //     favicon: './src/static/icon.png',
    //   },
    //   babel: {
    //     presets: [
    //       '@babel/preset-react',
    //       '@babel/preset-env',
    //     ],
    //   },
    // }),
  ].filter(Boolean),
};
