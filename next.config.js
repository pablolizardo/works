// next.config.js
module.exports = {
  images: {
    domains: ['images.ctfassets.net'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compress: true,
  cleanDistDir: false,
  swcMinify: false,
  experimental: {
    esmExternals: false,
  },
  reactStrictMode: true,
};
