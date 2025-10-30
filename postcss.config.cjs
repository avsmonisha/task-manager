/** Root-level PostCSS config to ensure PostCSS/Tailwind is picked up when tools run from the repo root. */
module.exports = {
  plugins: {
    // Point to the web app's Tailwind config so the same setup is used.
    tailwindcss: { config: './apps/web/tailwind.config.js' },
    autoprefixer: {},
  },
}
