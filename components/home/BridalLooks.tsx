"use client";

import Image from "next/image";
import { useState } from "react";
import { getGalleryImage, signatureLookIds } from "@/data/gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbox } from "@/components/gallery/Lightbox";
import { cn } from "@/lib/utils";

// Varied editorial layout: first tile large, others supporting.
const layout = [
  "sm:col-span-2 sm:row-span-2 aspect-[4/5] sm:aspect-auto",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "sm:col-span-2 aspect-[4/5] sm:aspect-[2/1]",
];

export function BridalLooks() {
  const items = signatureLookIds.map(getGalleryImage);
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-espresso px-5 py-24 text-ivory sm:px-8 lg:py-32">
      <div className="absolute -right-32 top-10 h-[28rem] w-[28rem] rounded-full border border-gold/20" aria-hidden />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          light
          eyebrow="Signature Bridal Looks"
          title={<>Every Bride. Her Own Kind of <span className="gold-text italic">Beautiful.</span></>}
          description="A curated moodboard of looks — traditional, soft, golden and contemporary. Sample photography, shown for inspiration."
        />

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 sm:[grid-auto-rows:minmax(0,1fr)]">
          {items.map((img, i) => (
            <Reveal key={img.id} delay={(i % 4) * 0.08} className={cn("relative", layout[i])}>
              <button
                onClick={() => setActive(i)}
                aria-label={`Open ${img.title}`}
                className="group absolute inset-0 overflow-hidden bg-espresso"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  sizes={i === 0 ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 50vw, 25vw"}
                  style={{ objectPosition: img.focus }}
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/10 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-4 text-left sm:p-6">
                  <span className="eyebrow block !text-[0.58rem] !text-champagne">{img.category}</span>
                  <span className={cn("font-display block leading-tight", i === 0 ? "text-2xl sm:text-4xl" : "text-base sm:text-xl")}>
                    {img.title}
                  </span>
                </span>
                <span className="absolute inset-3 border border-gold/0 transition-all duration-500 group-hover:border-gold/70" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      <Lightbox images={items} index={active} onClose={() => setActive(null)} onChange={setActive} />
    </section>
  );
}
