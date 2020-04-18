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
    "no-nested-ternary": "off",
    "react/prop-types": "off",
    "react/no-array-index-key": "off",
    "no-undef-init": "off",
  },
  overrides: [
    {
      // we actually want to deploy logs in serverside code
      files: ["packages/app/pages/api/**"],
      rules: { "no-console": "off" },
    },
    {
      files: [
        // Next requires pages are exported as default
        "packages/app/pages/**",
        // allow default exports in shadowed files
        "**/gatsby-theme-*/**",
      ],
      rules: { "import/no-default-export": "off" },
    },
    {
      // scripts are ran on developer machines
      files: ["packages/app/scripts/**/*.ts"],
      rules: { "import/no-extraneous-dependencies": "off" },
    },
    {
      files: ["packages/app/{data,src,pages}/**"],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            paths: [
              {
                name: "nom-ts",
                message: "Please import lib/utilityTypes instead.",
              },
              {
                name: "utility-types",
                importNames: ["Assign"],
                message: "Please use Assign from lib/utilityTypes instead.",
              },
            ],
          },
        ],
      },
    },
  ],
};
