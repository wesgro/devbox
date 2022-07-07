module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  rules: {
    "no-console": 0,
    eqeqeq: "warn",
    "no-cond-assign": 0,
    "no-unused-vars": 1,
    "no-extra-semi": "warn",
    semi: "warn",
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
};
