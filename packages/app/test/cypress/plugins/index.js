const webpackPreprocessor = require("@cypress/webpack-preprocessor");
const percyHealthCheck = require("@percy/cypress/task");

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  const options = {
    webpackOptions: require("../cypress-webpack.config.js"),
  };

  on("file:preprocessor", webpackPreprocessor(options));
  on("task", percyHealthCheck);

  return config;
};
