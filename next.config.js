/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
  },

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: '@import "variables.scss";',
  },
};

module.exports = nextConfig;
