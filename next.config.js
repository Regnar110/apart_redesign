/** @type {import('next').NextConfig} */
module.exports = {
  typescript: {
    ignoreBuildErrors:true
  },
  reactStrictMode: false,
  images: {
    domains: ['cdn.sanity.io'],
  },
  env: {
    ATLAS_URI: 'mongodb+srv://mateuszwrycza3:587188Ab@cluster0.ttuiuub.mongodb.net/?retryWrites=true&w=majority',
    STRIPE_KEY: "pk_test_51MdCPqGMkOZtRaFAG9gRBW3IlqDrHAR7uWsynRe68IFaMlaaEhV6YLxzJ7vgk97WnIKgymdNkNLNLmkWvqt7ikGq00IFuRdMVq",
    STRIPE_SECRET_KEY: "sk_test_51MdCPqGMkOZtRaFAFREBGilI7NjEpYCx6AqJjB0vwyKbn4e7yNVk3bF9D1Emepu8pQzXJEUpZ0nYW2GHasLiptBR00Xf7QbrUV",
    NEXT_PUBLIC_BASE_URL: "http://localhost:3000",
    NEXT_PUBLIC_SANITY_PROJECT_ID: "8wwxjj5a",
    NEXT_PUBLIC_SANITY_DATASET: "production",
    SANITY_API_TOKEN:"sknGbqvnFVJWCGzpOuNZnjtLSLTdemHHCZlug4i2wfZtRhjWs6jc1ZINQn6IwSWbpDeN9ZlWavjTy6tYCtVBeJsfeviZuGrN5EianCJcwVrcl4x7UHpa9sj7jea7nVCu6VVAFaS3pQE6nGDdmG0h193QGsN3vPEt2SH0TEN7Uu1WSFC7GYkR",
    NEXT_PUBLIC_SANITY_API_VERSION:"2021-10-21",
  },
}
