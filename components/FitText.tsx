'use client';

import { Fragment, useLayoutEffect, useRef, type CSSProperties, type ElementType } from 'react';
import { useInView } from '@/lib/useInView';

type Props = {
  children: string;
  as?: 'h1' | 'p';
  className?: string;
  /** true ise harfler tek tek bulanıklıktan çıkar (hero başlığı) */
  letters?: boolean;
  delay?: number;
  /** Sığdırma katsayısı (1 = kutu genişliğine tam) */
  scale?: number;
};

// Metni bulunduğu kutunun genişliğine tam oturtur (Salient "fit text"), harf efektiyle birlikte.
export default function FitText({ children, as = 'p', className, letters = false, delay = 0, scale = 1 }: Props) {
  const inView = useInView<HTMLElement>(0.1);
  const fitRef = useRef<HTMLElement | null>(null);
  const Tag = as as ElementType;

  useLayoutEffect(() => {
    const el = fitRef.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;
    const fit = () => {
      const cs = getComputedStyle(parent);
      const avail = parent.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      el.style.fontSize = '100px';
      const w = el.scrollWidth;
      if (w > 0 && avail > 0) el.style.fontSize = `${(avail / w) * 100 * scale}px`;
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(parent);
    document.fonts?.ready.then(fit);
    return () => ro.disconnect();
  }, [children, scale]);

  const words = children.split(' ');
  const stagger = Math.min(35, Math.max(20, 400 / children.replace(/ /g, '').length));
  let idx = 0;
  return (
    <Tag
      ref={(n: HTMLElement | null) => { fitRef.current = n; (inView as React.MutableRefObject<HTMLElement | null>).current = n; }}
      data-fx={letters ? 'letters' : undefined}
      className={className}
      style={{ display: 'inline-block', whiteSpace: 'nowrap', '--d': delay, '--st': `${stagger}ms` } as CSSProperties}
      aria-label={children}
    >
      {letters
        ? words.map((w, wi) => (
            <Fragment key={wi}>
              <span aria-hidden="true" className="rv-w" style={{ whiteSpace: 'nowrap' }}>
                {[...w].map((ch, ci) => (
                  <span key={ci} className="rv-in" style={{ '--i': idx++ } as CSSProperties}>{ch}</span>
                ))}
              </span>
              {wi < words.length - 1 ? ' ' : null}
            </Fragment>
          ))
        : children}
    </Tag>
  );
}
