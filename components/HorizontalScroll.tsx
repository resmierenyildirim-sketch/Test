'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { asset } from '@/lib/asset';
import { panels } from '@/lib/panels';


// Dikey kaydırmayı yatay harekete çevirir (sticky + scroll ilerlemesi).
export default function HorizontalScroll() {
  const outer = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const o = outer.current, t = track.current;
    if (!o || !t) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = o.offsetHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, -o.getBoundingClientRect().top / max)) : 0;
      t.style.transform = `translate3d(${-p * Math.max(0, t.scrollWidth - (t.parentElement?.clientWidth ?? window.innerWidth))}px,0,0)`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section ref={outer} className="hs-outer relative hidden bg-neutral-950 text-white md:block" style={{ height: '320vh' }}>
      <div className="hs-sticky sticky top-0 flex h-screen items-center overflow-hidden">
        <div ref={track} className="hs-track flex w-max items-stretch gap-5 px-6 will-change-transform md:px-[7.5vw]">
          <div className="relative flex h-[70vh] w-[85vw] shrink-0 flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-800 via-neutral-900 to-black p-8 md:w-[40vw] md:p-12">
            <div className="absolute -right-24 -top-24 size-96 rounded-full bg-accent/30 blur-3xl" />
            <h2 className="relative text-5xl font-light leading-none tracking-tight md:text-7xl">Built for clarity</h2>
          </div>
          {panels.map((p) => (
            <article key={p.title} className="flex h-[70vh] w-[85vw] shrink-0 flex-col overflow-hidden rounded-2xl bg-neutral-900 md:w-[40vw]">
              <div className="relative min-h-0 flex-1">
                <Image src={asset(p.img)} alt="" fill sizes="(min-width:768px) 40vw, 85vw" className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-normal">{p.title}</h3>
                <p className="mt-3 opacity-70">{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
