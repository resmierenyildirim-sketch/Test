const stats = [
  { label: 'Value created', value: '$175M', text: 'Empowering growth through strategic solutions.' },
  { label: 'Return client rate', value: '92%', text: 'Building lasting partnerships built on trust.' },
  { label: 'Projects delivered', value: '320+', text: 'Driving successful outcomes across industries.' },
];

export default function Stats() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="border-t border-white/20 pt-6">
            <p className="eyebrow">{s.label}</p>
            <p className="mt-4 text-7xl font-semibold tracking-tight">{s.value}</p>
            <p className="mt-4 opacity-70">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
