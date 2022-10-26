/** @type {import('next').NextConfig} */

const API_KEY = "d042f1305cd0a41beff101e6db9033dc";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
  return [{
    source: "/api/movies",
    destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  }]
  }
}



module.exports = nextConfig
