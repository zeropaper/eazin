const fs = require('fs-extra');
const path = require('path');

const packageJSON = require('../../package.json');
const { version: lernaVersion } = require('../../lerna.json');

fs.readdirSync(path.resolve(__dirname, '../../dist')).forEach((pkgName) => {
  const jsonFilepath = path.resolve(__dirname, '../../dist', pkgName, 'package.json');
  const pkg = fs.readJSONSync(jsonFilepath);
  const content = {
    ...pkg,
    peerDependencies: Object.keys(pkg.peerDependencies)
      .reduce((deps, name) => ({
        ...deps,
        [name]: name.startsWith(packageJSON.name)
          ? lernaVersion // pkg.version
          : pkg.peerDependencies[name],
      }), {}),
  };

  fs.writeFileSync(jsonFilepath, `${JSON.stringify(content, null, 2)}\n`);
});
