/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-mask': "radial-gradient(farthest-side, #0000 70%, #000 72%)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.mask-radial': {
          '-webkit-mask': "radial-gradient(farthest-side, #0000 80%, #000 100%)",
          'mask': "radial-gradient(farthest-side, #0000 80%, #000 100%)",
        },
      });
    },
  ],
};

