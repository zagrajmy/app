module.exports = {
  title: "zagrajmy",
  typescript: true,
  // begin a workaround to resolve docs from other packages
  // oh wow, this is so ugly
  // see https://github.com/doczjs/docz/blob/master/core/docz-core/src/lib/Entries.ts#L20-L26
  src: ".",
  files: ["../app/src/**/*.docs.mdx", "./src/**/*.mdx"],
  // end the workaround
  debug: true,
};
