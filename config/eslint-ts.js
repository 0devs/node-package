module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:sonarjs/recommended',
    // 'plugin:security/recommended',
  ],
  rules: {
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'prefer-destructuring': 'off',
  },
  env: {
    'jest/globals': true,
  },
  plugins: [
    'jest',
    'sonarjs',
    // 'security',
  ],
};
