'use client';

import { useEffect, useRef } from 'react';
import { asset } from '@/lib/asset';

// Hero arka planı: kaydırdıkça sayfadan yavaş hareket eder (parallax, hız 0.4).
export default function HeroBg() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = Math.min(window.scrollY, window.innerHeight * 1.5);
      el.style.transform = `translate3d(0, ${y * 0.4}px, 0)`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div ref={ref} className="hero-bg" aria-hidden="true">
      <picture>
        <source media="(max-width: 690px)" srcSet={asset('/img/mountains-harbor-mobile.webp')} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset('/img/mountains-harbor.webp')} alt="" fetchPriority="high" decoding="async" />
      </picture>
    </div>
  );
}
