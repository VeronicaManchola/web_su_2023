/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  generateBuildId: async () => {
    return 'prod';
  },
};

module.exports = nextConfig;
