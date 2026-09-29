'use client';

import Image from 'next/image';
import { useEffect, useRef, type CSSProperties } from 'react';
import { asset } from '@/lib/asset';

type Item = { n: string; title: string; img: string; bg: string; titleMax: number; text: string };

const clamp = (v: number) => Math.min(1, Math.max(0, v));
const easeInOutSine = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;

// ≥1000px: dikey kaydırma yatay harekete çevrilir (Salient "horizontal scrolling", easeInOutSine).
// Daha dar ekranlarda kartlar alt alta akar.
export default function HorizontalCards({ items }: { items: Item[] }) {
  const outer = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const o = outer.current, t = track.current;
    if (!o || !t) return;
    const mq = window.matchMedia('(min-width: 1000px) and (prefers-reduced-motion: no-preference)');
    let raf = 0, start = 0, end = 1, maxT = 0;
    const measure = () => {
      if (!mq.matches) return;
      const top = o.getBoundingClientRect().top + window.scrollY;
      start = top - (window.innerHeight - t.offsetHeight) / 2;
      end = start + o.offsetHeight - t.offsetHeight;
      maxT = Math.max(0, t.scrollWidth + 10 - window.innerWidth);
    };
    const update = () => {
      raf = 0;
      if (!mq.matches) { t.style.transform = ''; return; }
      const p = clamp((window.scrollY - start) / Math.max(1, end - start));
      t.style.transform = `translate3d(${-maxT * easeInOutSine(p)}px,0,0)`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    const onResize = () => { measure(); onScroll(); };
    measure(); update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('load', onResize);
    mq.addEventListener('change', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('load', onResize);
      mq.removeEventListener('change', onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={outer} className="hs" style={{ '--n': items.length } as CSSProperties}>
      <div ref={track} className="hs-wrap">
        {items.map((s) => (
          <article key={s.n} className={`hs-card ${s.bg}`}>
            <div className="hs-col hs-col--text">
              <p className="hs-num" aria-hidden="true">{s.n}</p>
              <h3 className="hs-title" style={{ maxWidth: `${s.titleMax}%` }}>{s.title}</h3>
              <p className="hs-desc">{s.text}</p>
            </div>
            <div className="hs-col">
              <div className="hs-media">
                <Image src={asset(s.img)} alt="" fill sizes="(min-width: 1000px) 40vw, 100vw" className="object-cover" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
