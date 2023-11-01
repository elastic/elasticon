/** @type {import('next').NextConfig} */
const nextConfig = {
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
  async redirects() {
    return [
      {
        source: "/events/elasticon/public-sector",
        destination: "https://elasticpublicsectorsummit.upgather.com/",
        permanent: true,
      },
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
