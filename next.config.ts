import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   /* config options here */
   reactStrictMode: true,
   images: {
      unoptimized: true,
   },
   devIndicators: {
      buildActivity: false,
   },
   output: "export",
};

export default nextConfig;
