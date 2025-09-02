/** @type {import('tailwindcss').Config} */
module.exports = {
  /**
   * Content paths
   * Motive:
   *  - Tell Tailwind where to look for class usage.
   *  - Added './index.html' for Vite projects (classes may live there).
   */
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      /**
       * Brand colors
       * 'firefly': dark background color for sections/cards.
       * Contrast: works best with white/light text.
       */
      colors: {
        'firefly': '#091421',
      }
    },

    /**
     * Custom breakpoints
     * Strategy:
     *  - Fine-grained control at small sizes (xxs, xs, s).
     *  - Standard Tailwind defaults (sm, md, lg, xl, 2xl).
     *  - Extra large screens for wide layouts (3xl, 4xl, 5xl).
     */
    screens: {
      'xxs': '375px',
      'xs': '390px',
      's': '430px',

      'sm': '640px',   // Small devices
      'md': '768px',   // Tablets
      'lg': '1024px',  // Laptops
      'xl': '1280px',  // Desktops

      '2xl': '1440px', // Widescreen laptops
      '3xl': '1536px', // Large monitors
      '4xl': '1920px', // Full HD
      '5xl': '1930px', // Ultra-wide
    }
  },

  /**
   * Plugins
   * Empty for now.
   * Can add official plugins like '@tailwindcss/forms' or typography.
   */
  plugins: [],
}