const path = require('path');
const airbnb = require('@neutrinojs/airbnb');
const reactComponents = require('@neutrinojs/react-components');

const absPath = (rel) => path.resolve(__dirname, rel);

module.exports = {
  options: {
    root: __dirname,
    output: 'dist',
  },
  use: [
    airbnb({
      eslint: {
        baseConfig: {
          extends: [
            'plugin:jest/recommended',
          ],
        },
        envs: ['browser', 'jest'],
        rules: {
          'max-len': ['warn', {
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

    reactComponents(),

    ((neutrino) => {
      neutrino.config
        .when(process.env.NODE_ENV !== 'production', config => config.resolve.alias
          .set('react-dom', '@hot-loader/react-dom')
          .end());

      neutrino.config
        .when(process.env.NODE_ENV !== 'production', config => config.devServer
          .proxy({
            '/api': 'http://localhost:5001',
            '/socket.io': 'http://localhost:5001',
          })
          .end());

      neutrino.config.entry('App')
        .add(absPath('./src/App.jsx'))
        .end();
      neutrino.config.entry('AppLoader')
        .add(absPath('./src/AppLoader.jsx'))
        .end();
      neutrino.config.entry('Layout')
        .add(absPath('./src/components/Layout/Layout.jsx'))
        .end();
      neutrino.config.entry('Layout.Header')
        .add(absPath('./src/components/Layout/Layout.Header.jsx'))
        .end();
      neutrino.config.entry('Layout.Drawer.Link')
        .add(absPath('./src/components/Layout/Layout.Drawer.Link.jsx'))
        .end();

      [
        'activity',
        'docs',
        'landing',
        'repositories',
        'organisations',
        'groups',
        'settings',
        'user',
        'ws',
      ].forEach((name) => {
        neutrino.config.entry(`plugins/${name}`)
          .add(absPath(`./src/plugins/${name}/index.js`))
          .end();
      });

      [
        'util/logger',
        'util/queryAPI',
        'util/simpleFetch',
        'AppContext',
        'factory',
        'history',
        'store',
        'theme',
      ].forEach((name) => {
        neutrino.config.entry(`core/${name}`)
          .add(absPath(`./src/core/${name}`))
          .end();
      });
    }),
  ].filter(Boolean),
};
