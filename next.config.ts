import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};
module.exports = {
  images: {
    domains: ['localhost', 'https://heroic-beauty-85276b92ee.strapiapp.com/'], // Add your Strapi domain
  },
};


export default nextConfig;
