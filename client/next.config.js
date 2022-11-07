/** @type {import('next').NextConfig} */

module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:path",
  //       destination: "http://54.180.175.144:8080/:path",
  //     },
  //     {
  //       source: "/user/:path",
  //       destination: "http://54.180.175.144:8080/user/:path",
  //     },
  //     {
  //       source: "/post/user/:path",
  //       destination: "http://54.180.175.144:8080/post/user/:path",
  //     },
  //     {
  //       source: "/post/:path",
  //       destination: "http://54.180.175.144:8080/post/:path",
  //     },
  //     {
  //       source: "/answer/:path",
  //       destination: "http://54.180.175.144:8080/answer/:path",
  //     },
  //     {
  //       source: "/answer/user/:path",
  //       destination: "http://54.180.175.144:8080/answer/user/:path",
  //     },
  //     {
  //       source: "/auth/login",
  //       destination: "http://54.180.175.144:8080/auth/login",
  //     },
  //   ];
  // },
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     "/": { page: "/" },
  //     "/users/user": { page: "/users/user" },
  //   };
  // },
};
