/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}",
  "./src/app/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    animation: {
      'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },

    backgroundImage: {
      'conic-spinner': "conic-gradient(currentColor 20%, transparent)",
    },
  },
};
export const plugins = [
  function ({ addUtilities }) {
    addUtilities({
      '.mask-radial': {
        '-webkit-mask': "radial-gradient(farthest-side, #0000 80%, #000 100%)",
        'mask': "radial-gradient(farthest-side, #0000 80%, #000 100%)",
      },
    });
  },
];

