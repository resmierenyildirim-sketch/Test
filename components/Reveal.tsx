'use client';

import type { CSSProperties, ReactNode } from 'react';
import { useInView } from '@/lib/useInView';

type Props = {
  children: ReactNode;
  effect?: 'fade-up' | 'zoom';
  delay?: number; // ms
  className?: string;
};

export default function Reveal({ children, effect = 'fade-up', delay = 0, className }: Props) {
  const ref = useInView<HTMLDivElement>();
  return (
    <div ref={ref} data-reveal={effect} className={className} style={{ '--d': delay } as CSSProperties}>
      {children}
    </div>
  );
}
