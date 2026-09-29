import Image from 'next/image';
import { asset } from '@/lib/asset';

const services = [
  { n: '01', title: 'Tailored Strategic Planning Sessions', img: '/img/planning-sessions.webp',
    text: 'Build a clear roadmap with tailored strategy sessions that align your financial goals with practical, actionable steps. Uncovers opportunities and challenges, giving you the clarity to move forward.' },
  { n: '02', title: '1:1 Consulting & Advisory', img: '/img/advisory.webp',
    text: 'Get personalized guidance through one-on-one consulting that tackles your most pressing financial and operational challenges. We provide fresh insights and practical solutions to keep your business moving.' },
  { n: '03', title: 'Comprehensive Tools & Data Analytics', img: '/img/working.webp',
    text: 'Exclusive templates, tools, and priority support designed to help you make smarter decisions. With a curated resource library and direct communication channels, you’ll always have expert guidance.' },
];

const points = [
  { title: 'Smarter Decisions, Faster', text: 'Turn complex numbers into clear strategies. Access actionable insights that help you make confident business moves without hesitation.' },
  { title: 'Growth That Stays on Course', text: 'Track performance against your goals in real time. Keep every department aligned and ensure your company grows with purpose.' },
  { title: 'Opportunities Before They Surface', text: 'Uncover market shifts and financial signals early. Stay ahead of risks and seize advantages before your competitors even notice.' },
];

export default function Services() {
  return (
    <>
      <section id="services" className="bg-neutral-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">How we can help you</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <article key={s.n} className="overflow-hidden rounded-2xl bg-white">
                <Image src={asset(s.img)} alt="" width={1000} height={1000} sizes="(min-width:768px) 33vw, 100vw" className="aspect-[4/3] w-full object-cover" />
                <div className="p-8">
                  <p className="text-accent">{s.n}</p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight">{s.title}</h3>
                  <p className="mt-4 opacity-70">{s.text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-12 max-w-2xl text-xl">
            We believe financial clarity comes from turning complex numbers into practical strategies. Our approach helps you move quickly, stay aligned, and uncover opportunities before they arise.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1fr_1.2fr]">
        <div className="grid grid-cols-2 gap-4">
          <Image src={asset("/img/team-photo.webp")} alt="The Harbor team" width={1000} height={1325} sizes="(min-width:768px) 20vw, 50vw" className="rounded-2xl object-cover" />
          <Image src={asset("/img/office.webp")} alt="Harbor office" width={1000} height={1325} sizes="(min-width:768px) 20vw, 50vw" className="mt-12 rounded-2xl object-cover" />
        </div>
        <div className="divide-y divide-black/10">
          {points.map((p) => (
            <div key={p.title} className="py-8 first:pt-0">
              <h3 className="text-2xl font-semibold">{p.title}</h3>
              <p className="mt-3 max-w-lg opacity-70">{p.text}</p>
            </div>
          ))}
          <p className="pt-8 text-sm opacity-60">Layouts, service descriptions, and visuals here are sample examples. Customize them to fit your industry, audience, and goals.</p>
        </div>
      </section>
    </>
  );
}
