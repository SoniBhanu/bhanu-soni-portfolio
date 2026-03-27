import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'], // Add your image domains
    formats: ['image/avif', 'image/webp'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
}

export default nextConfig;
