import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/LUMORA",
  assetPrefix: "/LUMORA/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
