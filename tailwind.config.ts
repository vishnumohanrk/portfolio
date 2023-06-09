import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const twConfig: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },

      transitionTimingFunction: {
        DEFAULT: 'linear',
      },

      borderColor: ({ theme }) => ({
        DEFAULT: theme('colors.neutral.700'),
      }),

      colors: {
        link: 'var(--color)',
      },
    },
  },

  plugins: [],
};

export default twConfig;
