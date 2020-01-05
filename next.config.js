const withFonts = require("next-fonts");
const withCSS = require("@zeit/next-css");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

module.exports = withMDX(
  withFonts(
    withCSS({
      pageExtensions: ["ts", "tsx", "mdx", "md"],

      webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
          // eslint-disable-next-line no-param-reassign
          config.node = {
            fs: "empty"
          };
        }

        return config;
      }
    })
  )
);
