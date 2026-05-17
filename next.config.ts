import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Cloudflare Pages requires unoptimized images (no Node.js image server)
    unoptimized: true,
  },
};

export default nextConfig;
