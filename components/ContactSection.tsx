import Image from 'next/image';
import { asset } from '@/lib/asset';
import { content } from '@/lib/content';
import ContactForm from './ContactForm';

function Stars() {
  return (
    <div className="ct-stars" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 1.8l3 6.6 7.2.8-5.4 4.9 1.5 7.1L12 17.6l-6.3 3.6 1.5-7.1L1.8 9.2l7.2-.8z" />
        </svg>
      ))}
    </div>
  );
}

export default function ContactSection() {
  const c = content.contact;
  return (
    <section className="ct" data-hdr="dark">
      <div className="ct-row">
        <div className="ct-panel">
          <div className="ct-inner">
            <h1>{c.title}</h1>
            <ContactForm />
          </div>
        </div>
        <figure className="ct-photo">
          <Image src={asset('/img/consultation.webp')} alt="" fill priority sizes="(min-width: 1000px) 60vw, 100vw" className="object-cover" />
          <div className="ct-photo-in">
            <blockquote>“{c.quote}”</blockquote>
            <figcaption className="ct-who">
              <div>
                <p><strong>{c.name}</strong></p>
                <p>{c.role}</p>
              </div>
              <Stars />
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
