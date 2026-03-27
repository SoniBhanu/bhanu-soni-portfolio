import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  
  // Image optimization settings
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Security and optimization
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'], // Keep errors and warnings
    } : false,
  },
  
  // SWC Minification for better compression
  swcMinify: true,
  
  // Strict mode for better development
  reactStrictMode: true,
  
  // Remove X-Powered-By header
  poweredByHeader: false,
  
  // Enable compression
  compress: true,
  
  // Disable ETag generation (optional)
  generateEtags: false,
  
  // Configure webpack for additional protection
  webpack: (config, { isServer, dev }) => {
    // Only apply in production and client-side
    if (!dev && !isServer) {
      // Disable source maps for client bundles
      config.devtool = false;
      
      // Optimize chunk loading
      config.optimization = {
        ...config.optimization,
        minimize: true,
        // Split chunks for better performance
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Vendor chunk for node_modules
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /[\\/]node_modules[\\/]/,
              priority: 10,
            },
            // Common chunk for shared code
            common: {
              name: 'common',
              chunks: 'all',
              minChunks: 2,
              priority: 5,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }
    
    return config;
  },
  
  // Experimental features (optional)
  experimental: {
    // Optimize package imports
    optimizePackageImports: ['lucide-react', 'react-icons', 'framer-motion'],
  },
  
  // Headers for additional security (can also be added via middleware)
  async headers() {
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
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
}

export default nextConfig