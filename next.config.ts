import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // static HTML export for GitHub Pages
  basePath: isProd ? "/iNextLabs" : "",
  assetPrefix: isProd ? "/iNextLabs/" : "",
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
};

export default nextConfig;
