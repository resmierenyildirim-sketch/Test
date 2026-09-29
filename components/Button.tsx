type Props = {
  href: string;
  children: string;
  variant?: 'dark' | 'light' | 'accent';
  className?: string;
};

const variants = {
  dark: 'bg-black text-white',
  light: 'bg-white text-black',
  accent: 'bg-accent text-white',
};

// Hover'da metnin yukarı kayıp yerine ikinci kopyanın geldiği buton.
export default function Button({ href, children, variant = 'dark', className = '' }: Props) {
  return (
    <a href={href} className={`tr-btn inline-block rounded-full px-7 py-3.5 text-sm font-medium ${variants[variant]} ${className}`}>
      <span className="tr-clip">
        <span className="tr-line">{children}</span>
        <span className="tr-line" aria-hidden="true">{children}</span>
      </span>
    </a>
  );
}
