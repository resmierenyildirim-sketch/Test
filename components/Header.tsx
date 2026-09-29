'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => { document.documentElement.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 z-40 transition-all duration-500 ${
          solid ? 'top-0 bg-white/80 text-black backdrop-blur-md' : 'top-16 text-white md:top-4'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-6 md:py-4">
          <a href="#top" className="text-xl font-normal tracking-tight md:text-2xl">Harbor</a>
          <nav className="hidden gap-8 md:flex" aria-label="Main">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm hover:opacity-60">{l.label}</a>
            ))}
          </nav>
          <button
            className="grid size-11 place-items-center rounded-full bg-black text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="M4 8h16M4 12h16M4 16h16" />
            </svg>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        inert={!open}
        data-lenis-prevent
        className={`fixed inset-0 z-50 bg-black text-white transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)] md:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button className="absolute right-5 top-5 grid size-11 place-items-center rounded-full border border-white/30" aria-label="Close menu" onClick={() => setOpen(false)}>
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
        </button>
        <nav className="flex h-full flex-col justify-center gap-5 px-8" aria-label="Mobile">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-3xl font-light transition-all duration-500 ${open ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`}
              style={{ transitionDelay: open ? `${200 + i * 60}ms` : '0ms' }}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
