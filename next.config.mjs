/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.aeyra.shopdibz.com',
          },
        ],
        destination: 'https://aeyra.shopdibz.com/:path*',
        permanent: true,
      },
    ];
  },
};



export default nextConfig;
