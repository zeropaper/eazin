const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');
const chokidar = require('chokidar');
const debounce = require('lodash.debounce');

const compileProduction = require('./src/dev/neutrino-monorepo');
const testing = require('./src/dev/neutrino-test');

const pkgJson = require('./package.json');

const compileDevelopment = (neutrino, options) => () => {
  neutrino.use(react({ options }));
};

module.exports = {
  options: {
    root: __dirname,
    source: 'src',
    output: process.env.BUILD_TYPE === 'html' ? 'html-build' : 'build',
  },
  use: [
    airbnb({
      eslint: {
        baseConfig: {
          settings: {
            'import/internal-regex': new RegExp(`^${pkgJson.name}-`),
          },
          extends: [
            'plugin:jest/recommended',
          ],
        },
        envs: ['browser', 'jest', 'node'],
        rules: {
          'import/no-extraneous-dependencies': ['warn', {
            devDependencies: true,
          }],
          'import/no-unresolved': ['warn'],
          'max-len': ['warn', {
            code: 120,
            ignoreComments: true,
            ignoreTrailingComments: true,
          }],
          'consistent-return': ['off'],
          'jest/no-disabled-tests': ['warn'],
          'max-classes-per-file': ['warn'],
          'no-shadow': ['error', { allow: ['err', 'error'] }],
          'no-underscore-dangle': ['off'],
          'react/jsx-props-no-spreading': ['off'],
          'react/prop-types': ['warn'],
        },
      },
    }),

    (neutrino) => {
      neutrino.config.resolve.alias
        .set('react', `${__dirname}/node_modules/react`)
        .end();
      const options = {
        html: process.env.NODE_ENV === 'development' && {
          title: 'React Preview',
        },
        externals: {
          react: 'react',
          'react-dom': 'react-dom',
          'react-router-dom': 'react-router-dom',
          '@material-ui/core': '@material-ui/core',
          '@material-ui/icons': '@material-ui/icons',
          informed: 'informed',
          'material-table': 'material-table',
        },
        style: {
          extract: {
            plugin: {
              // Override the @neutrinojs/react production behaviour of hashed CSS
              // filenames, and output to the build root, not an `assets/` subdirectory.
              filename: '[name].css',
            },
          },
        },
        // devtool: {
        //   production: 'source-map',
        // },
        targets: { browsers: 'ie 9' },
      };

      neutrino.config.when(
        process.env.NODE_ENV === 'development' || process.env.BUILD_TYPE === 'html',
        compileDevelopment(neutrino, options),
        compileProduction(neutrino, options),
      );

      neutrino.config.devServer.merge({
        port: 5000,
        proxy: {
          '/api': 'http://localhost:5001',
          '/socket.io': 'http://localhost:5001',
          '/fixtures': 'http://localhost:5001',
        },
        before: (app, server) => {
          chokidar
            .watch([
              'dist/*/ui/**/*.js',
            ], {
              alwaysStat: true,
              atomic: false,
              followSymlinks: false,
              ignoreInitial: true,
              ignorePermissionErrors: true,
            })
            .on('all', debounce(() => {
              // eslint-disable-next-line no-console
              console.info('[eazin] components build detected - trigger project build');
              server.sockWrite(server.sockets, 'content-changed');
            }, 50));
        },
      });

      neutrino.config.optimization.merge({
        // minimize: process.env.NODE_ENV === 'production',
        minimize: false,
      });

      // Attempt to get those FÜç*¼#g source-maps working
      // neutrino.config.node.merge({
      //   Buffer: true,
      //   module: 'empty',
      // });
    },

    process.env.TEST_TYPE && testing({
      type: process.env.TEST_TYPE,
    }),
  ].filter(Boolean),
};
