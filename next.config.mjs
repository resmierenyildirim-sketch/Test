/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // görseller public/img altında önceden WebP'ye çevrildi
};
export default nextConfig;
