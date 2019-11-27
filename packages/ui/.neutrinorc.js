const path = require('path');
const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');
const reactComponents = require('@neutrinojs/react-components');

const { NODE_ENV, BUILD_TYPE = 'app' } = process.env;

const appPlugin = require('app-manifest-webpack-plugin');
const neutrinoAppPlugin = (conf = {}) => (neutrino) => {
  neutrino.config
    .plugin('app-manifest')
    .use(appPlugin, [conf]);
};

const { GenerateSW } = require('workbox-webpack-plugin');
const neutrinoGenerateSW = (conf = {}) => (neutrino) => {
  neutrino.config
    .plugin('workbox')
    .use(GenerateSW, [conf]);
};

const useInProd = plugin => (NODE_ENV === 'production'
  && BUILD_TYPE !== 'components')
  ? plugin
  : null;

module.exports = {
  options: {
    root: __dirname,
    output: 'dist',
  },
  use: [
    (neutrino) => {
      neutrino.config.resolve.alias
        .set('react-dom', '@hot-loader/react-dom')
        .end();
    },

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
          'react/prop-types': ['warn'],
          'jest/no-disabled-tests': ['warn'],
          'max-classes-per-file': ['warn'],
          'no-underscore-dangle': ['off'],
          'react/jsx-props-no-spreading': ['off'],
          'consistent-return': ['off'],
        },
      },
    }),

    BUILD_TYPE !== 'components'
      ? react({
        env: {
          NODE_ENV: 'development',
          NODE_ENV: 'development',
          CIRCLE_BUILD_NUM: null,
          CIRCLE_BRANCH: null,
          CIRCLE_SHA1: null,
        },

        devServer: {
          port: 5000,
          // host: '0.0.0.0',
          // historyApiFallback: false,
          proxy: {
            '/api': 'http://localhost:5001',
            '/socket.io': 'http://localhost:5001',
          },
        },
        html: {
          title: 'EAZIN',
          lang: 'en',
          meta: {
            viewport: 'width=device-width, initial-scale=1',
          },
          favicon: './src/static/icon.png',
        },
        babel: {
          presets: [
            '@babel/preset-react',
            '@babel/preset-env',
          ],
        },
      })
      : reactComponents(),

    useInProd(neutrinoAppPlugin({
      // Your source logo
      logo: __dirname + '/src/static/icon.png',
      // Prefix for file names
      prefix: './', // prefix: '/assets/icons-[hash:8]/', // default '/'
      // // Output path for icons (icons will be saved to output.path(webpack config) + this key)
      output: './', // output: 'assets/icons/', // default '/'. Can be absolute or relative
      // Emit all stats of the generated icons
      emitStats: false,
      // The name of the json containing all favicon information
      statsFilename: 'iconstats.json', // can be absolute path
      // Encode html entities in stats file (Example json_decode from php doesn't support html strings with escaped double quotes but it's valid json)
      statsEncodeHtml: false,
      // Generate a cache file with control hashes and
      // don't rebuild the favicons until those hashes change
      persistentCache: true,
      // Inject the html into the html-webpack-plugin. Default true
      inject: true,
      // favicons configuration object. Support all keys of favicons (see https://github.com/haydenbleasel/favicons)
      config: {
        appName: 'EAZIN', // Your application's name. `string`
        appDescription: 'App scaffolding', // Your application's description. `string`
        developerName: null, // Your (or your developer's) name. `string`
        developerURL: null, // Your (or your developer's) URL. `string`
        background: '#424242', // Background colour for flattened icons. `string`
        theme_color: '#ffc107', // Theme color for browser chrome. `string`
        display: 'standalone', // Android display: "browser" or "standalone". `string`
        orientation: 'portrait', // Android orientation: "portrait" or "landscape". `string`
        start_url: '/', // Android start application's URL. `string`
        version: '1.0', // Your application's version number. `number`
        logging: false, // Print logs to console? `boolean`
        icons: {
          // Platform Options:
          // - offset - offset in percentage
          // - shadow - drop shadow for Android icons, available online only
          // - background:
          //   * false - use default
          //   * true - force use default, e.g. set background for Android icons
          //   * color - set background for the specified icons
          //
          android: true, // Create Android homescreen icon. `boolean` or `{ offset, background, shadow }`
          appleIcon: true, // Create Apple touch icons. `boolean` or `{ offset, background }`
          appleStartup: true, // Create Apple startup images. `boolean` or `{ offset, background }`
          coast: { offset: 25 }, // Create Opera Coast icon with offset 25%. `boolean` or `{ offset, background }`
          favicons: true, // Create regular favicons. `boolean`
          firefox: true, // Create Firefox OS icons. `boolean` or `{ offset, background }`
          windows: false, // Create Windows 8 tile icons. `boolean` or `{ background }`
          yandex: false, // Create Yandex browser icon. `boolean` or `{ background }`
        },
      }
    })),

    useInProd(neutrinoGenerateSW({
      importWorkboxFrom: 'local',
      // skipWaiting: true,
    })),

    BUILD_TYPE === 'components' && ((neutrino) => {
      console.info('neutrino.config.entry', neutrino.config.entry);
      // neutrino.config.merge({
      //   entry: {
      //     'activity/index': [
      //       path.resolve(__dirname, './src/plugins/activity/index.js'),
      //     ],
      //     'activity/actions': [
      //       path.resolve(__dirname, './src/plugins/activity/activity.actions.js'),
      //     ],
      //     'activity/Drawer': [
      //       path.resolve(__dirname, './src/plugins/activity/ActivityDrawer.jsx'),
      //     ],
      //     'activity/LandingView': [
      //       path.resolve(__dirname, './src/plugins/activity/ActivityLandingView.jsx'),
      //     ],
      //     'activity/View': [
      //       path.resolve(__dirname, './src/plugins/activity/ActivityView.jsx'),
      //     ],
      //   },
      // });
    }),
  ].filter(Boolean),
};
