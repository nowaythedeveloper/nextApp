/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // async headers() {
  //   return [
  //     {
  //       source: '/:*',
  //       // source: '/:all*(svg|jpg|png|js)',
  //       locale: false,
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=9999999999, must-revalidate',
  //         },
  //       ],
  //     },
  //   ];
  // },
};