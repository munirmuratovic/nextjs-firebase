/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "res.cloudinary.com",
      "images.unsplash.com",
      "pbs.twimg.com",
      "images.pexels.com",
      "randomuser.me",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
