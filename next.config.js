/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ws-public.interpol.int"],
  },
};

module.exports = nextConfig;
