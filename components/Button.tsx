type Props = {
  href: string;
  children: string;
  variant?: 'dark' | 'light' | 'accent';
  arrow?: boolean;
  full?: boolean;
  className?: string;
};

const variants = {
  dark: { pill: 'bg-black text-white', dot: 'bg-white text-black' },
  light: { pill: 'bg-white text-black', dot: 'bg-black text-white' },
  accent: { pill: 'bg-accent text-white', dot: 'bg-white text-black' },
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

// Hover'da metnin yukarı kayıp ikinci kopyanın geldiği; isteğe bağlı ok yuvarlaklı buton.
export default function Button({ href, children, variant = 'dark', arrow = false, full = false, className = '' }: Props) {
  const v = variants[variant];
  const layout = arrow
    ? `${full ? 'flex w-full justify-between' : 'inline-flex'} items-center gap-5 py-1.5 pl-6 pr-1.5`
    : 'inline-block px-7 py-3.5';
  return (
    <a href={href} className={`tr-btn rounded-full text-[0.9rem] font-medium ${layout} ${v.pill} ${className}`}>
      <span className="tr-clip">
        <span className="tr-line">{children}</span>
        <span className="tr-line" aria-hidden="true">{children}</span>
      </span>
      {arrow && <span className={`grid size-9 shrink-0 place-items-center rounded-full ${v.dot}`}><ArrowIcon /></span>}
    </a>
  );
}
