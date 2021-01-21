module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {},
};
