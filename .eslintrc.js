module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true,
  },
  plugins: ["import", "jest", "node", "prettier", "promise", "react"],
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/react",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:react/recommended",
    "plugin:promise/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  settings: {
    react: { version: "detect" },
    "import/resolver": { node: { extensions: [".js", ".jsx"] } },
  },
  rules: {
    "react/prop-types": 0,
  },
}
