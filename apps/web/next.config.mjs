import withTM from 'next-transpile-modules'

const withTranspile = withTM([
  '@task-manager/ui',
  '@task-manager/utils',
  '@task-manager/types',
])

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    serverActions: true,
  },
}

export default withTranspile(nextConfig)
