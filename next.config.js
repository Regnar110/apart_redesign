/** @type {import('next').NextConfig} */
module.exports = {
  typescript: {
    ignoreBuildErrors:true
  },
  reactStrictMode: false,
  images: {
    domains: ['cdn.sanity.io'],
  },
}
