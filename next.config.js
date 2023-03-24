/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['cdn.sanity.io'],
  },
  env: {
    ATLAS_URI: 'mongodb+srv://mateuszwrycza3:587188Ab@cluster0.ttuiuub.mongodb.net/?retryWrites=true&w=majority',
  },
}
