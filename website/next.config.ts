import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  cleanDistDir: true,
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true /* disable eslint on build */,
  },
}

export default nextConfig
