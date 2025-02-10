import tailwindcssAnimate from 'tailwindcss-animate';
import defaultTheme from 'tailwindcss/defaultTheme';

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
        xl: '0',
      },
      screens: {
        xl: '1280px',
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
          light: 'hsl(var(--background-light))',
        },
        foreground: {
          DEFAULT: 'hsl(var(--foreground))',
          muted: 'hsl(var(--foreground-muted))',
          dark: 'hsl(var(--foreground-dark))',
        },
        button: {
          foreground: 'hsl(var(--button-foreground))',
          background: 'hsl(var(--button-background))',
          'background-hover': 'hsl(var(--button-background-hover))',
        },
        card: {
          title: 'hsl(var(--card-title))',
          'foreground-muted': 'hsl(var(--card-foreground-muted))',
        },
        border: {
          DEFAULT: 'hsl(var(--border))',
        },
        shadow: {
          DEFAULT: 'hsl(var(--shadow))',
        },
      },
      gridTemplateRows: {
        layout: '1fr auto',
      },
      gridTemplateColumns: {
        'header-title-center': 'auto 1fr minmax(0, 2.5rem)',
        'header-title-start': 'auto 1fr',
        experience: '1fr 0.125rem 1fr',
      },
      backdropBlur: {
        xs: '2px',
      },
      animationDuration: {
        '1500': '1.5s',
      },
    },
  },
  plugins: [tailwindcssAnimate],
  darkMode: 'class',
};

export default config;
