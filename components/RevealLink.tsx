import SmartLink from './SmartLink';

// Hover'da metnin yukarı kayıp ikinci kopyanın geldiği bağlantı (Salient "text reveal").
export default function RevealLink({ href, children, className, current }: { href: string; children: string; className?: string; current?: boolean }) {
  return (
    <SmartLink href={href} className={className} aria-current={current ? 'page' : undefined}>
      <span className="reveal-link"><span data-text={children}>{children}</span></span>
    </SmartLink>
  );
}
