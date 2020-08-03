module.exports = {
  testEnvironment: "node",
  testPathIgnorePatterns: ["docs/.cache", "app/test/cypress"],
  transform: {
    "\\.tsx?$": [
      "babel-jest",
      { configFile: "./packages/app/babel.config.js" },
    ],
  },
};
