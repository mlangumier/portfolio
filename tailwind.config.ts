import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindcssAnimate from 'tailwindcss-animate';

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '0',
      },
      screens: {
        lg: '1024px',
      },
    },
    fontFamily: {
      sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
    },
    // fontsize: {}
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          hover: 'hsl(var(--accent-hover))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
        },
        tertiary: {
          DEFAULT: 'hsl(var(--tertiary))',
        },
        background: {
          DEFAULT: 'hsl(var(--background))',
        },
        foreground: {
          DEFAULT: 'hsl(var(--foreground))',
          muted: 'hsl(var(--muted-foreground))',
        },
        grey: {
          border: 'hsl(var(--border))',
          shadow: 'hsl(var(--shadow))',
          backdrop: 'hsl(var(--backdrop) / 50)',
        },
      },
      gridTemplateRows: {
        layout: '1fr auto',
      },
      gridTemplateColumns: {
        'header-title-center': 'auto 1fr minmax(0, 2.5rem)',
        'header-title-start': 'auto 1fr',
      },
      boxShadow: {
        'card-25': '4px 4px 4px 0 hsl(var(--shadow) / 0.25)',
        'card-50': '4px 4px 4px 0 hsl(var(--shadow) / 0.50)',
      },
      backdropBlur: {
        xs: '2px',
      },
      // Use keyframes and animations for reusable "fade" and "slide" animations
      // keyframes:{},
      // animations: {},
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
