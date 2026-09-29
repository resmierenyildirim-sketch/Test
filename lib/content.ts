// Sitedeki tüm metinler ve veri burada. Kendi markanı ve içeriğini bu dosyadan değiştir.
export const brand = 'Harbor';

// Bütün "Book a call / Contact" bağlantıları iletişim sayfasına gider.
export const contactHref = '/contact/';

export const nav = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#pricing', label: 'Pricing' },
  { href: contactHref, label: 'Contact' },
];

export const content = {
  ticker: 'Book Your Strategy Call',
  hero: {
    title: 'Clarity in Motion',
    card: 'Independent financial advisory in New York.',
    label: '(NYC Advisors)',
    tagline: 'We bring structure, foresight and calm to every financial decision.',
    cta: 'Book a Call',
  },
  about: {
    lead: 'Every business reaches a point where the numbers stop being obvious. We step in there and turn uncertainty into a plan you can act on.',
    label: '(About Us)',
    p1: 'Our advisors pair rigorous analysis with plain language, so you always know where you stand and what to do next.',
    p2: 'From your first budget to your next funding round, we work alongside you at every stage of growth.',
    link: 'View Services',
  },
  servicesTitle: 'How we can help you',
  services: [
    { n: '01', title: 'Strategic Planning Workshops', img: '/img/planning-sessions.webp', bg: 'bg-accent', titleMax: 75,
      text: 'Map your goals to a concrete roadmap in focused working sessions. We surface trade-offs early so every step has a clear purpose.' },
    { n: '02', title: 'Advisory & Coaching', img: '/img/advisory.webp', bg: 'bg-sun', titleMax: 75,
      text: 'Direct access to an experienced advisor for the questions that keep you up at night. Honest feedback with a fast turnaround.' },
    { n: '03', title: 'Reporting & Analytics Toolkit', img: '/img/working.webp', bg: 'bg-sky', titleMax: 85,
      text: 'Ready-made dashboards, templates and priority support so your team can track progress without drowning in spreadsheets.' },
  ],
  beliefs: {
    lead: 'We believe good financial decisions come from clear information, shared context and steady follow-through. That is how teams move quickly without losing control.',
    items: [
      { title: 'Faster, Better Decisions', text: 'Turn raw figures into a short list of options, with the trade-offs spelled out.' },
      { title: 'Progress You Can Measure', text: 'Track results against your goals in one place and keep every department on the same page.' },
      { title: 'Risks Seen Early', text: 'Spot cash-flow and market signals ahead of time, while there is still room to react.' },
    ],
  },
  stats: {
    lead: 'Results we are proud of, measured together with the teams we work with.',
    items: [
      { label: 'Capital planned', value: '$120M', text: 'Helping teams put money where it works hardest.' },
      { label: 'Clients who stay', value: '94%', text: 'Long-term relationships built on trust.' },
      { label: 'Engagements completed', value: '250+', text: 'Delivered across a wide range of industries.' },
    ],
  },
  testimonials: {
    left: 'Testimonials',
    right: 'They love us',
    items: [
      { name: 'Daniel Ortiz', role: 'Café Owner', img: '/img/testimonial-man.webp', bg: 'bg-sun',
        quote: 'Calm, direct and genuinely useful. I finally understand my own numbers and plan around them.' },
      { name: 'Priya Nair', role: 'COO, Northwind Studio', img: '/img/allyssa-sayers-w2Qx9eaA3I0.webp', bg: 'bg-accent',
        quote: 'They cut through the noise and gave us a plan the whole leadership team could get behind.' },
      { name: 'Lena Fischer', role: 'Head of Marketing', img: '/img/zeelool-glasses-kJy7MMIfcNU.webp', bg: 'bg-sky',
        quote: 'Clear answers, no jargon. Our budget conversations went from stressful to productive.' },
    ],
  },
  pricing: {
    label: '(Pricing)',
    title: 'Straightforward plans for every stage of growth.',
    logos: [
      { src: '/img/logos/logoipsum-8-1.webp', w: 400, h: 303 },
      { src: '/img/logos/logoipsum-1.webp', w: 400, h: 400 },
      { src: '/img/logos/logoipsum-3.webp', w: 400, h: 61 },
      { src: '/img/logos/logoipsum-2.webp', w: 400, h: 244 },
      { src: '/img/logos/logoipsum-6.webp', w: 400, h: 244 },
      { src: '/img/logos/logoipsum-378.webp', w: 400, h: 178 },
      { src: '/img/logos/logoipsum-394.webp', w: 400, h: 400 },
      { src: '/img/logos/logoipsum-397.webp', w: 400, h: 372 },
      { src: '/img/logos/logoipsum-42.webp', w: 400, h: 190 },
      { src: '/img/logos/logoipsum-53.webp', w: 400, h: 76 },
    ],
    plans: [
      { name: 'Starter', price: '$89', featured: false,
        text: 'For individuals and small teams taking their first steps with a financial plan.',
        features: ['One kick-off strategy call', 'Two follow-up sessions', 'Access to digital templates'] },
      { name: 'Growth', price: '$349', featured: true,
        text: 'For growing businesses that need deeper analysis and a tailored strategy.',
        features: ['Monthly planning session', 'Unlimited advisory sessions', 'Resource library access', 'Email and chat support'] },
      { name: 'Executive', price: '$549', featured: false,
        text: 'For leadership teams managing complex decisions with priority support.',
        features: ['Monthly executive review', 'Six custom sessions per month', 'Full resource library', 'Priority phone and email support'] },
    ],
    badge: 'Recommended',
    cta: 'Learn More',
    includes: 'Plan Includes:',
    period: '/month',
  },
  cta: {
    text: 'Ready to talk? Book a meeting and let’s look at your numbers together.',
    href: contactHref,
    // Fare imlecini takip eden etiketler (masaüstünde bölümün üzerinde gezinince belirir).
    trail: ['Say hello', 'Let’s talk', 'Start today', 'Call us'],
    trailColors: ['#ff4a4b', '#ffa628', '#8ccbff'],
  },
  contact: {
    title: 'How can we support you?',
    interestsLabel: 'I’m interested In',
    interests: ['Financial Planning', 'Fundraising', 'Acquisitions', 'Advisory'],
    fields: {
      firstName: { label: 'First Name', placeholder: 'First Name' },
      lastName: { label: 'Last Name', placeholder: 'Last Name' },
      email: { label: 'Email', placeholder: 'Email Address' },
      phone: { label: 'Phone Number', placeholder: 'Phone Number' },
      message: { label: 'Your Message', placeholder: 'Your Message' },
    },
    submit: 'Get Started',
    sending: 'Sending…',
    altPrefix: 'Prefer email?',
    altLink: 'Get in touch',
    email: 'hello@example.com',
    required: 'This field is required',
    invalidEmail: 'This field must contain a valid email',
    success: 'Thank you for your message. We will get in touch with you shortly.',
    successMailto: 'Your email app should open with your message ready to send. If it does not, write to us at',
    failure: 'Something went wrong. Please try again or email us directly.',
    // Formu gerçekten göndermek için bir form servisi adresi ver (ör. Formspree: https://formspree.io/f/xxxx)
    // ve .env dosyasına NEXT_PUBLIC_CONTACT_ENDPOINT olarak yaz. Boşsa e-posta uygulaması açılır (mailto).
    endpoint: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? '',
    quote: 'They cut through the noise and gave us a plan the whole leadership team could get behind.',
    name: 'Priya Nair',
    role: 'COO, Northwind Studio',
  },
  footer: {
    links: [
      { href: '#about', label: 'About' },
      { href: '#services', label: 'Services' },
      { href: '#pricing', label: 'Pricing' },
    ],
    social: [
      { label: 'X', href: 'https://x.com/', icon: 'x' },
      { label: 'Instagram', href: 'https://instagram.com/', icon: 'instagram' },
      { label: 'LinkedIn', href: 'https://linkedin.com/', icon: 'linkedin' },
    ],
    rights: 'All Rights Reserved.',
  },
};
