module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["docs/.cache", "app/test/e2e"],
  globals: {
    "ts-jest": {
      babelConfig: "packages/app/.babelrc",
    },
  },
};
