/** @type {import('postcss-load-config').Config} */
console.log('[debug] loading apps/web/postcss.config.cjs from', __filename)
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
