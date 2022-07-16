/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["admin.bebecook.com", "bebecook.vn"],
  },
};

module.exports = nextConfig;
