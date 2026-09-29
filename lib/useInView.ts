'use client';

import { useEffect, useRef } from 'react';

// Öğe görünür olunca bir kez data-in="true" ekler; CSS geçişleri buna bağlanır.
export function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { el.dataset.in = 'true'; return; }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.dataset.in = 'true'; io.disconnect(); }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return ref;
}
