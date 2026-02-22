/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || "";
const nextConfig = {
  output: "export",
  basePath,
  // Relative asset prefix so CSS/JS resolve correctly on GitHub Pages (e.g. .../ai-workshop/)
  assetPrefix: basePath ? "./" : "",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
