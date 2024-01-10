/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.contentstack.io",
      }
    ]
  },
  i18n: {
    locales: ["en-US", "pt", "pt-BR"],
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
        source: "/tel-aviv",
        destination: "/",
        permanent: false
      }
    ];
  }
};

module.exports = nextConfig;
