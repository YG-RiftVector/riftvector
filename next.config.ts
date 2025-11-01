import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // tells Next.js to build static HTML
  images: {
    unoptimized: true, // needed for static export
  },
};

export default nextConfig;
