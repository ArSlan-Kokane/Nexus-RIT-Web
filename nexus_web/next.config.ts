import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Enable SpeedInsights for performance monitoring
    instrumentationHook: true,
  },
};

export default nextConfig;
