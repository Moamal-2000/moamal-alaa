const nextConfig = {
  devIndicators: false,
  reactCompiler: true,
  productionBrowserSourceMaps: true,

  images: {
    qualities: [100, 75, 50],
    formats: ["image/avif", "image/webp"],
    unoptimized: false,
  },
};

export default nextConfig;
