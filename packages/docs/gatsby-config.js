const { join } = require("path");

module.exports = {
  plugins: [
    /* resolve docs from the app package `src` directory */
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: join(__dirname, "../app/src"),
      },
    },
    "gatsby-theme-docz",
    "gatsby-plugin-typescript",
  ],
};
