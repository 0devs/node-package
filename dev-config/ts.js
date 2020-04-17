const baseConfig = require('./base');

module.exports = {
  devDependencies: {
    ...baseConfig.devDependencies,
    typescript: '^3.8.3',
    'ts-jest': '^25.4.0',
    '@types/jest': '^25.2.1',
    '@types/node': '^13.11.1',
    '@typescript-eslint/eslint-plugin': '^2.28.0',
    '@typescript-eslint/parser': '^2.28.0',

    // "tslint": "^5.20.1",
    // "tslint-sonarts": "^1.9.0",
  },
};
