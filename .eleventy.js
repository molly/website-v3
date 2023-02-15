const eleventySass = require("eleventy-sass");
const postcss = require("postcss");
const path = require("path");

module.exports = function (eleventyConfig) {
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.addPassthroughCopy({
    "src/assets/fonts": "assets/fonts",
    "src/assets/js": "assets/js",
    "src/assets/images": "assets/images",
    "**/*.webmanifest": "",
  });

  eleventyConfig.addPairedShortcode("postcss", async (code) => {
    const filepath = path.join(__dirname, "src/assets/styles/main.scss");
    return await postcss([
      require("@csstools/postcss-sass"),
      require("postcss-import"),
      require("autoprefixer"),
      require("cssnano"),
    ])
      .process(code, { from: filepath })
      .then((result) => result.css);
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
