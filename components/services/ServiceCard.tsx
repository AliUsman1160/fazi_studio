import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <article className="group flex h-full flex-col bg-white transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(48,37,34,.35)]">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
          className="object-cover object-[50%_25%] transition-transform duration-[1400ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 to-transparent" />
        <span className="font-display absolute left-5 top-4 text-5xl text-white/90">0{index + 1}</span>
      </div>
      <div className="flex flex-1 flex-col border border-t-0 border-gold/25 p-7">
        <h3 className="font-display text-[1.7rem] leading-tight">{service.title}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-espresso/70">{service.short}</p>
        <Link
          href={`/services#${service.id}`}
          className="group/link mt-6 inline-flex items-center gap-2 self-start border-b border-gold pb-1 text-[0.76rem] font-medium uppercase tracking-[0.2em] transition hover:text-gold-deep"
        >
          Explore Service
          <ArrowUpRight size={15} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
