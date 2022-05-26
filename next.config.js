/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' embed.twitch.tv;
  child-src ;
  style-src 'self';
  font-src 'self';  
`

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['static-cdn.jtvnw.net'],
  },
  headers: ContentSecurityPolicy,
}

module.exports = nextConfig
