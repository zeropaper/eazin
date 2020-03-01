/* eslint-disable no-underscore-dangle */
const react = require('@neutrinojs/react');
const banner = require('@neutrinojs/banner');
const copy = require('@neutrinojs/copy');
const nodeExternals = require('webpack-node-externals');
const { join } = require('path');
const { readdirSync, existsSync } = require('fs');
const {
  readJSON,
  readJSONSync,
  readFileSync,
  statSync,
} = require('fs-extra');

// eslint-disable-next-line import/no-extraneous-dependencies
const hookTypes = require('tapable');

const pkgSrcs = 'src/packages';

class HooksPlugin {
  constructor(conf) {
    this._config = conf;
  }

  // eslint-disable-next-line class-methods-use-this
  tap(hook, cb) {
    const hookType = Object.keys(hookTypes)
      .filter((name) => (typeof hookTypes[name] !== 'boolean'))
      .find((name) => (hook instanceof hookTypes[name]));
    const tapMethod = hookType.indexOf('Async') === 0 ? 'tapPromise' : 'tap';
    return hook[tapMethod]('HookPlugin', cb);
  }

  apply(compiler) {
    Object.keys(compiler.hooks).forEach((hookName) => {
      if (typeof this._config[hookName] === 'function') {
        this.tap(compiler.hooks[hookName], (...args) => this._config[hookName](compiler, ...args));
      }
    });
  }
}

const hooks = (conf = {}) => (neutrino) => {
  neutrino.config
    .plugin('hooks')
    .use(HooksPlugin, [conf]);
};

const pkgToPackage = ({
  name,
  peerDependencies,
}, {
  optionalDependencies,
  husky,
  scripts,
  dependencies,
  ...pkg
}, version) => ({
  ...pkg,
  name: `${pkg.name}-${name}`,
  private: false,
  scripts: {
    prepack: 'node ../../src/dev/prepack.js',
  },
  repository: {
    ...pkg.repository || {},
    directory: `${pkgSrcs}/${name}`,
  },
  peerDependencies,
  main: 'server/index.js',
  module: 'ui/index.js',
  version,
});

const stripExt = (str) => {
  const parts = str.split('.');
  return parts.length > 1 ? parts.slice(0, -1).join('.') : str;
};

const packagePeerDependencies = (dependencies, available, projectName, currentVersion) => Object
  .keys(dependencies)
  .sort()
  .reduce((deps, name) => {
    const version = name.startsWith(projectName)
      ? currentVersion
      : `${available[name] || dependencies[name]}`;
    return {
      ...deps,
      [name]: version,
    };
  }, {});

const recurseDirComponent = (dir) => readdirSync(dir)
  .reduce((paths, filename) => {
    if (filename === 'test' || filename.startsWith('_')) return paths;
    let sub = [];
    const subPath = join(dir, filename);

    if (statSync(subPath).isDirectory()) {
      sub = recurseDirComponent(subPath);
      // else if (filename.endsWith('.jsx')) {
    } else {
      sub = [subPath];
    }

    return [
      ...paths,
      ...sub,
    ];
  }, []);

module.exports = (neutrino, options) => () => {
  Object.keys(neutrino.options.mains).forEach((key) => {
    delete neutrino.options.mains[key]; // eslint-disable-line no-param-reassign
  });

  const projectRoot = neutrino.options.root;
  const LICENSE = readFileSync(join(projectRoot, 'LICENSE'));
  const lernaJSON = readJSONSync(join(projectRoot, 'lerna.json'));
  const pkg = neutrino.options.packageJson || {};
  const repoHostURL = pkg.repository.url
    .split('+').pop().split('.git').join('');
  const allDeps = ({
    ...(pkg.devDependencies || {}),
    ...(pkg.dependencies || {}),
  });
  const pkgNames = [];

  readdirSync(pkgSrcs)
    .reduce((acc, val) => {
      pkgNames.push(val);

      const uiDir = join(pkgSrcs, val, 'ui');

      if (!existsSync(uiDir)) return acc;
      return [
        ...acc,
        join(uiDir, 'index.js'),
        ...recurseDirComponent(uiDir),
      ];
    }, [])
    .forEach((main) => {
      const mainPath = stripExt(main)
        .replace(`${pkgSrcs}/`, `${pkg.name}-`);
      // eslint-disable-next-line no-param-reassign
      neutrino.options.mains[mainPath] = {
        entry: join(projectRoot, main),
      };
    });

  // very unfortunately... source maps break the module execution
  const hasSourceMap = false;// !!allDeps['source-map-support'];

  neutrino.use(react(options));

  neutrino.config.module.rule('compile')
    .include
    .add(join(projectRoot, pkgSrcs))
    .end();

  const wpWriteFile = (compilation, filepath, content) => {
    // eslint-disable-next-line no-param-reassign
    compilation.assets[filepath] = {
      source: () => content,
      size: () => content.length,
    };
  };

  const emit = (compiler, compilation) => Promise
    .all(pkgNames.map(async (name) => {
      const src = join(projectRoot, pkgSrcs, name, 'pkg.json');

      let basePkg = {};
      if (existsSync(src)) {
        try {
          basePkg = await readJSON(src) || {};
        } catch (e) {
          // eslint-disable-next-line no-console
          console.warn('Error reading', src);
        }
      }

      let content = pkgToPackage({
        name,
        peerDependencies: packagePeerDependencies(basePkg.dependencies || {}, allDeps, pkg.name, lernaJSON.version),
      }, pkg, lernaJSON.version);
      content = `${JSON.stringify(content, null, 2)}\n`;
      wpWriteFile(compilation, `${pkg.name}-${name}/package.json`, content);

      if (process.env.BUILD_SKIP_OPTIONAL) return;
      wpWriteFile(compilation, `${pkg.name}-${name}/LICENSE`, LICENSE);

      wpWriteFile(compilation, `${pkg.name}-${name}/README.md`, `# ${pkg.name}-${name}

Please refer to:
${repoHostURL}/tree/master/${pkgSrcs}/${name}`);
    }));

  neutrino.use(hooks({ emit }));

  neutrino.use(copy({
    patterns: pkgNames
      .filter((name) => existsSync(`${pkgSrcs}/${name}/server/index.js`))
      .map((name) => ({
        from: `${pkgSrcs}/${name}/server`,
        to: `${pkg.name}-${name}/server`,
      })),
  }));

  neutrino.config
    .when(options.externals, (config) => config.externals([nodeExternals(options.externals)]))
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
};
