"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export function Testimonials() {
  const [i, setI] = useState(0);
  const allVerified = testimonials.every((t) => t.verified);
  const step = (d: number) => setI((n) => (n + d + testimonials.length) % testimonials.length);

  return (
    <section className="relative overflow-hidden bg-blush/60 px-5 py-24 sm:px-8 lg:py-32">
      <Quote className="absolute left-6 top-10 text-rose/20" size={160} aria-hidden />
      <div className="relative mx-auto max-w-5xl">
        <SectionHeading eyebrow="Kind Words" title={<>Brides, <span className="gold-text italic">in their own words.</span></>} />
        {!allVerified && (
          <p className="mx-auto mt-6 max-w-xl rounded-full border border-rose/60 bg-white/70 px-5 py-2 text-center text-xs uppercase tracking-[0.18em] text-espresso/70">
            Placeholder content — genuine client reviews will be added
          </p>
        )}

        <div className="mt-14">
          {/* desktop: all cards; mobile: slider */}
          <div className="hidden gap-6 md:grid md:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} t={t} />
            ))}
          </div>
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div key={i} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                <TestimonialCard t={testimonials[i]} />
              </motion.div>
            </AnimatePresence>
            <div className="mt-6 flex items-center justify-center gap-4">
              <button onClick={() => step(-1)} aria-label="Previous testimonial" className="grid h-11 w-11 place-items-center rounded-full border border-espresso/30">
                <ChevronLeft size={20} />
              </button>
              <span className="text-sm text-espresso/60" aria-live="polite">{i + 1} / {testimonials.length}</span>
              <button onClick={() => step(1)} aria-label="Next testimonial" className="grid h-11 w-11 place-items-center rounded-full border border-espresso/30">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
