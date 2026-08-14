import { getOldDomainRedirects } from "./src/lib/getRedirects.mjs";

const nextConfig = {
  devIndicators: false,
  reactCompiler: true,
  productionBrowserSourceMaps: true,
  images: {
    qualities: [100],
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },

  async redirects() {
    return [...getOldDomainRedirects()];
  },
};

export default nextConfig;
