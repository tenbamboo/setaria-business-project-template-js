module.exports = {
  root: true,
  parserOptions: {
    parser: "@babel/eslint-parser",
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
    },
    requireConfigFile: false,
    allowImportExportEverywhere: false,
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    jquery: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "plugin:prettier/recommended"],
  rules: {
    // "prettier/prettier": "warn",
  },
};
