import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/gallery.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/gallery",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact.php",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/about.php",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.lawcraftadvocates.com" }],
        destination: "https://lawcraftadvocates.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
