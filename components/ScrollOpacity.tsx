'use client';

import { useEffect, useRef } from 'react';

type Props = { text: string; className?: string };

const DURATION = 450; // her kelimenin açılma süresi (Salient zaman çizelgesi birimi)
const WORD_DELAY = 150;

// Salient "scroll-opacity-reveal": bölüm ekrandan geçerken kelimeler tek tek 0.2 → 1 opaklığa gelir.
export default function ScrollOpacity({ text, className }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  const words = text.split(' ');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLElement>('[data-w]'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      spans.forEach((s) => (s.style.opacity = '1'));
      return;
    }
    const row = el.closest<HTMLElement>('[data-scope]') ?? el;
    const N = spans.length;
    const total = DURATION + (N - 1) * WORD_DELAY;
    let raf = 0, top = 0, speed = 1.9, cushion = 0;
    const calc = () => {
      const vh = window.innerHeight;
      const r = row.getBoundingClientRect();
      top = r.top + window.scrollY;
      const ratio = r.height / vh;
      cushion = 0.05 * vh;
      if (ratio < 0.25 && N < 40) speed = 2.5;
      else {
        speed = Math.max(2 - Math.min(ratio, 1.45), 0.66);
        if (speed < 1.2 || (N < 30 && speed < 1.5)) cushion = 0.25 * vh;
      }
    };
    const update = () => {
      raf = 0;
      const e = 1 + (window.scrollY - (top + cushion)) / window.innerHeight;
      const t = e * total * speed;
      spans.forEach((s, i) => {
        const p = Math.min(1, Math.max(0, (t - i * WORD_DELAY) / DURATION));
        s.style.opacity = String(0.2 + 0.8 * p);
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    const onResize = () => { calc(); onScroll(); };
    calc(); update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('load', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('load', onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <h2 ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} data-w aria-hidden="true" style={{ opacity: 0.2 }}>{w}{i < words.length - 1 ? ' ' : ''}</span>
      ))}
    </h2>
  );
}
