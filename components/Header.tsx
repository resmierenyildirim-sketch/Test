'use client';

import { useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-30 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#top" className="text-2xl font-semibold tracking-tight">Harbor</a>
        <nav className="hidden gap-8 md:flex" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm hover:opacity-70">{l.label}</a>
          ))}
        </nav>
        <button className="md:hidden" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && (
        <nav className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-black text-3xl" aria-label="Mobile">
          <button className="absolute right-6 top-6 text-base" onClick={() => setOpen(false)}>Close</button>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
