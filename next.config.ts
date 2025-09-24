import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/juego",
        destination: "/juego/index.html",
      },
      {
        source: "/juego/:path*",
        destination: "/juego/index.html",
      },
    ];
  },
};

export default nextConfig;
