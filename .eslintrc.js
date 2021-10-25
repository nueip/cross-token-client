module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    indent: ['off', 2],
    'no-unused-vars': 'error',
    'no-console': 'off',
    'no-param-reassign': 0,
    'prettier/prettier': ['error', { singleQuote: true }],
  },
};
