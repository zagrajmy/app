module.exports = {
  presets: ["babel-preset-gatsby"],
  plugins: [
    // "emotion",
    [
      "@babel/plugin-transform-react-jsx",
      {
        pragma: "JSX",
        pragmaFrag: "React.Fragment",
      },
    ],
    [
      "@emotion/babel-plugin-jsx-pragmatic",
      {
        module: "theme-ui",
        import: "JSX",
        export: "jsx",
      },
    ],
    "@babel/plugin-proposal-export-namespace-from",
  ],
};
