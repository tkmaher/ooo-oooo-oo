/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Recommended for static exports to avoid issues with image optimization
  },
};

module.exports = nextConfig;