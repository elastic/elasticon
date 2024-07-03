/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX,
  reactStrictMode: true,
  basePath: "/events/elasticon",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.contentstack.io",
      }
    ]
  },
  i18n: {
    locales: ["en-US", "pt-BR"],
    defaultLocale: "en-US",
  },
  async redirects() {
    return [
      {
        source: "/global",
        destination: "/",
        permanent: true,
      },
      {
        source: "/bangalore",
        destination: "/bengaluru",
        permanent: true,
      },
      {
        source: "/sao-paulo",
        destination: "/",
        permanent: true,
      },
      {
        source: "/sao-paulo-pt",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tel-aviv",
        destination: "/",
        permanent: true,
      },
      {
        source: "/chicago",
        destination: "/",
        permanent: true,
      },
      {
        source: "/frankfurt",
        destination: "/",
        permanent: true,
      },
      {
        source: "/toronto",
        destination: "/",
        permanent: true,
      },

    ];
  }
};

module.exports = nextConfig;
