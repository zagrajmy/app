const {
  makeBasePreset,
} = require("@hasparus/eslint-config/src/makeBasePreset");

const config = makeBasePreset({
  ownPackageScope: "zagrajmy",
  useRulesRequiringTypechecking: process.env.CI === "true",
});

config.rules = {
  ...config.rules,
  // TODO: Configuration for rule "@typescript-eslint/ban-types" is invalid: 	Value false should be null. 	Value false should be string. 	Value false should be object. 	Value false should match exactly one schema in oneOf.
  "@typescript-eslint/ban-types": "off",
};

module.exports = config;
