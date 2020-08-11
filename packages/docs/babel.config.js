module.exports = {
  presets: ["babel-preset-gatsby"],
  plugins: [
    [
      "@babel/plugin-transform-react-jsx",
      {
        pragma: "jsx",
        pragmaFrag: "Fragment",
      },
    ],
    [
      "babel-plugin-jsx-imports",
      {
        pragma: "{ jsx } from theme-ui",
        pragmaFrag: "{ Fragment } from react",
      },
    ],
    "@babel/plugin-proposal-export-namespace-from",
  ],
};
