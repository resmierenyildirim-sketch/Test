'use client';

import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { brand, contactHref, content, nav } from '@/lib/content';
import RevealLink from './RevealLink';
import SmartLink from './SmartLink';
import Ticker from './Ticker';

type Lenis = { stop: () => void; start: () => void };

type Props = {
  children: ReactNode;
  /** Ana sayfa mı? (#bölüm bağlantıları sayfa içi kayar; diğer sayfalarda "/#bölüm" olur) */
  home?: boolean;
  /** Üstteki kayan yazılı bant (yalnızca ana sayfada) */
  ticker?: boolean;
};

// Üst bant + menü + mobil menü (sayfayı sola iterek açılır) ve tüm sayfayı saran kabuk.
export default function SiteChrome({ children, home = true, ticker = true }: Props) {
  const [top, setTop] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [tone, setTone] = useState<'light' | 'dark'>(home ? 'light' : 'dark');
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);

  const href = (h: string) => (h.startsWith('#') && !home ? `/${h}` : h);
  const isCurrent = (h: string) => (home ? false : h === contactHref);

  // Aşağı kaydırırken gizlenir, yukarı kaydırırken geri gelir; rengi altındaki bölüme göre değişir.
  useEffect(() => {
    let last = window.scrollY;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      setTop(y < 4);
      const atBottom = y + window.innerHeight >= document.documentElement.scrollHeight - 2;
      if (y < 80 || atBottom) setHidden(false);
      else if (y > last + 6) setHidden(true);
      else if (y < last - 6) setHidden(false);
      last = y;
      const stack = document.elementsFromPoint(window.innerWidth / 2, 34);
      const host = stack.map((e) => e.closest('[data-hdr]')).find(Boolean) as HTMLElement | undefined;
      setTone(host?.dataset.hdr === 'light' ? 'light' : 'dark');
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf); };
  }, []);

  const openMenu = useCallback(() => {
    wrap.current?.style.setProperty('--sy', `${window.scrollY}px`);
    document.documentElement.style.setProperty('--sy', `${window.scrollY}px`);
    (window as unknown as { __lenis?: Lenis }).__lenis?.stop();
    document.documentElement.style.overflow = 'hidden';
    setOpen(true);
  }, []);
  const closeMenu = useCallback(() => {
    (window as unknown as { __lenis?: Lenis }).__lenis?.start();
    document.documentElement.style.overflow = '';
    setOpen(false);
  }, []);

  useEffect(() => {
    document.body.dataset.menu = open ? 'open' : 'closed';
    return () => { delete document.body.dataset.menu; };
  }, [open]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeMenu(); };
    const onResize = () => { if (window.innerWidth >= 1000) closeMenu(); };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize); };
  }, [closeMenu]);

  return (
    <>
      <div ref={wrap} className="ocm-wrap" style={{ '--sy': '0px' } as CSSProperties}>
        <header
          className="hdr"
          data-top={top}
          data-hidden={hidden}
          data-tone={tone}
          data-menu-open={open || undefined}
          style={ticker ? undefined : ({ '--tk': '0px' } as CSSProperties)}
        >
          {ticker && (
            <div className="hdr-tk">
              <SmartLink href={contactHref} className="hdr-pill zoom-reveal" aria-label="Book a call"><Ticker text={content.ticker} /></SmartLink>
            </div>
          )}
          <div className="hdr-nav">
            <SmartLink href={home ? '#top' : '/'} className="hdr-logo">{brand}</SmartLink>
            <nav className="hdr-links" aria-label="Main">
              {nav.map((l) => <RevealLink key={l.label} href={href(l.href)} current={isCurrent(l.href)}>{l.label}</RevealLink>)}
            </nav>
            <button className="burger" aria-label="Open menu" aria-expanded={open} aria-controls="ocm" onClick={openMenu}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                <path d="M4 8h16M4 12h16M4 16h16" />
              </svg>
            </button>
          </div>
        </header>
        {children}
        {open && <div className="ocm-veil" onClick={closeMenu} aria-hidden="true" />}
      </div>

      <div id="ocm" className="ocm-panel" inert={!open} data-lenis-prevent>
        <button className="ocm-close" aria-label="Close menu" onClick={closeMenu}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19" /></svg>
        </button>
        <nav aria-label="Mobile">
          {nav.map((l, i) => (
            <SmartLink key={l.label} href={href(l.href)} onClick={closeMenu} style={{ '--i': i } as CSSProperties} aria-current={isCurrent(l.href) ? 'page' : undefined}>
              {l.label}
            </SmartLink>
          ))}
        </nav>
      </div>
    </>
  );
}
