const fs = require("fs");
const postcss = require("postcss");
const path = require("path");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPassthroughCopy({
    "src/assets/fonts": "assets/fonts",
    "src/assets/js": "assets/js",
    "src/assets/images": "assets/images",
    "src/site.webmanifest": "",
    "node_modules/@fortawesome/fontawesome-free":
      "assets/fonts/fontawesome-free",
  });

  eleventyConfig.addFilter("sortBlogs", (posts) => {
    return posts.sort((a, b) => {
      const authorA = a.author || a.text;
      const authorB = b.author || b.text;

      return authorA.localeCompare(authorB);
    });
  });

  // Render CSS inline
  eleventyConfig.addShortcode("postcss", async (filename) => {
    const filepath = path.join("src/assets/styles", filename);
    const css = await fs.promises.readFile(filepath);
    return await postcss([
      require("@csstools/postcss-sass"),
      require("postcss-import"),
      require("autoprefixer"),
      require("cssnano"),
    ])
      .process(css, { from: filepath })
      .then((result) => {
        return result.css;
      })
      .catch((err) => {
        console.error(err);
      });
  });

  eleventyConfig.setNunjucksEnvironmentOptions({
    trimBlocks: true,
    lstripBlocks: true,
  });

  eleventyConfig.setServerOptions({
    module: "@11ty/eleventy-server-browsersync",
    middleware: function (req, res, next) {
      res.setHeader("Access-Control-Allow-Origin", "*");
      next();
    },
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
