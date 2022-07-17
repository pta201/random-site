/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["admin.bebecook.com", "bebecook.vn"],
  },
  // env: {
  //   CONSUMER_KEY: process.env.CONSUMER_KEY,
  //   CONSUMER_SECRET: process.env.CONSUMER_SECRET,
  //   STORE_URL: process.env.STORE_URL,
  // },
};

module.exports = nextConfig;
