import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // no output: 'export'
  experimental: {
    appDir: true,  // if using the App router
  },
  images: {
    unoptimized: false,  // if you want to use built‑in optimization
  },
};

export default nextConfig;
