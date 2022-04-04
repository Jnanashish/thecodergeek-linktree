/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  api: {
    bodyParser: false,
  },
  env: {
    PASSWORD: process.env.PASSWORD,
    EMAIL: process.env.EMAIL,
  }
}

module.exports = nextConfig
