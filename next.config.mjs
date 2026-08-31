const nextConfig = {
  devIndicators: false,
  reactCompiler: true,
  productionBrowserSourceMaps: true,

  images: {
    qualities: [100, 75, 50],
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
