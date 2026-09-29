# Harbor – Next.js (statik)

Salient "Harbor" demosunun Next.js (App Router) + React + Tailwind CSS v4 ile yeniden yazılmış, tamamen statik sürümü.
Görünüm ve kaydırma davranışları orijinal temadan ölçülerek birebir uyarlanmıştır (1920 → 390 px arası).

```bash
npm install
npm run dev      # geliştirme
npm run build    # statik çıktı: ./out
npm run lint     # tsc --noEmit
```

- `output: 'export'` ile `out/` klasörü herhangi bir statik hostinge (GitHub Pages, Netlify, Vercel, Cloudflare Pages, cPanel) yüklenebilir.
- GitHub Pages'te `main` dalına yapılan her push `.github/workflows/pages.yml` ile yayınlanır (`NEXT_PUBLIC_BASE_PATH=/<repo>`).
- Görseller `public/img` altında WebP olarak durur (hero ve gökyüzü orijinal çözünürlükte, hero için ayrıca mobil kadraj).

## Yapı

| Klasör | İçerik |
| --- | --- |
| `lib/content.ts` | **Tüm metinler, menü, fiyatlar, yorumlar** – içeriği (ileride bir CMS/API'den) buradan besle |
| `app/globals.css` | Tasarım ölçüleri: tipografi ölçeği, boşluklar, tüm bölümlerin stilleri |
| `components/SiteChrome.tsx` | Üst şerit + menü + mobil menü (sayfayı sola iterek açılır) |
| `components/Hero*.tsx`, `About`, `Services`, `Points`, `Stats`, `TestimonialDeck`, `Pricing`, `Cta`, `Footer` | Sayfa bölümleri |
| `components/HorizontalCards.tsx` | Servis kartlarının yatay kayması (≥1000px, `easeInOutSine`) |
| `components/TestimonialDeck.tsx` | Üst üste binen yorum kartları (Salient "layered card reveal") |
| `components/ScrollOpacity.tsx` | Kaydırdıkça kelime kelime dolan başlık |
| `components/ContentTrail.tsx` | CTA bölümünde imleci izleyen etiketler |
| `components/AnimatedGradient.tsx` | Footer'daki simplex gürültülü hareketli gradient |

## İletişim sayfası (`/contact`)

- Orijinal temanın Contact sayfası birebir uyarlandı; tüm "Book a call / Contact / Learn More" bağlantıları buraya gider.
- Form doğrulaması (zorunlu alanlar, e-posta biçimi) orijinaldeki gibi çalışır. Statik sitede sunucu olmadığı için:
  - `NEXT_PUBLIC_CONTACT_ENDPOINT` tanımlıysa (ör. Formspree adresi) form oraya JSON olarak gönderilir,
  - tanımlı değilse e-posta uygulaması hazır mesajla açılır (`mailto:`).
- Metinler ve alanlar `lib/content.ts` içindeki `contact` bölümündedir.

## Sayfa geçişi

Ana sayfa ↔ İletişim arasında orijinal temadaki gibi tarayıcının **View Transition**'ı çalışır: yeni sayfa sağdan sola yumuşak kenarlı bir wipe ile açılır (1.2 sn), üstüne hafif blur eklendi.
Ayarlar `app/globals.css` içindeki "Sayfa geçişi" bölümündedir. Bunun çalışması için sayfalar arası bağlantılar bilerek tam sayfa gezinmesidir (`components/SmartLink.tsx`); `next/link` kullanılmaz.
Chrome/Edge ve Safari 18.2+ animasyonu gösterir, desteklemeyen tarayıcılarda geçiş anlık olur. `prefers-reduced-motion` açıksa animasyon kapanır.

## Duyarlı ölçekleme

Masaüstünde (≥1000px) yazı boyutları `(genişlik + 160) / 1600` katsayısıyla ölçeklenir, tablette (691–999px) ve telefonda (≤690px) sabittir.
Bu değerler `app/globals.css` başındaki `--fs-*` değişkenlerindedir.
