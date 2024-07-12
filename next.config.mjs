import { withSentryConfig } from '@sentry/nextjs';

const nextConfig = {
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
