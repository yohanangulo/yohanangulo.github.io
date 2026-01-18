import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [{ hostname: 'lh3.googleusercontent.com' }],
  },
  devIndicators: false,
}

export default nextConfig
