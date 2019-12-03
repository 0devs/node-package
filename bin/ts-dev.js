#!/usr/bin/env node

/* eslint-disable no-console */

const { readPackageJson, writePackageJson, updatePackageJson } = require('../lib/helpers');
const tsDevConfig = require('../dev-config/ts');

const cwd = process.cwd();

const pkgJsonFilepath = `${cwd}/package.json`;

let pkg = readPackageJson(pkgJsonFilepath);

console.log(`update devDependencies in ${pkgJsonFilepath}`);

pkg = updatePackageJson(pkg, tsDevConfig);

console.log(tsDevConfig.devDependencies);

writePackageJson(pkgJsonFilepath, pkg);

console.log('complete');
