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
      "@emotion/babel-plugin-jsx-pragmatic",
      {
        module: "theme-ui",
        import: "jsx",
        export: "jsx",
      },
    ],
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-export-namespace-from",
  ],
};
