module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  rules: {
    'no-mixed-spaces-and-tabs': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'vue/no-v-html': 'off',
  },
};
