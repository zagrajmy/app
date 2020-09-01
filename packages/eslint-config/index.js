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

    // great rule for libraries, not that useful for apps
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "prefer-object-spread": "off",
    camelcase: "off",
    "@typescript-eslint/ban-types": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error", { typedefs: false }],
    "global-require": "off",
    // false positives
    "no-shadow": "off",
  },
};
