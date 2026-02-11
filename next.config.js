/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  images: {
    domains: ["images.unsplash.com", "cdn.pixabay.com", "c.pxhere.com"],
  },
};

module.exports = nextConfig;
