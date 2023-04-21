module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    // any other PostCSS plugins you may want to include
  ]
}
