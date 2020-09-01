// @ts-check

/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  extends: "@zagrajmy/eslint-config",
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
        // Gatsby pages are exported as default
        "packages/docs/src/pages/**",
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
    {
      files: ["packages/app/test/**/*.{js,ts}", "*.docs.tsx"],
      rules: {
        // we don't want to install cypress
        // in production builds
        "import/no-extraneous-dependencies": "off",
        "global-require": "off",
        "no-console": "off",
      },
    },
  ],
};

module.exports = config;
