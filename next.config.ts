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
        source: "/civil-law.php",
        destination: "/practice/civil-litigation-appeals",
        permanent: true,
      },
      {
        source: "/dispute-resolution-litigation.php",
        destination: "/practice/civil-litigation-appeals",
        permanent: true,
      },
      {
        source: "/court-marriage.php",
        destination: "/practice/family-matrimonial-law",
        permanent: true,
      },
      {
        source: "/documentation.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/private-equity-investment-funds.php",
        destination: "/practice/startup-investment-advisory",
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
