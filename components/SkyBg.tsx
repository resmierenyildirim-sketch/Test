'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { asset } from '@/lib/asset';

// Gökyüzü arka planı: bölüm ekrandan geçerken sayfadan yavaş aşağı kayar (parallax, hız 0.2).
export default function SkyBg() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    const row = el?.parentElement;
    if (!el || !row) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = row.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < -vh || r.top > vh * 2) return;
      el.style.transform = `translate3d(0, ${0.2 * (vh - r.top)}px, 0) scale(1.005)`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div ref={ref} className="sky-bg" aria-hidden="true">
      <Image src={asset('/img/uriel-xtgONQzGgOE.webp')} alt="" fill sizes="100vw" />
    </div>
  );
}
