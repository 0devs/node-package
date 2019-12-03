const baseConfig = require('./base');

module.exports = {
  devDependencies: {
    ...baseConfig.devDependencies,
    typescript: '^3.7.2',
    'ts-jest': '^24.2.0',
    '@types/jest': '^24.0.23',
    '@types/node': '^12.12.14',
    '@typescript-eslint/eslint-plugin': '^2.10.0',
    '@typescript-eslint/parser': '^2.10.0',

    // "tslint": "^5.20.1",
    // "tslint-sonarts": "^1.9.0",
  },
};
