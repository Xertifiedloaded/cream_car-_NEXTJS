
/** @type {import('next').NextConfig} */

const nextConfig = {}
require('dotenv').config();

module.exports = nextConfig
module.exports = {
    images: {
      domains: ['res.cloudinary.com'],
    },
    reactStrictMode: true,
  };
