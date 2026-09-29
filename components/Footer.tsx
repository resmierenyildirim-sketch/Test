import type { CSSProperties } from 'react';
import LineReveal from './LineReveal';

const tags = [
  { label: 'Say hello', href: 'mailto:hello@example.com', style: { left: '6%', top: '8%' }, rot: -8, delay: 0 },
  { label: 'Let’s talk', href: 'mailto:hello@example.com', style: { right: '4%', top: '4%' }, rot: 7, delay: -2 },
  { label: 'Start today', href: '#pricing', style: { left: '2%', bottom: '10%' }, rot: 6, delay: -4 },
  { label: 'Call us', href: 'tel:+10000000000', style: { right: '8%', bottom: '6%' }, rot: -6, delay: -6 },
];

const socials = [
  { label: 'X', path: 'M4 4l16 16M20 4 4 20' },
  { label: 'Instagram', path: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-2.5h.01' },
  { label: 'LinkedIn', path: 'M6 9v10M6 5.5v.01M11 19V9m0 4a4 4 0 0 1 8 0v6' },
];

export default function Footer() {
  return (
    <footer id="contact" className="overflow-hidden bg-white text-black">
      <div className="animated-gradient-soft relative mx-auto flex min-h-[26rem] max-w-7xl items-center justify-center px-6 py-20 md:min-h-[32rem]">
        {tags.map((t) => (
          <a
            key={t.label}
            href={t.href}
            className="tag-float absolute rounded-full bg-neutral-200 px-4 py-2 text-xs shadow-sm md:text-sm"
            style={{ ...t.style, '--r': `${t.rot}deg`, animationDelay: `${t.delay}s` } as unknown as CSSProperties}
          >
            {t.label}
          </a>
        ))}
        <a href="mailto:hello@example.com" className="relative block max-w-2xl text-center">
          <LineReveal as="p" text="Want to get started? Click here to book a meeting." className="text-2xl font-light leading-snug md:text-5xl" />
        </a>
      </div>

      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-6 text-sm md:px-6">
        <nav className="flex gap-5" aria-label="Footer">
          <a href="#about">About</a><a href="#services">Services</a><a href="#pricing">Pricing</a>
        </nav>
        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <a key={s.label} href="#" aria-label={s.label}>
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={s.path} /></svg>
            </a>
          ))}
          <span className="opacity-60">© {new Date().getFullYear()} Harbor</span>
        </div>
      </div>
      <p className="-mb-[3.5vw] select-none px-2 text-center text-[27vw] font-medium leading-[0.85] tracking-tighter md:text-[22vw]" aria-hidden="true">Harbor</p>
    </footer>
  );
}
