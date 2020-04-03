const rootConfig = require("../../.eslintrc.js");

module.exports = {
  ...rootConfig,
  overrides: rootConfig.overrides.map((o) => ({
    files: o.files.map((f) => {
      return f.replace("packages/app/", "");
    }),
    rules: o.rules,
  })),
};
