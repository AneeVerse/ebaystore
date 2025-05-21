const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com', 
      'res.cloudinary.com',
      'www.aneeverse.com',
      'blog.aneeverse.com',
      'localhost',
      'localhost:3000',
      'localhost:3001',
      'images.pexels.com',
      'images.unsplash.com',
      'i.imgur.com',
      'drive.google.com',
      'lh3.googleusercontent.com',
      'docs.google.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      }
    ],
    unoptimized: true,
    minimumCacheTTL: 60,
  },
  async rewrites() {
    return [
      {
        source: '/dashboard/:path*',
        destination: '/dashboard/:path*',
      },
      {
        source: '/admin/:path*',
        has: [
          {
            type: 'host',
            value: 'www.aneeverse.com',
          },
        ],
        destination: 'https://blog.aneeverse.com/:path*',
      },
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'blog.aneeverse.com',
          },
        ],
        destination: '/studio',
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'blog.aneeverse.com',
          },
        ],
        destination: '/studio/:path*',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  },
  webpack: (config) => {
    // Alias '@' to the 'src' directory for cleaner imports
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  }
};

module.exports = nextConfig; 