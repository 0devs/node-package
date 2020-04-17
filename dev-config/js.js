const baseConfig = require('./base');

module.exports = {
  devDependencies: {
    ...baseConfig.devDependencies,
    'babel-cli': '^6.26.0',
    'babel-core': '^6.26.3',
    'babel-eslint': '^10.1.0',
    'babel-jest': '^25.3.0',
    'babel-preset-env': '^1.7.0',
    'eslint-plugin-import': '^2.7.0',
    'eslint-plugin-lodash': '^7.1.0',
  },
};
