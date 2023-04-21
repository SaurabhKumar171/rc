const plugins = [
  require('tailwindcss'),
  require('autoprefixer')
  // any other PostCSS plugins you may want to include
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(require('cssnano'));
}

module.exports = {
  plugins,
};

