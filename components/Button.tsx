import SmartLink from './SmartLink';

type Props = {
  href: string;
  children: string;
  tone?: 'light' | 'dark';
  full?: boolean;
  className?: string;
};

function Arrow({ alt = false }: { alt?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={alt ? 'alt' : undefined} aria-hidden="true">
      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
    </svg>
  );
}

// Salient "arrow-circle-animation" düğmesi: hover'da ok sağ üste çıkıp yenisi içeri kayar.
export default function Button({ href, children, tone = 'light', full = false, className = '' }: Props) {
  return (
    <SmartLink href={href} className={`btn ${className}`} data-tone={tone === 'dark' ? 'dark' : undefined} data-full={full || undefined}>
      <span>{children}</span>
      <span className="btn-dot"><Arrow /><Arrow alt /></span>
    </SmartLink>
  );
}
