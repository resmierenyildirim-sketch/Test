'use client';

import { Fragment, type CSSProperties, type ElementType } from 'react';
import { useInView } from '@/lib/useInView';

type Props = {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
  className?: string;
  delay?: number; // ms
};

// Kelimeleri maskeli span'lara bölüp sırayla aşağıdan yukarı açar.
export default function LineReveal({ text, as = 'p', className, delay = 0 }: Props) {
  const ref = useInView<HTMLElement>(0.3);
  const Tag = as as ElementType;
  const words = text.split(' ');
  return (
    <Tag ref={ref} data-reveal="lines" className={className} style={{ '--d': delay } as CSSProperties} aria-label={text}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span aria-hidden="true" className="lr-mask">
            <span className="lr-word" style={{ '--i': i } as CSSProperties}>{w}</span>
          </span>
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </Tag>
  );
}
