/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://hiamps.co',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: [
    '/admin',
    '/admin/*',
    '/api/*',
    '/auth',
    '/auth/*'
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: [
          '/admin',
          '/admin/*',
          '/api/*',
          '/auth',
          '/auth/*'
        ],
      },
    ],
  },
}
