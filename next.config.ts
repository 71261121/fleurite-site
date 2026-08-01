import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  serverExternalPackages: ['razorpay'],
  /* config options here */
};

export default nextConfig;
