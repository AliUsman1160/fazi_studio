"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/data/gallery";

type Props = {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function Lightbox({ images, index, onClose, onChange }: Props) {
  const open = index !== null;
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const go = (dir: 1 | -1) => {
    if (index === null) return;
    onChange((index + dir + images.length) % images.length);
  };

  useEffect(() => {
    if (!open) return;
    lastFocus.current = document.activeElement as HTMLElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      lastFocus.current?.focus?.();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "Tab") {
        // keep focus inside the dialog
        const focusables = document.querySelectorAll<HTMLElement>("[data-lightbox] button");
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, index, images.length]);

  const current = index !== null ? images[index] : null;

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          data-lightbox
          role="dialog"
          aria-modal="true"
          aria-label={`${current.title} — image ${index! + 1} of ${images.length}`}
          className="fixed inset-0 z-[80] flex flex-col bg-espresso/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <div className="flex items-center justify-between px-4 py-4 text-ivory sm:px-8">
            <p className="eyebrow !text-champagne">
              {current.category} <span className="mx-2 text-ivory/30">·</span> {index! + 1} / {images.length}
            </p>
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close lightbox"
              className="grid h-12 w-12 place-items-center rounded-full border border-ivory/30 transition hover:bg-ivory hover:text-espresso"
            >
              <X size={22} />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-20" onClick={onClose}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-ivory/30 bg-espresso/50 text-ivory transition hover:bg-ivory hover:text-espresso sm:left-6"
            >
              <ChevronLeft size={24} />
            </button>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="relative h-full w-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image src={current.src} alt={current.alt} fill sizes="(max-width: 1024px) 100vw, 900px" className="object-contain" priority />
              </motion.div>
            </AnimatePresence>
            <button
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              aria-label="Next image"
              className="absolute right-2 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-ivory/30 bg-espresso/50 text-ivory transition hover:bg-ivory hover:text-espresso sm:right-6"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="px-4 py-5 text-center text-ivory sm:px-8">
            <p className="font-display text-2xl">{current.title}</p>
            <p className="mt-1 text-xs text-ivory/50">Sample photography — not work by Fazi Studio</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
