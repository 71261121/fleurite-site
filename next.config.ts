import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  serverExternalPackages: ['razorpay', 'pdfkit'],
  /* config options here */
};

export default nextConfig;
