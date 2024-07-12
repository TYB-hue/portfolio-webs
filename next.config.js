const withSentryConfig = require('@sentry/nextjs').withSentryConfig;

const nextConfig = {
  reactStrictMode: true,
  // Add other Next.js configurations here
};

const SentryWebpackPluginOptions = {
  authToken: 'YOUR_SENTRY_AUTH_TOKEN', // Replace with your actual Sentry auth token
  org: 'me-bdw',
  project: 'javascript-nextjs',
  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
};

// Apply Sentry configuration to Next.js configuration
module.exports = withSentryConfig(nextConfig, SentryWebpackPluginOptions);
