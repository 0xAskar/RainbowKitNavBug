const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const prod = process.env.NODE_ENV === 'production';
const withPWA = require('next-pwa')({
  dest: 'public',
  mode: 'production',
  disable: !prod
});

const nextConfig = {
  transpilePackages: ['lightweight-charts', 'fancy-canvas'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        crypto: false,
        https: false,
        http: false,
        os: false,
        path: false,
        console: false,
        lodash: false,
      };
    }
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;

    return config;
  },
  images: {
    domains: [
      'pro.opensea.io', 'blur.io', 'godid.io', "pbs.twimg.com", "abs.twimg.com",
      // Add the rest of your domains here...
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = withPWA(withBundleAnalyzer(nextConfig));
