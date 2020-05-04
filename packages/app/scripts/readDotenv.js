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
    .reduce(
      /**
       * @param {Record<string, string | undefined>} acc
       */
      (acc, [k, v]) => {
        acc[k] = v;
        return acc;
      },
      {}
    );
}

module.exports = { readDotenv };
