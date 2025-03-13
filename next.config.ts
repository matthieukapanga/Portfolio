import { withSentryConfig } from "@sentry/nextjs";
import { output } from "framer-motion/client";
import type { NextConfig } from "next";

const nextConfig = {
  // ✅ Your Next.js config goes here
  eslint: {
    ignoreDuringBuilds: true, // 🔥 Skip ESLint errors during build
  },
  output: "export",
};

export default withSentryConfig(nextConfig, {
  // 🎯 Sentry settings
  org: "jsm-nqj",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  reactComponentAnnotation: {
    enabled: true,
  },
  tunnelRoute: "/monitoring",
  disableLogger: true,
  automaticVercelMonitors: true,
});
