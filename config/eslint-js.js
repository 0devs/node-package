module.exports = {
  extends: [
    'airbnb-base',
    'plugin:sonarjs/recommended',
    'plugin:jest/recommended',
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
