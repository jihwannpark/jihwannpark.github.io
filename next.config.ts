import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export so the site can be hosted on GitHub Pages.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
