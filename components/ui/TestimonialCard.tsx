import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col border border-gold/30 bg-white p-8">
      <blockquote className="font-display flex-1 text-xl leading-relaxed text-espresso/85 sm:text-[1.35rem]">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center justify-between border-t border-gold/25 pt-4 text-sm">
        <span>
          <span className="block font-medium">{t.name}</span>
          <span className="text-espresso/55">{t.event}</span>
        </span>
        {!t.verified && <span className="eyebrow !text-[0.58rem] text-rose">Placeholder</span>}
      </figcaption>
    </figure>
  );
}
