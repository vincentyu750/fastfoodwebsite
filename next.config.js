/** @type {import('next').NextConfig} */
const nextConfig = 
{
    async redirects() {
      return [
        {
          source: '/pages',
          destination: '/home',
          permanent: true,
        },
      ];
    },
  };

module.exports = nextConfig
