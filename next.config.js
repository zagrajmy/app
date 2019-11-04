const withFonts = require("next-fonts");
const withCSS = require("@zeit/next-css");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX(
  withFonts(
    withCSS({
      pageExtensions: ["ts", "tsx", "mdx", "md"],

      webpack(config, _options) {
        return config;
      },
    })
  )
);
