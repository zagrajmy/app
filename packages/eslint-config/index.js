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
  // false positives on declaration merging
  "no-redeclare": "off",
  // false positive on declare namespace
  "@typescript-eslint/no-namespace": "off",
  // Too rigid. I don't see the point.
  "no-loop-func": "off",
  // tons of false positives
  "@typescript-eslint/no-unused-vars": "off",
  "@typescript-eslint/no-unused-vars-experimental": "warn",
};
config.overrides.find((x) => x.files.includes("*.tsx")).rules = {
  "react/react-in-jsx-scope": "off",
};

module.exports = config;
