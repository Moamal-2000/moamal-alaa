const nextConfig = {
  productionBrowserSourceMaps: false,
  devIndicators: false,
  reactCompiler: true,

  images: {
    qualities: [75, 50],
    formats: ["image/avif", "image/webp"],
    unoptimized: false,
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "moamalalaa.netlify.app" }],
        destination: `https://moamalalaa.com/:path*`,
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
