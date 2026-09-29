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
    <section id="services" className="bg-neutral-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <LineReveal as="h2" text="How we can help you" className="text-4xl font-semibold tracking-tight sm:text-6xl" />
        <div className="mt-14">
          {services.map((s, i) => (
            <article
              key={s.n}
              className="sticky mb-[12vh] grid overflow-hidden rounded-3xl bg-white shadow-[0_-12px_40px_rgba(0,0,0,0.08)] md:min-h-[60vh] md:grid-cols-2"
              style={{ top: `calc(5.5rem + ${i} * 1.25rem)` }}
            >
              <div className="relative min-h-64 md:min-h-0">
                <Image src={asset(s.img)} alt="" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-14">
                <p className="text-accent">{s.n}</p>
                <h3 className="mt-3 text-3xl font-semibold leading-tight">{s.title}</h3>
                <p className="mt-5 opacity-70">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
        <Reveal>
          <p className="max-w-2xl text-xl">
            We believe financial clarity comes from turning complex numbers into practical strategies. Our approach helps you move quickly, stay aligned, and uncover opportunities before they arise.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
