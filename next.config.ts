import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // forces Next.js to run Webpack instead of Turbopack
  experimental: {
    webpackBuildWorker: false,
  },
}

export default nextConfig
