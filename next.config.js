/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: '/portfolio', // <-- crucial for GitHub Pages!
  trailingSlash: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    domains: ['placeholder.svg'],
    unoptimized: true,
  },

  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
