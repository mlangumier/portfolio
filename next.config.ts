import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/assets/**',
        search: '',
      },
    ],
  },

  // To work with Docker:
  output: 'standalone',
};

export default withNextIntl(nextConfig);
