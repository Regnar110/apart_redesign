/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['cdn.sanity.io'],
  },
  env: {
    ATLAS_URI: 'mongodb+srv://mateuszwrycza3:587188Ab@cluster0.ttuiuub.mongodb.net/?retryWrites=true&w=majority',
    STRIPE_KEY: "pk_test_51MdCPqGMkOZtRaFAG9gRBW3IlqDrHAR7uWsynRe68IFaMlaaEhV6YLxzJ7vgk97WnIKgymdNkNLNLmkWvqt7ikGq00IFuRdMVq",
    STRIPE_SECRET_KEY: "sk_test_51MdCPqGMkOZtRaFAFREBGilI7NjEpYCx6AqJjB0vwyKbn4e7yNVk3bF9D1Emepu8pQzXJEUpZ0nYW2GHasLiptBR00Xf7QbrUV"
  },
}
