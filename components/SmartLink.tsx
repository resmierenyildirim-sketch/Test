import Link from 'next/link';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { href: string; children: ReactNode };

// "/" ile başlayan iç sayfa bağlantıları Next Link (basePath otomatik), diğerleri (#hash, mailto, dış) düz <a>.
export default function SmartLink({ href, children, ...rest }: Props) {
  if (href.startsWith('/')) return <Link href={href} {...rest}>{children}</Link>;
  return <a href={href} {...rest}>{children}</a>;
}
