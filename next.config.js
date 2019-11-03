const withFonts = require("next-fonts");
const withCSS = require("@zeit/next-css");

module.exports = withFonts(
  withCSS({
    webpack(config, _options) {
      return config;
    },
  })
);
