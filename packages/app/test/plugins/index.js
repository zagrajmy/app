const webpackPreprocessor = require("@cypress/webpack-preprocessor");
const { join } = require("path");

const { readDotenv } = require("../../scripts/readDotenv");

module.exports = (on, config) => {
  const options = {
    webpackOptions: require("../cypress-webpack.config.js"),
  };
  on("file:preprocessor", webpackPreprocessor(options));

  // eslint-disable-next-line no-param-reassign
  config.env = {
    ...config.env,
    ...readDotenv(join(__dirname, "../../.env")),
  };

  return config;
};
