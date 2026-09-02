import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/products', destination: '/solutions', permanent: true },
      { source: '/products/:slug', destination: '/solutions/:slug', permanent: true },
      { source: '/iiot-platform', destination: '/services/iiot', permanent: true },
      { source: '/technology', destination: '/solutions', permanent: true },
      { source: '/solutions/edge-computing', destination: '/solutions/iiot-gateways', permanent: true },
      { source: '/case-studies', destination: '/industries', permanent: true },
      { source: '/careers', destination: '/about', permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
