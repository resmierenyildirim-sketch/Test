# Harbor – Next.js (statik)

Salient "Harbor" demosunun Next.js (App Router) + React + Tailwind CSS v4 ile yeniden yazılmış, tamamen statik sürümü.

```bash
npm install
npm run dev      # geliştirme
npm run build    # statik çıktı: ./out
```

- `output: 'export'` ile `out/` klasörü herhangi bir statik hostinge (Netlify, Vercel, Cloudflare Pages, cPanel) yüklenebilir.
- Görseller `public/img` altında önceden WebP'ye çevrildi (~4.5 MB → ~0.9 MB).
- Metinler `components/` içindeki dosyalardan düzenlenir. Demo görselleri ve metinleri kendi içeriğinle değiştir.
