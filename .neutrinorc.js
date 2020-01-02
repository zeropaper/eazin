const airbnb = require('@neutrinojs/airbnb');
// const copy = require('@neutrinojs/copy');

const react = require('@neutrinojs/react');
const banner = require('@neutrinojs/banner');
// const merge = require('deepmerge');
const nodeExternals = require('webpack-node-externals');
const { extname, join, basename, resolve } = require('path');
const { readdirSync, existsSync } = require('fs');
const { copy, ensureDir } = require('fs-extra');

const getDirs = dir => readdirSync(dir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);
const packageNames = getDirs('packages')

const packageDirs = packageNames
  .map(name => `packages/${name}`)
  .reduce((pkgs, pkg) => [
    ...pkgs,
    ...getDirs(pkg)
      .filter(name => ['src', 'test'].includes(name))
      .map(name => `${pkg}/${name}`)
      .reduce((types, type) => [
        ...types,
        type,
        // ...getDirs(type)
        //   .map(name => `${type}/${name}`),
      ], []),
  ], []);

// console.info('packageDirs', packageDirs);

// process.exit()

// const { TEST_TYPE, TEST_SENDER } = process.env;

// const jestCommon = {
//   moduleFileExtensions: ['js', 'jsx'],
//   testRunner: 'jest-circus/runner',
//   testRegex: null,
//   verbose: true,
//   moduleNameMapper: {
//     '^react-dom$': `${require.resolve('@hot-loader/react-dom')}`,
//   },
// };

// if (TEST_TYPE && !TEST_SENDER) {
//   throw new Error('No TEST_SENDER set');
// }

// const jestConfig = jest(TEST_TYPE === 'unit'
//   ? {
//     ...jestCommon,
//     reporters: [
//       'default',
//       [
//         'jest-junit',
//         {
//           outputName: 'result.xml',
//           outputDirectory: absPath(`test-results/unit`),
//         },
//       ],
//     ],
//     testMatch: [
//       absPath('test/**/*unit.test.js'),
//       absPath('packages/*/test/**/*unit.test.js?(x)')
//     ],
//     coverageDirectory: path.join(`${__dirname}/test-results/unit`),
//     testEnvironment: 'node',
//     setupFiles: [
//       // absPath('test/unit.init'),
//     ],
//   }
//   : {
//     ...jestCommon,
//     bail: 1,
//     reporters: [
//       'default',
//       [
//         'jest-junit',
//         {
//           outputName: 'result.xml',
//           outputDirectory: absPath(`test-results/e2e`),
//         },
//       ],
//     ],
//     testMatch: ['**/test/**/*e2e.test.js'],
//     coverageDirectory: path.join(`${__dirname}/test-results/e2e`),
//     testEnvironment: absPath('test/e2e.environment.js'),
//     setupFiles: [
//       absPath('test/e2e.init'),
//     ],
//   });


const afterEmit = (compiler, compilation) => {
  const buildPath = compiler.options.output.path;
  const entries = compilation.assetsInfo.entries();
  const filepaths = Array.from(entries)
    .reduce((acc, val) => [...acc, val[0]], []);


  return Promise.all([
    ...filepaths.map(async (filepath) => {
      const src = join(buildPath, filepath);
      const dest = join(__dirname, filepath);
      console.info('copy asset %s\n=> %s', src, dest);
      return copy(src, dest);
    }),
    // ...getDirs(join(buildPath, 'packages')).map(async (packageName) => {
    //   const src = join(buildPath, 'packages', packageName);
    //   const dest = join(__dirname, 'node_modules', `eazin-${packageName}`);
    //   console.info('copy module %s\n=> %s', src, dest);
    //   return copy();
    // }),
  ]);
};




function HooksPlugin(conf) {
  this._config = conf;
}
HooksPlugin.prototype.apply = function apply(compiler) {
  Object.keys(compiler.hooks).forEach((hook) => {
    compiler.hooks[hook].tap('HooksPlugin', (...args) => {
      if (typeof this._config[hook] === 'function') {
        return this._config[hook](compiler, ...args);
      }
    });
  });
};
const hooks = (conf = {}) => (neutrino) => {
  neutrino.config
    .plugin('hooks')
    .use(HooksPlugin, [conf]);
};



