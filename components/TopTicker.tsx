const text = 'Book your strategy call';

// Hero'nun üstünde kayan yazılı yarı saydam hap.
export default function TopTicker() {
  return (
    <div className="marquee absolute inset-x-4 top-4 z-20 rounded-full border border-white/20 bg-white/10 py-2 text-xs text-white backdrop-blur-md md:inset-x-auto md:left-1/2 md:w-[26rem] md:-translate-x-1/2" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((g) => (
          <div key={g} className="marquee-group">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="flex items-center gap-[2em]">{text}<span className="text-accent">✦</span></span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
