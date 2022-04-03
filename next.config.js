/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  api: {
    bodyParser: false,
  },
}

module.exports = nextConfig
