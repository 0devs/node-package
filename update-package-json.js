#!/usr/bin/env node

const fs = require('fs');

const jsDevConfig = require('./dev-config/js');
const tsDevConfig = require('./dev-config/ts');

const rawDevDependencies = {
  ...jsDevConfig.devDependencies,
  ...tsDevConfig.devDependencies,
};

const devDependencies = {};

const moduleNames = Object.keys(rawDevDependencies);

moduleNames.sort();

moduleNames.forEach((moduleName) => {
  devDependencies[moduleName] = rawDevDependencies[moduleName];
});

const pkg = require('./package.json');

pkg.devDependencies = devDependencies;

fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2));

// eslint-disable-next-line no-console
console.log('package.json updated');
