const text = 'Book Your Strategy Call';

// Hero'nun üstünde tam genişlikte kayan yazılı vurgu rengi bant.
export default function TopTicker() {
  return (
    <div className="marquee absolute inset-x-1 top-1 z-30 rounded-full bg-accent py-3 text-sm text-[#1e1e1e] md:inset-x-1.5 md:top-1.5" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((g) => (
          <div key={g} className="marquee-group">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="flex items-center gap-[2em]">{text}<span>✦</span></span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
