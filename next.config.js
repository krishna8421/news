/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
  },
  images: {
    domains: ["avatars.githubusercontent.com", "source.unsplash.com"],
  },
};

module.exports = nextConfig;
