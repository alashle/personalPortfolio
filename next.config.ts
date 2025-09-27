import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Skip ESLint errors during `next build` so deploys don't fail
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
