import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { asset } from '@/lib/asset';

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { href: string; children: ReactNode };

// "/" ile başlayan sayfalar arası bağlantılar bilerek TAM SAYFA gezinmesidir (Next Link değil):
// böylece tarayıcının sayfalar arası View Transition'ı (globals.css → "Sayfa geçişi") çalışır,
// tıpkı orijinal temadaki gibi. #hash, mailto ve dış bağlantılar olduğu gibi kalır.
export default function SmartLink({ href, children, ...rest }: Props) {
  const url = href.startsWith('/') ? asset(href) : href;
  return <a href={url} {...rest}>{children}</a>;
}
