const { join } = require("path");
const { DefinePlugin } = require("webpack");
const { config: dotenv } = require("dotenv");

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    modules: ["src", "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "ts-loader",

            options: {
              transpileOnly: true,
              configFile: join(__dirname, "tsconfig.json"),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      "process.env": JSON.stringify(
        dotenv({ path: join(__dirname, "../.env") }).parsed
      ),
    }),
  ],
};
