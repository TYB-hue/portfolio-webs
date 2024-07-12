import { withSentryConfig } from '@sentry/nextjs';

const nextConfig = {
  // Your Next.js configuration options
  typescript: {
    ignoreBuildErrors: true,
  },
  target: 'experimental-serverless-trace', // Replace with appropriate target option
};

const SentryWebpackPluginOptions = {
  authToken: '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', // Replace with your actual Sentry auth token
  org: 'me-bdw',
  project: 'javascript-nextjs',
  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
};

export default withSentryConfig(nextConfig, SentryWebpackPluginOptions);
