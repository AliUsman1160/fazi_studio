"use client";

import Image from "next/image";
import { useState } from "react";
import { getGalleryImage, previewIds } from "@/data/gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbox } from "@/components/gallery/Lightbox";
import { cn } from "@/lib/utils";

const spans = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
];

export function GalleryPreview() {
  const items = previewIds.map(getGalleryImage);
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Bridal Gallery"
          title={<>A Closer Look at Our <span className="gold-text italic">Bridal Aesthetic.</span></>}
          description="Portraits, makeup details, hairstyles, jewelry and dupatta styling — sample imagery for inspiration."
        />
        <div className="mt-16 grid auto-rows-[9rem] grid-cols-2 gap-3 sm:auto-rows-[12rem] sm:grid-cols-4 sm:gap-4 lg:auto-rows-[14rem]">
          {items.map((img, i) => (
            <Reveal key={img.id} delay={(i % 4) * 0.07} className={cn("relative", spans[i], i === 6 && "col-span-2 sm:col-span-2")}>
              <button onClick={() => setActive(i)} aria-label={`Open ${img.title}`} className="group absolute inset-0 overflow-hidden bg-champagne">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, 25vw"
                  style={{ objectPosition: img.focus }}
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/25" />
                <span className="eyebrow absolute bottom-3 left-3 translate-y-2 bg-ivory/90 px-3 py-1.5 !text-[0.58rem] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {img.category}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Button href="/gallery">View Full Gallery</Button>
        </div>
      </div>
      <Lightbox images={items} index={active} onClose={() => setActive(null)} onChange={setActive} />
    </section>
  );
}
