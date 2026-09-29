import Image from 'next/image';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-black text-white">
      <Image src="/img/mountains-harbor.webp" alt="" fill priority sizes="100vw" className="object-cover opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 pb-16 pt-40 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <h1 className="text-6xl font-semibold leading-[0.95] tracking-tight sm:text-8xl lg:text-9xl">Vision in Focus</h1>
          <p className="mt-6 max-w-xl text-lg">We give vision, structure, and the confidence you need to build momentum.</p>
        </div>
        <div className="flex items-center gap-5">
          <Image src="/img/shaurya-kauhsish-w9Ae-0Gap9I.webp" alt="Harbor consultant" width={120} height={120} className="size-24 rounded-full object-cover" />
          <div>
            <p className="eyebrow">(NYC Experts)</p>
            <p className="mt-1 max-w-56 text-sm">Expert financial consulting in Manhattan, New York.</p>
            <a href="#contact" className="mt-3 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-accent hover:text-white">Book a Call</a>
          </div>
        </div>
      </div>
    </section>
  );
}
