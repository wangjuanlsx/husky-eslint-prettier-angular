module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": [
    '@typescript-eslint'
  ],
  "extends": [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "allowImportExportEverywhere": false,
    "codeFrame": true,
    "ecmaFeatures": {
      "globalReturn": true,
      "impliedStrict": true,
      "legacyDecorators": true,
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "rules": {
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-empty-function": "off"
  }
}
