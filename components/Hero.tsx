import Image from 'next/image';
import { asset } from '@/lib/asset';
import { contactHref, content } from '@/lib/content';
import Button from './Button';
import FitText from './FitText';
import HeroBg from './HeroBg';

export default function Hero() {
  const h = content.hero;
  return (
    <section id="top" className="hero" data-hdr="light">
      <HeroBg />
      <div className="hero-title">
        <FitText as="h1" letters>{h.title}</FitText>
      </div>
      <div className="hero-row">
        <div className="hero-left">
          <div className="hero-card">
            <Image src={asset('/img/shaurya-kauhsish-w9Ae-0Gap9I.webp')} alt="Harbor advisor" width={800} height={800} priority />
            <div className="hero-card-body">
              <p>{h.card}</p>
              <Button href={contactHref}>{h.cta}</Button>
            </div>
          </div>
          <p className="hero-label">{h.label}</p>
        </div>
        <div className="hero-right">
          <p className="t-lg" style={{ flex: 1 }}>{h.tagline}</p>
          <a href="#about" className="hero-next" aria-label="Scroll to next section">
            {[0, 1].map((i) => (
              <svg key={i} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.0001 1.99974L11.0002 1.9996L11.0002 18.1715L7.05044 14.2218L5.63623 15.636L12.0002 22L18.3642 15.636L16.9499 14.2218L13.0002 18.1716L13.0001 1.99974Z" />
              </svg>
            ))}
          </a>
        </div>
      </div>
    </section>
  );
}
