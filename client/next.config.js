/** @type {import('next').NextConfig} */



const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
 
}

module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path",
        destination: "http://54.180.175.144:8080/:path",
      },
    ];
  },

};


// import withImages from "next-images";
// modules.exports = withImages({
//   webpack(config, options) {
//     return config;
//   },
// });
// export default nextConfig
module.exports = nextConfig