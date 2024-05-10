// next.config.mjs
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async headers() {
    const ContentSecurityPolicy = `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com;
      child-src *.youtube.com;
      style-src 'self' 'unsafe-inline';
      font-src 'self';
    `;

    const securityHeaders = [
      {
        key: 'Content-Security-Policy',
        value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
      },
    ];

    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
