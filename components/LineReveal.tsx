'use client';

import { Fragment, type CSSProperties, type ElementType } from 'react';
import { useInView } from '@/lib/useInView';

type Props = {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
  className?: string;
  delay?: number; // ms
  /** lines: maskeli kelime yükselişi · blur-bottom: bulanıklıktan çıkma */
  fx?: 'lines' | 'blur-bottom';
};

// Kelimeleri span'lara bölüp sırayla açar (Salient "nectar-split-heading" efektleri).
export default function LineReveal({ text, as = 'p', className, delay = 0, fx = 'lines' }: Props) {
  const ref = useInView<HTMLElement>(0.3);
  const Tag = as as ElementType;
  const words = text.split(' ');
  return (
    <Tag ref={ref} data-fx={fx} className={className} style={{ '--d': delay } as CSSProperties} aria-label={text}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span aria-hidden="true" className="rv-w">
            {fx === 'lines' ? (
              <span className="rv-mask"><span className="rv-in" style={{ '--i': i } as CSSProperties}>{w}</span></span>
            ) : (
              <span className="rv-in" style={{ '--i': i } as CSSProperties}>{w}</span>
            )}
          </span>
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </Tag>
  );
}
