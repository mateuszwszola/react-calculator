const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.js', './public/index.html'],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
  ]
};