module.exports = {
  options: {
    root: __dirname,
    source: 'src/ui',
  },
  use: [
    (neutrino) => {
      neutrino.config.node
        .set('module', 'empty')
        .set('Buffer', 'empty')
        .end();
      console.info('neutrino.config', neutrino.config);

      neutrino.config.resolve.alias
        .set('react-dom', '@hot-loader/react-dom')
        .end();

      neutrino.config.resolve.modules
        .add(join(__dirname, 'node_modules'))
        .add(join(__dirname, 'packages'))
        .end();
      packageNames
        .forEach(name => neutrino.config.resolve.alias
          .set(`eazin-${name}`, join(__dirname, `packages/${name}`))
          .end());
    },

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
            devDependencies: true,
          }],
        },
      },
    }),

    (neutrino) => {
      const options = {
        devServer: {
          port: 5000,
          proxy: {
            '/api': 'http://localhost:5001',
            '/socket.io': 'http://localhost:5001',
          },
        },
        html: process.env.NODE_ENV === 'development' && {
          title: 'React Preview',
        },
        // externals: {},
        // externals: opts.externals !== false && {},
        // style: {
        //   extract: {
        //     plugin: {
        //       // Override the @neutrinojs/react production behaviour of hashed CSS
        //       // filenames, and output to the build root, not an `assets/` subdirectory.
        //       filename: '[name].css',
        //     },
        //   },
        // },
        devtool: {
          // production: 'source-map',
        },
        // targets: { browsers: 'ie 9' },
        targets: { browsers: ['defaults'] },
        babel: {
          presets: [
            '@babel/preset-react',
            ['@babel/preset-env', {
              useBuiltIns: 'entry',
              corejs: 3,
              // useBuiltIns: 'usage',
              // corejs: { version: 3, proposals: true },
              // forceAllTransforms: true,
            }],
          ],
        },
      };

      neutrino.config.when(
        process.env.NODE_ENV === 'development',
        () => {
          neutrino.use(react(options));

          neutrino.config.module.rule('compile')
            .include
            .add(join(__dirname, 'packages'))
            .end();

          // console.info('##########', packageDirs);
          // packageDirs
          //   .forEach((packageDir) => neutrino.config.module.rule('compile')
          //     .include
          //     .add(join(__dirname, packageDir)));
        },
        () => {
          Object.keys(neutrino.options.mains).forEach(key => {
            delete neutrino.options.mains[key]; // eslint-disable-line no-param-reassign
          });

          [
            'core/history.js',
            'core/store.js',
            'core/theme.js',
            'core/plugins.propTypes.js',
            'core/AppContext.jsx',
            'components/Form/index.js',
            'components/Form/Fields.jsx',
            'components/Form/FieldSet.jsx',
            'components/Form/FormBase.jsx',
            'components/Form/ButtonsGroup.jsx',
            'components/Form/TextField.jsx',
            'components/Layout/index.js',
            'components/Layout/Layout.jsx',
            'components/Layout/Layout.Drawer.jsx',
            'components/Layout/Layout.Drawer.Link.jsx',
            'components/Layout/Layout.Header.jsx',
            'components/ErrorBoundary.jsx',
            'components/Link.jsx',
            'components/LoadingFallback.jsx',
            'components/Str.jsx',
            'components/TimeAgo.jsx',
            'components/Table.jsx',
            'components/PluginPoint.jsx',
          ].forEach((srcPath) => {
            // eslint-disable-next-line no-param-reassign
            neutrino.options.mains[`packages/ui/dist/${srcPath.split('.').slice(0, -1).join('.')}`] = {
              entry: `${__dirname}/packages/ui/src/${srcPath}`,
            };
          });

          packageNames.forEach(pkgName => {
            const entry = `${__dirname}/packages/${pkgName}/src/ui/index.js`;
            const main = `packages/${pkgName}/dist/index`;

            if (existsSync(entry)) neutrino.options.mains[main] = { entry };

            const components = join(
              'packages',
              pkgName,
              'src/ui/components',
            );

            try {
              // console.info('### looking for', components);
              readdirSync(components).forEach(component => {
                // eslint-disable-next-line no-param-reassign
                neutrino.options.mains[`packages/${pkgName}/dist/${basename(component, extname(component))}`] = {
                  entry: join(components, component),
                };
              });
            } catch (e) {}
          });

          const pkg = neutrino.options.packageJson || {};
          // const hasSourceMap =
          //   (pkg.dependencies && 'source-map-support' in pkg.dependencies) ||
          //   (pkg.devDependencies && 'source-map-support' in pkg.devDependencies);
          const hasSourceMap = false;

          neutrino.use(react(options));

          neutrino.config.module.rule('compile')
            .include
            .add(join(__dirname, 'packages'))
            .end();

          // console.info('##########', packageDirs);
          // packageDirs
          //   .forEach((packageDir) => neutrino.config.module.rule('compile')
          //     .include
          //     .add(join(__dirname, packageDir)));

          neutrino.config
            .when(options.externals, config =>
              config.externals([nodeExternals(options.externals)]),
            )
            .when(hasSourceMap, () => neutrino.use(banner()))
            // Disable the chunking behaviour inherited from the react preset
            .optimization.splitChunks(false)
            .runtimeChunk(false)
            .end()
            .output // Override hashed filename/subdirectory usage inherited from @neutrinojs/react.
            .filename('[name].js')
            .library('[name]')
            .libraryTarget('umd')
            .umdNamedDefine(true);

          neutrino.use(hooks({
            afterEmit,
          }));
        },
      );
    },
  ],
};
