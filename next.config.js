/**
 * @type {import('next').NextConfig}
 * @file contains the next.js configuration
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*', // Match all domains as there is no security risk involved
      },
    ],
  },
};

module.exports = nextConfig;
