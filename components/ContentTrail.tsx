'use client';

import { useEffect, useRef } from 'react';

type Props = { texts: string[]; colors: string[]; frequency?: number; duration?: number };

// Salient "content trail": imleç bölümün üzerinde gezdikçe arkasında renkli etiketler bırakır.
export default function ContentTrail({ texts, colors, frequency = 85, duration = 1200 }: Props) {
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = box.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let last = { x: 0, y: 0 };
    let color = 0;
    const live: HTMLElement[] = [];

    const spawn = (x: number, y: number) => {
      const pill = document.createElement('div');
      pill.className = 'trail-pill';
      pill.textContent = texts[Math.floor(Math.random() * texts.length)];
      pill.style.backgroundColor = colors[color % colors.length];
      color += 1;
      pill.style.left = `${x}px`;
      pill.style.top = `${y}px`;
      el.appendChild(pill);
      live.push(pill);
      if (live.length > 100) live.shift()?.remove();

      const rot = Math.random() * 40 - 20;
      const total = duration + 1000; // giriş (duration) + çıkış (1000ms)
      const base = `translate(-50%, -50%) rotate(${rot}deg)`;
      // Ölçek: 0 → 1 (swiftOut), sonra 1 → 0 (easeOutQuart)
      const anim = pill.animate(
        [
          { transform: `${base} scale(0)`, offset: 0, easing: 'cubic-bezier(0, .2, .2, 1)' },
          { transform: `${base} scale(1)`, offset: duration / total, easing: 'cubic-bezier(.25, 1, .5, 1)' },
          { transform: `${base} scale(0)`, offset: 1 },
        ],
        { duration: total, fill: 'both' },
      );
      // Opaklık: 300ms'de açılır, çıkışta 700ms gecikmeyle 300ms'de kapanır.
      pill.animate(
        [
          { opacity: 0, offset: 0, easing: 'cubic-bezier(.215, .61, .355, 1)' },
          { opacity: 1, offset: 300 / total },
          { opacity: 1, offset: (duration + 700) / total, easing: 'cubic-bezier(.215, .61, .355, 1)' },
          { opacity: 0, offset: 1 },
        ],
        { duration: total, fill: 'both' },
      );
      anim.onfinish = () => {
        pill.remove();
        const i = live.indexOf(pill);
        if (i >= 0) live.splice(i, 1);
      };
    };

    const move = (clientX: number, clientY: number) => {
      const r = el.getBoundingClientRect();
      const x = clientX - r.left, y = clientY - r.top;
      if (x < 0 || y < 0 || x > r.width || y > r.height) return;
      if (Math.hypot(x - last.x, y - last.y) > frequency) {
        spawn(x, y);
        last = { x, y };
      }
    };
    const onMouse = (e: MouseEvent) => move(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => { const t = e.touches[0]; if (t) move(t.clientX, t.clientY); };
    window.addEventListener('mousemove', onMouse, { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('touchmove', onTouch);
      live.forEach((p) => p.remove());
    };
  }, [texts, colors, frequency, duration]);

  return <div ref={box} className="cta-trail" aria-hidden="true" />;
}
