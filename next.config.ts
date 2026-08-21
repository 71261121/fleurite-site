import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Include private/ (the product PDF) in the standalone build so the download
  // route's fs read of process.cwd()/private/... works in production.
  // WITHOUT this, paying customers get "Book file not found" (404).
  //
  // The correct key is `outputFileTracingIncludes` (plural) and it maps a route
  // to the globs that route needs. The previous singular spelling
  // (`outputFileTracingInclude`) was silently ignored by Next and then failed
  // type checking, so the PDF was never traced into the build at all.
  outputFileTracingIncludes: {
    "/api/download": ["private/**"],
  },
};

export default nextConfig;
