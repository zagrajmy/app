/**
 * replaces monorepo package paths in `config.overrides`
 *
 * @param {import("eslint").Linter.Config} eslintConfig
 * @param {string} packageDirectoryName
 * @param {string} packagesDirectoryName
 * @returns {import("eslint").Linter.ConfigOverride[]}
 */
function replacePackagePaths(
  eslintConfig,
  packageDirectoryName,
  packagesDirectoryName = "packages"
) {
  return eslintConfig.overrides
    .map((o) => {
      const files = Array.isArray(o.files) ? o.files : [o.files];
      const currentPackagePath = `${packagesDirectoryName}/${packageDirectoryName}`;
      const otherPackageRegex = new RegExp(
        `${packagesDirectoryName}/(?!${packageDirectoryName})`
      );

      return {
        ...o,
        files: files
          .map((fileGlob) => {
            if (fileGlob.includes(currentPackagePath)) {
              return fileGlob
                .replace(currentPackagePath, "")
                .replace(/^\//, "");
            }
            if (otherPackageRegex.test(fileGlob)) {
              return null;
            }
            return fileGlob;
          })
          .filter(Boolean),
      };
    })
    .filter((override) => override.files.length > 0);
}

module.exports = { replacePackagePaths };
