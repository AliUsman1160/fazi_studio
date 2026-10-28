import Image from "next/image";
import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";

export function PageHero({
  breadcrumb,
  eyebrow,
  title,
  description,
  image,
  alt,
  focus = "50% 25%",
}: {
  breadcrumb: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  alt: string;
  focus?: string;
}) {
  return (
    <section className="relative isolate flex min-h-[26rem] items-end overflow-hidden bg-espresso pb-14 pt-36 text-white sm:min-h-[34rem] sm:pb-20">
      <Image src={image} alt={alt} fill priority sizes="100vw" style={{ objectPosition: focus }} className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-espresso via-espresso/55 to-espresso/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-espresso/70 to-transparent" />
      <div className="pointer-events-none absolute inset-4 -z-10 border border-gold/25 sm:inset-8" aria-hidden />
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-12">
        <Breadcrumbs current={breadcrumb} />
        <p className="eyebrow mt-8 flex items-center gap-4 !text-champagne">
          <span className="h-px w-10 bg-gold" aria-hidden />
          {eyebrow}
        </p>
        <h1 className="font-display mt-4 max-w-3xl text-[2.7rem] leading-[1.04] sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{description}</p>
      </div>
    </section>
  );
}
