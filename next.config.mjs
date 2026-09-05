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
};

export default nextConfig;
