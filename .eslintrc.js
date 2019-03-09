
module.exports = {
  extends: ['airbnb', 'plugin:react-native/all'],
  env: {
    browser: true,
    jest: true,
    'react-native/react-native': true,
  },
  plugins: ['react-native'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
  },
  rules: {
    quotes: ['error', 'single'],
    'react/no-unescaped-entities': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/require-default-props': 'off',
    'linebreak-style': 'off',
    'consistent-return': 'off',
    'no-param-reassign':'off',
    'max-len': 'off',
    'no-alert': 'off',
    'global-require': 'off',
    'no-underscore-dangle': [
      'off',
      {
        allow: ['_id'],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
      },
    ],
    'comma-dangle': 2,
    'react/no-array-index-key': 'off',
    'no-nested-ternary': 'off',
    'import/prefer-default-export': 'off',
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 'off',
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 'off',
    'react-native/sort-styles': 'off',
  },
};
