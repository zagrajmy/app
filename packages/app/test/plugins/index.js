const webpackPreprocessor = require("@cypress/webpack-preprocessor");

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  const options = {
    webpackOptions: require("../cypress-webpack.config.js"),
  };

  on("file:preprocessor", webpackPreprocessor(options));

  return config;
};
