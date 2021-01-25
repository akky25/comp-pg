module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "no-console": "off",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-param-reassign": "off",
  },
};
