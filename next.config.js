/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/api/cors",
        destination: "/api/cors", // Path to your API route file
      },
    ];
  },
};

module.exports = nextConfig;
