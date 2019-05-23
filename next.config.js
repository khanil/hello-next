const withPlugins = require('next-compose-plugins');
const bundleAnalyzer = require('@zeit/next-bundle-analyzer');

const isServerless = process.env.SERVERLESS === 'true';

const nextConfig = {
  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/blog': { page: '/blog' },
    };
  },
  target: isServerless ? 'serverless' : 'server',
};

module.exports = withPlugins(
  [
    [
      bundleAnalyzer,
      {
        analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
        analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
        bundleAnalyzerConfig: {
          server: {
            analyzerMode: 'static',
            reportFilename: '../bundles/server.html',
          },
          browser: {
            analyzerMode: 'static',
            reportFilename: '../.next/bundles/client.html',
          },
        },
      },
    ],
  ],
  nextConfig
);
