// Hover'da metnin yukarı kayıp ikinci kopyanın geldiği bağlantı (Salient "text reveal").
export default function RevealLink({ href, children, className }: { href: string; children: string; className?: string }) {
  return (
    <a href={href} className={className}>
      <span className="reveal-link"><span data-text={children}>{children}</span></span>
    </a>
  );
}
