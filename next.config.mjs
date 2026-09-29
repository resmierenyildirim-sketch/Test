// GitHub Pages proje sitesi alt yolda yayınlanır (kullanici.github.io/<repo>/).
// Workflow bu değeri ayarlar; yerelde ve Vercel/Netlify'da boş kalır.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: { unoptimized: true }, // görseller public/img altında önceden WebP'ye çevrildi
};
export default nextConfig;
