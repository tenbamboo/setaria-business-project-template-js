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
    // best-practice
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "no-alert": "warn",
    "no-case-declarations": "error",
    "no-multi-str": "error",
    "no-with": "error",
    "no-void": "error",

    "sort-imports": [
      "warn",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: false,
      },
    ],

    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "always",
          component: "always",
        },
        math: "always",
      },
    ],
    "vue/no-v-html": "off",
    "vue/require-default-prop": "off",
    "vue/require-explicit-emits": "off",
    "vue/multi-word-component-names": "off",
    "vue/prefer-import-from-vue": "off",
    "vue/no-v-text-v-html-on-component": "off",

    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    // "prettier/prettier": "warn",
  },
};
