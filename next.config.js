/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.agrawalkhandelwal.com' }],
        destination: 'https://agrawalkhandelwal.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
