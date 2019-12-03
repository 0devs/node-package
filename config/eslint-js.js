module.exports = {
  extends: [
    'airbnb-base',
  ],
  rules: {
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'prefer-destructuring': 'off',
    //     "no-param-reassign": "off"
  },
  env: {
    'jest/globals': true,
  },
  plugins: [
    'jest',
  ],
};
