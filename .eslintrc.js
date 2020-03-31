module.exports = {
  extends: "chop-chop",
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
    "react/prop-types": "off",
    "react/no-array-index-key": "off",
  },
  overrides: [
    {
      files: ["packages/app/pages/api/**/*.ts"],
      rules: { "no-console": "off" },
    },
    {
      files: [
        "packages/app/pages/**/*.ts",
        "packages/app/pages/**/*.tsx",
        "**/gatsby-theme-*/**",
      ],
      rules: { "import/no-default-export": "off" },
    },
    {
      // allow default exports in shadowed files
      files: ["packages/app/scripts/**/*.ts"],
      rules: { "import/no-extraneous-dependencies": "off" },
    },
  ],
};
