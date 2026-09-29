const CHUNKS = 20;

// Üstteki kayan yazılı bant. Her parça: metin + ✦ (her iki yanında 2em boşluk).
export default function Ticker({ text }: { text: string }) {
  return (
    <div className="tk-mask" aria-hidden="true">
      <div className="tk-track" style={{ '--n': CHUNKS } as React.CSSProperties}>
        {Array.from({ length: CHUNKS }).map((_, i) => (
          <p key={i} className="tk-chunk">{text}<span>✦</span></p>
        ))}
      </div>
    </div>
  );
}
