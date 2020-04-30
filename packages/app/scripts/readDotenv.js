// @ts-check

const { readFileSync } = require("fs");

/**
 * @param {string} path
 */
function readDotenv(path) {
  return readFileSync(path, { encoding: "utf8" })
    .trim()
    .split("\n")
    .map((s) => s.split("="))
    .reduce((acc, [k, v]) => {
      // eslint-disable-next-line no-undef
      acc[k] = v;
      return acc;
    }, {});
}

module.exports = { readDotenv };
