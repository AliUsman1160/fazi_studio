"use client";

import { cn } from "@/lib/utils";
import { galleryCategories } from "@/data/gallery";

export function GalleryFilters({ active, onChange }: { active: string; onChange: (c: (typeof galleryCategories)[number]) => void }) {
  return (
    <div role="group" aria-label="Filter gallery by category" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
      {galleryCategories.map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          aria-pressed={active === c}
          className={cn(
            "shrink-0 rounded-full border px-5 py-2.5 text-[0.74rem] font-medium uppercase tracking-[0.16em] transition-all duration-300",
            active === c
              ? "border-espresso bg-espresso text-ivory shadow-md"
              : "border-espresso/25 text-espresso/70 hover:border-gold hover:text-gold-deep",
          )}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
