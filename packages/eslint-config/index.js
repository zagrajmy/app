module.exports = {
  extends: "chop-chop",
  plugins: ["simple-import-sort"],
  rules: {
    "sonarjs/no-duplicate-string": "off",
    "jsx-a11y/anchor-has-content": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "no-restricted-syntax": "off",
    "no-nested-ternary": "off",

    "react/prop-types": "off",
    "react/no-array-index-key": "off",
    // false positives on `user?: never;`
    "react/no-unused-prop-types": "off",

    "no-undef-init": "off",
    // TypeScript checks this
    "no-undef": "off",

    "sort-imports": "off",
    "import/order": "off",
    "simple-import-sort/sort": "warn",
    "no-else-return": "off",

    "react/jsx-pascal-case": "off",

    "prefer-destructuring": ["warn", { object: true, array: false }],
  },
};
