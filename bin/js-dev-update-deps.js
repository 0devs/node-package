#!/usr/bin/env node

/* eslint-disable no-console */

const { readPackageJson, writePackageJson, updatePackageJson } = require('../lib/helpers');

const jsDevConfig = require('../dev-config/js');

const cwd = process.cwd();

const pkgJsonFilepath = `${cwd}/package.json`;

let pkg = readPackageJson(pkgJsonFilepath);

console.log(`update devDependencies in ${pkgJsonFilepath}`);

pkg = updatePackageJson(pkg, jsDevConfig);

console.log(jsDevConfig.devDependencies);

writePackageJson(pkgJsonFilepath, pkg);

console.log('complete');
