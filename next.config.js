/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // swcMinify is deprecated in Next.js 15+, use compiler option instead
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optional: Add images config if needed
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
}

module.exports = nextConfig