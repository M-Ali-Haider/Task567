/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "vannilla-js-basic-project-28-wikipedia.netlify.app",
      },
    ],
  },
};

export default nextConfig;
