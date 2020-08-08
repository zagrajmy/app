module.exports = {
  presets: [
    [
      "next/babel",
      {
        "preset-react": {
          pragma: "jsx",
          pragmaFrag: "React.Fragment",
        },
      },
    ],
  ],
  plugins: [
    "babel-plugin-macros",
    "emotion",
    [
      "babel-plugin-jsx-imports",
      {
        pragma: "{ jsx } from theme-ui",
        pragmaFrag: "{ Fragment } from react",
      },
    ],
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-export-namespace-from",
  ],
};
