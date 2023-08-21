/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/events/elasticon",
  async redirects() {
    return [
      {
        source: "/global",
        destination: "/",
        permanent: true,
      },
    ];
  }
};

module.exports = nextConfig;
