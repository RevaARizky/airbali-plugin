/**
 * Container Plugin - modifies Tailwind’s default container.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    '../widgets/*.php',
    './src/scss/**/*.scss',
    './src/js/**/*.js',
  ],
  theme: {
    extend: {

    },
  },
}

