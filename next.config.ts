import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration optimized for Vercel deployment
  images: {
    domains: ['cdn.inextlabs.ai'],
  },
  // Prevent hydration mismatches
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Ensure proper SSR
  reactStrictMode: true,
};

export default nextConfig;
