import Image from 'next/image';
import { asset } from '@/lib/asset';
import LineReveal from './LineReveal';
import Reveal from './Reveal';

const services = [
  { n: '01', title: 'Tailored Strategic Planning Sessions', img: '/img/planning-sessions.webp',
    text: 'Build a clear roadmap with tailored strategy sessions that align your financial goals with practical, actionable steps. Uncovers opportunities and challenges, giving you the clarity to move forward.' },
  { n: '02', title: '1:1 Consulting & Advisory', img: '/img/advisory.webp',
    text: 'Get personalized guidance through one-on-one consulting that tackles your most pressing financial and operational challenges. We provide fresh insights and practical solutions to keep your business moving.' },
  { n: '03', title: 'Comprehensive Tools & Data Analytics', img: '/img/working.webp',
    text: 'Exclusive templates, tools, and priority support designed to help you make smarter decisions. With a curated resource library and direct communication channels, you’ll always have expert guidance.' },
];

// Kartlar sticky ile üst üste yığılır.
export default function Services() {
  return (
    <section id="services" className="bg-white pb-16 pt-8 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <LineReveal as="h2" text="How we can help you" className="px-1 text-2xl font-light tracking-tight md:text-5xl" />
        <div className="mt-8 md:mt-14">
          {services.map((s, i) => (
            <article
              key={s.n}
              className="sticky mb-[6vh] flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-neutral-100 shadow-[0_-10px_30px_rgba(0,0,0,0.06)] md:mb-[12vh] md:grid md:min-h-[60vh] md:grid-cols-2"
              style={{ top: `calc(5.5rem + ${i} * 1rem)` }}
            >
              <div className="flex flex-col justify-center p-6 md:p-14">
                <p className="text-6xl font-light leading-none md:text-7xl">{s.n}</p>
                <h3 className="mt-6 text-2xl font-light leading-tight md:text-3xl">{s.title}</h3>
                <p className="mt-4 text-[0.95rem] font-light opacity-70">{s.text}</p>
              </div>
              <div className="relative m-4 mt-0 aspect-[4/3] overflow-hidden rounded-2xl md:order-first md:m-0 md:aspect-auto md:min-h-0 md:rounded-none">
                <Image src={asset(s.img)} alt="" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
              </div>
            </article>
          ))}
        </div>
        <Reveal>
          <p className="mt-10 max-w-3xl px-1 text-2xl font-light leading-snug md:mt-16 md:text-4xl">
            We believe financial clarity comes from turning complex numbers into practical strategies. Our approach helps you move quickly, stay aligned, and uncover opportunities before they arise.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
