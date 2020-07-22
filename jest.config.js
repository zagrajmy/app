module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["docs/.cache", "app/test/cypress"],
  globals: {
    "ts-jest": {
      babelConfig: "packages/app/.babelrc",
    },
  },
};
