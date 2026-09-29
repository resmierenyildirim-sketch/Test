'use client';

import { useEffect, useRef, type ElementType } from 'react';

type Props = { text: string; className?: string; as?: 'h2' | 'p' };

// Kaydırdıkça kelimeler tek tek belirginleşir.
export default function ScrollFill({ text, className, as = 'h2' }: Props) {
  const ref = useRef<HTMLElement>(null);
  const Tag = as as ElementType;
  const words = text.split(' ');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLElement>('[data-w]'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      spans.forEach((s) => (s.style.opacity = '1'));
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.9 - el.getBoundingClientRect().top) / (vh * 0.55)));
      spans.forEach((s, i) => {
        s.style.opacity = String(0.3 + 0.7 * Math.min(1, Math.max(0, p * spans.length - i)));
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} data-w aria-hidden="true" style={{ opacity: 0.3 }}>{w}{i < words.length - 1 ? ' ' : ''}</span>
      ))}
    </Tag>
  );
}
