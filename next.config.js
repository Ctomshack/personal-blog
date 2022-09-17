/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.graphcms.com','media.graphassets.com'],
  }
}

module.exports = nextConfig
