import { defineConfig } from 'next';
import withSentryConfig from '@sentry/nextjs';

const nextConfig = defineConfig({
  reactStrictMode: true,
  // Add other Next.js configurations here
});

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

// Apply Sentry configuration to Next.js configuration
export default withSentryConfig(nextConfig, SentryWebpackPluginOptions);
