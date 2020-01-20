const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');
const { readdirSync, existsSync, writeFileSync } = require('fs');

const compileProduction = require('./src/dev/neutrino-monorepo');
const testing = require('./src/dev/neutrino-test');

const pkgJson = require('./package.json');

const compileDevelopment = (neutrino, options) => () => {
  neutrino.use(react({ options }));
};

const packageSources = (projectName, sourcesDir, cb = () => {}) => readdirSync(sourcesDir)
  .forEach((pkgName) => {
    const packageName = `${projectName}-${pkgName}`;
    const jsonPath = `${sourcesDir}/${pkgName}/package.json`;
    if (!existsSync(jsonPath)) {
      writeFileSync(jsonPath, JSON.stringify({
        name: packageName,
        main: 'server/index.js',
        module: 'ui/index.js',
        private: true,
      }, null, 2));
    }
    cb(packageName, `${sourcesDir}/${pkgName}`);
  });


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
      const projectName = neutrino.options.packageJson.name;
      const { source } = neutrino.options;
      if (process.env.NODE_ENV !== 'test') {
        neutrino.config.resolve.alias
          .set('react', `${__dirname}/node_modules/react`)
          .end();

        const alias = (name, packagePath) => neutrino
          .config.resolve.alias
          .set(name, packagePath)
          .end();
        packageSources(projectName, `${source}/packages`, alias);
        // packageSources(projectName, `${source}/dev`, alias);
      }
      const options = {
        html: neutrino.config.get('mode') === 'development' && {
          title: 'React Preview',
        },
        externals: {},
        // externals: {
        //   redux: 'redux',
        //   react: 'react',
        //   'react-dom': 'react-dom',
        //   'react-redux': 'react-redux',
        //   'react-router-dom': 'react-router-dom',
        //   '@material-ui/core': '@material-ui/core',
        //   '@material-ui/icons': '@material-ui/icons',
        //   '@material-ui/lab': '@material-ui/icons',
        //   informed: 'informed',
        //   'material-table': 'material-table',
        // },
        style: {
          extract: {
            plugin: {
              // Override the @neutrinojs/react production behaviour of hashed CSS
              // filenames, and output to the build root, not an `assets/` subdirectory.
              filename: '[name].css',
            },
          },
        },
        targets: { browsers: 'ie 9' },
      };

      neutrino.config.when(
        neutrino.config.get('mode') === 'development' || process.env.BUILD_TYPE === 'html',
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
      });

      neutrino.config.optimization.merge({
        // minimize: neutrino.config.get('mode') === 'production',
        minimize: true,
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
