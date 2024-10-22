import * as Sentry from '@sentry/nuxt';

Sentry.init({
  release: "eralpozcandev@1.0.0", // This should be the version of your application
  dsn: process.env.SENTRY_DSN,
  // Tracing
  // We recommend adjusting this value in production, or using a tracesSampler for finer control.
  tracesSampleRate: 0.3, // Capture 100% of the transactions
});