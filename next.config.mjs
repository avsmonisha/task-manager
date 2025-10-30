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
  transpilePackages: [
    "@task-manager/ui",
    "@task-manager/utils",
    "@task-manager/types",
  ],
}

export default nextConfig
