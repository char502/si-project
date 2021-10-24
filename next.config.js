/** @type {import('next').NextConfig} */

require('dotenv').config();

module.exports = {
  reactStrictMode: true,
  env: {
    react_app_api_key: process.env.react_app_api_key,
  },
};
