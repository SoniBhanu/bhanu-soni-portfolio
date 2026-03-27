import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/_next/',
        '/api/',
        '/private/',
        '/*.json$',
        '/*.map$',
      ],
    },
    sitemap: 'https://bhanu-soni-portfolio.vercel.app/sitemap.xml',
    host: 'https://bhanu-soni-portfolio.vercel.app/',
  }
}