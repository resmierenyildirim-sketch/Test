import { content } from '@/lib/content';
import ScrollOpacity from './ScrollOpacity';
import SkyBg from './SkyBg';

// Gökyüzü arka planlı bölüm: başlık kaydırdıkça kelime kelime belirginleşir.
export default function Stats() {
  const s = content.stats;
  return (
    <section className="sky" data-hdr="light" data-scope>
      <SkyBg />
      <div className="sky-in">
        <div className="sky-head">
          <ScrollOpacity text={s.lead} />
        </div>
        <div className="sky-stats">
          {s.items.map((it) => (
            <div key={it.label}>
              <span className="badge">{it.label}</span>
              <div className="stat-row">
                <p className="stat-val">{it.value}</p>
                <p className="stat-txt">{it.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
