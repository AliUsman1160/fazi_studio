"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Expand } from "lucide-react";
import type { GalleryImage, Ratio } from "@/data/gallery";
import { Lightbox } from "./Lightbox";
import { cn } from "@/lib/utils";

const aspect: Record<Ratio, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

/** Masonry-style gallery with built-in lightbox. */
export function GalleryGrid({ items }: { items: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <motion.div layout className="columns-2 gap-3 sm:gap-5 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {items.map((img, i) => (
            <motion.figure
              layout
              key={img.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45 }}
              className="mb-3 break-inside-avoid sm:mb-5"
            >
              <button
                onClick={() => setActive(i)}
                aria-label={`Open ${img.title} in lightbox`}
                className={cn("group relative block w-full overflow-hidden bg-champagne", aspect[img.ratio])}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectPosition: img.focus }}
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 text-left text-ivory opacity-0 transition-all duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 sm:translate-y-3 sm:group-hover:translate-y-0">
                  <span>
                    <span className="eyebrow block !text-[0.6rem] !text-champagne">{img.category}</span>
                    <span className="font-display text-lg leading-tight sm:text-xl">{img.title}</span>
                  </span>
                  <Expand size={18} aria-hidden className="shrink-0" />
                </span>
              </button>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>
      <Lightbox images={items} index={active} onClose={() => setActive(null)} onChange={setActive} />
    </>
  );
}
