const { withKumaUI } = require("@kuma-ui/next-plugin");
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = withKumaUI(nextConfig);
