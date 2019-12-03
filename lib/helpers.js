/* eslint-disable no-console */

const fs = require('fs');

module.exports = {
  readPackageJson: (pkgJsonFilepath) => {
    if (!fs.existsSync(pkgJsonFilepath)) {
      console.log(`ERROR: no package.json: ${pkgJsonFilepath}`);
      return process.exit(1);
    }

    try {
      return JSON.parse(fs.readFileSync(pkgJsonFilepath).toString());
    } catch (e) {
      console.log(`invalid ${pkgJsonFilepath}`);
      console.log(e);
      return process.exit(1);
    }
  },

  updatePackageJson: (rawPkg, devConfig) => {
    const pkg = rawPkg;

    const rawDevDependencies = pkg.devDependencies ? pkg.devDependencies : {};

    Object.keys(devConfig.devDependencies).forEach((name) => {
      rawDevDependencies[name] = devConfig.devDependencies[name];
    });

    const devDependencies = {};

    const moduleNames = Object.keys(rawDevDependencies);

    moduleNames.sort();

    moduleNames.forEach((moduleName) => {
      devDependencies[moduleName] = rawDevDependencies[moduleName];
    });

    pkg.devDependencies = devDependencies;

    return pkg;
  },

  writePackageJson: (pkgJsonFilepath, pkg) => {
    fs.writeFileSync(pkgJsonFilepath, JSON.stringify(pkg, null, 2));
  },
};
