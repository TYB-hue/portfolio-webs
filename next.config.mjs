import { withSentryConfig } from '@sentry/nextjs';

const nextConfig = {
  // Ensure the target is set to 'serverless' for static exporting
  target: 'serverless',

  // Your Next.js configuration options
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withSentryConfig(nextConfig, {
  // Sentry configuration options
  org: "me-bdw",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
