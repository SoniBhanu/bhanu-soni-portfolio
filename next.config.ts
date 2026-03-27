import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Image optimization - update deprecated domains to remotePatterns
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // React strict mode
  reactStrictMode: true,
  
  // Remove X-Powered-By header
  poweredByHeader: false,
  
  // Enable compression in production
  compress: process.env.NODE_ENV === 'production',
  
  // Remove console logs in production only
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  
  // Disable source maps in production
  productionBrowserSourceMaps: process.env.NODE_ENV !== 'production',
  
  // Turbopack configuration (replaces webpack)
  turbopack: {
    // Enable debug IDs if needed (optional)
    debugIds: process.env.NODE_ENV === 'development',
    
    // Configure resolve aliases if needed
    resolveAlias: {
      // Add any aliases here if needed
    },
    
    // Configure resolve extensions
    resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },
  
  // Headers for security (only in production)
  async headers() {
    if (process.env.NODE_ENV === 'development') {
      return []
    }
    
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig