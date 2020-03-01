// const fs = require('fs-extra');
// const path = require('path');

// const packageJSON = require('../../package.json');

// fs.readdirSync(path.resolve(__dirname, '../../dist')).forEach((pkgName) => {
//   const jsonFilepath = path.resolve(__dirname, '../../dist', pkgName, 'package.json');
//   const pkg = fs.readJSONSync(jsonFilepath);
//   console.info(pkg);
//   fs.writeFileSync(jsonFilepath, `${JSON.stringify({
//     ...pkg,
//     peerDependencies: Object.keys(pkg.peerDependencies).reduce((obj, key) => ({
//       ...obj,
//       [key]: key.startsWith(packageJSON.name)
//         ? pkg.version
//         : pkg.peerDependencies[key],
//     }), {}),
//   }, null, 2)}\n`);
// });

console.info('@#@@######### POST PACK');
