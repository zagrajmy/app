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
  overrides: replacePackagePaths(config, "docs"),
};
