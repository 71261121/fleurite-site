import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Include private/ (PDF download) in standalone build so the download
  // route's fs.readFileSync(process.cwd()/private/...) works on Vercel.
  // WITHOUT this, paying customers get "Book file not found" (404).
  // Fix per micro_07 BREAKPOINT 2 (2026-08-12, still unfixed).
  outputFileTracingInclude: ["private/**"],
};

export default nextConfig;
