const fs = require('fs-extra');
const path = require('path');

const packageJSON = require('../../package.json');
const { version: lernaVersion } = require('../../lerna.json');

const distDir = path.resolve(__dirname, '../../dist');

fs.readdirSync(distDir).forEach((pkgName) => {
  const jsonFilepath = path.resolve(distDir, pkgName, 'package.json');
  const pkg = fs.readJSONSync(jsonFilepath);
  const peerDependencies = Object.keys(pkg.peerDependencies)
    .reduce((deps, name) => ({
      ...deps,
      [name]: name.startsWith(packageJSON.name)
        ? lernaVersion // pkg.version
        : pkg.peerDependencies[name],
    }), {});

  console.table({
    pkgName,
    lernaVersion,
    local: pkg.version,
    root: packageJSON.version,
  });

  const content = {
    ...pkg,
    peerDependencies,
  };

  fs.writeFileSync(jsonFilepath, `${JSON.stringify(content, null, 2)}\n`);
});
