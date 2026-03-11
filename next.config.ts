import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "http",
        hostname: "dandywebsolution.com",
      },
      {
        protocol: "https",
        hostname: "www.lambertgroupproductions.com",
      },
      {
        protocol: "https",
        hostname: "www.ikea.com",
      },
    ],
  },
};

export default nextConfig;
