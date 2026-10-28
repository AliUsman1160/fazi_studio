const words = ["Barat", "Walima", "Nikkah", "Mehndi", "Party Makeup", "Hair Styling", "Dupatta Setting"];

export function Marquee() {
  const row = [...words, ...words];
  return (
    <div aria-hidden className="overflow-hidden border-y border-gold/30 bg-champagne/40 py-5">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {[...row, ...row].map((w, i) => (
          <span key={i} className="font-display flex items-center gap-10 text-2xl italic text-espresso/80 sm:text-3xl">
            {w}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
