"use client";

import { useState } from "react";
import { galleryImages, type galleryCategories } from "@/data/gallery";
import { GalleryFilters } from "./GalleryFilters";
import { GalleryGrid } from "./GalleryGrid";

export function FilterableGallery() {
  const [category, setCategory] = useState<(typeof galleryCategories)[number]>("All");
  const items = category === "All" ? galleryImages : galleryImages.filter((g) => g.category === category);

  return (
    <div>
      <GalleryFilters active={category} onChange={setCategory} />
      <p className="mt-6 text-center text-sm text-espresso/55" aria-live="polite">
        Showing {items.length} {items.length === 1 ? "look" : "looks"}
      </p>
      <div className="mt-8">
        <GalleryGrid items={items} />
      </div>
    </div>
  );
}
