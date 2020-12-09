// @ts-check

const config = require("../../.eslintrc");
const {
  replacePackagePaths,
} = require("@zagrajmy/eslint-config/replacePackagePaths");

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  ...config,
  parserOptions: {
    project: [require.resolve("./tsconfig.json")],
  },
  overrides: replacePackagePaths(config, "app"),
};
