module.exports = {
  extends: "chop-chop",
  plugins: ["simple-import-sort"],
  rules: {
    "sonarjs/no-duplicate-string": "off",
    "jsx-a11y/anchor-has-content": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
      },
    ],
    "no-restricted-syntax": "off",
    "no-nested-ternary": "off",
    "react/prop-types": "off",
    "react/no-array-index-key": "off",
    "no-undef-init": "off",

    "sort-imports": "off",
    "import/order": "off",
    "simple-import-sort/sort": "error",
  },
};
