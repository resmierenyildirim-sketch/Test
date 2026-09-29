// next/image, unoptimized + statik export modunda basePath'i src'ye eklemez; burada elle ekliyoruz.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const asset = (path: string) => `${basePath}${path}`;
