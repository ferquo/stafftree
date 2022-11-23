const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  experimental: { appDir: true },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  publicRuntimeConfig: {
    apiURL: 'http://stafflink-be.westeurope.cloudapp.azure.com',
  },
});
