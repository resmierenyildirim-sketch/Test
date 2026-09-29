const words = ['Strategy', 'Clarity', 'Growth', 'Confidence', 'Momentum', 'Vision'];

export default function Marquee() {
  return (
    <div className="marquee border-y border-black/10 bg-white py-5" aria-hidden="true">
      <div className="marquee-track text-sm uppercase tracking-[0.2em]">
        {[0, 1].map((g) => (
          <div key={g} className="marquee-group">
            {words.map((w) => (
              <span key={w} className="flex items-center gap-[2em]">{w}<span className="text-accent">✦</span></span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
