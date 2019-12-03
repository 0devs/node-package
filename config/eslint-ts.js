module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:sonarjs/recommended',
    // 'plugin:jest/recommended',
    // 'plugin:security/recommended',
  ],
  rules: {
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'prefer-destructuring': 'off',
    '@typescript-eslint/interface-name-prefix': ['error', { prefixWithI: 'always' }],
  },
  env: {
    'jest/globals': true,
  },
  plugins: [
    'sonarjs',
    // 'security',
  ],
  overrides: [
    {
      files: [
        '**/*.spec.ts',
      ],
      env: {
        jest: true,
      },
      plugins: ['jest'],
      // Can't extend in overrides: https://github.com/eslint/eslint/issues/8813
      // "extends": ["plugin:jest/recommended"]
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        'jest/valid-expect-in-promise': 'error',
      },
    },
  ],
};
