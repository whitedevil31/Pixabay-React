const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
module.exports = {
  plugins: [
    tailwindcss("./tailwind.js"),
    autoprefixer,
    require("@fullhuman/postcss-purgecss")({
      content: ["./src/*.js", "./public/index.html"],
      defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    }),
  ],
};
