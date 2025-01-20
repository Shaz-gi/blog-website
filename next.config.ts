import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn.sanity.io'], // Add 'cdn.sanity.io' to the list of allowed domains
  },
};

export default nextConfig;
