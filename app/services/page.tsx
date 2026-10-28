import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services, PRICE_FALLBACK } from "@/data/services";
import { galleryImages, images } from "@/data/gallery";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Bridal Makeup & Hair Services in Lahore",
  description:
    "Barat, Walima, Nikkah, Mehndi and party makeup plus hair styling at Fazi Studio, Lahore. Make an inquiry to discuss your look and package details.",
  openGraph: { title: "Services | Fazi Studio", description: "Bridal makeup, party makeup and hair styling in Lahore.", url: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        eyebrow="Our Services"
        title={<>Looks crafted for <span className="gold-text italic">every ceremony.</span></>}
        description="Bridal makeup, occasion makeup and hair styling — each designed around you and your outfit."
        image={images.blueBride}
        alt="Sample photograph of a bride in a teal and gold outfit seated on an ornate chair"
        focus="50% 20%"
      />

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl space-y-24 lg:space-y-32">
          {services.map((s, i) => {
            const related = galleryImages.filter((g) => g.category === s.galleryCategory && g.src !== s.image).slice(0, 2);
            const flip = i % 2 === 1;
            return (
              <article key={s.id} id={s.id} className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-20">
                <Reveal className={cn("relative", flip && "lg:order-2")}>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.alt}
                      fill
                      loading={i === 0 ? "eager" : "lazy"}
                      sizes="(max-width: 1024px) 92vw, 600px"
                      className="object-cover object-[50%_25%]"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full border border-gold/60 sm:-bottom-6 sm:-right-6" aria-hidden />
                </Reveal>

                <Reveal>
                  <span className="font-display text-6xl text-champagne">0{i + 1}</span>
                  <h2 className="font-display -mt-2 text-4xl sm:text-5xl">{s.title}</h2>
                  <p className="mt-5 text-lg italic text-gold-deep">{s.short}</p>
                  <p className="mt-4 leading-relaxed text-espresso/75">{s.description}</p>
                  <ul className="mt-6 space-y-2.5">
                    {s.includes.map((inc) => (
                      <li key={inc} className="flex gap-3 text-espresso/80">
                        <Check size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden />
                        {inc}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-l-2 border-gold pl-4 text-sm text-espresso/70">{s.price ?? PRICE_FALLBACK}</p>

                  {related.length > 0 && (
                    <div className="mt-7 flex gap-3">
                      {related.map((r) => (
                        <div key={r.id} className="relative h-24 w-20 overflow-hidden sm:h-28 sm:w-24">
                          <Image src={r.src} alt={r.alt} fill loading="lazy" sizes="100px" style={{ objectPosition: r.focus }} className="object-cover" />
                        </div>
                      ))}
                      <Link href="/gallery" className="flex items-center gap-1 self-end pb-1 text-xs uppercase tracking-[0.18em] text-gold-deep hover:underline">
                        More looks <ArrowRight size={13} aria-hidden />
                      </Link>
                    </div>
                  )}

                  <Button href={`/contact?service=${s.id}#inquiry`} className="mt-8">
                    Inquire About This Service
                  </Button>
                </Reveal>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-espresso px-5 py-20 text-center text-ivory sm:px-8">
        <SectionHeading
          light
          eyebrow="Packages & Pricing"
          title={<>Not sure which service <span className="gold-text italic">is right?</span></>}
          description="Package details are shared directly by the studio. Tell us about your event and we will guide you."
        />
        <div className="mt-10">
          <Button href="/contact#inquiry" className="!bg-ivory !text-espresso hover:!bg-gold hover:!text-white">
            Make a Booking Inquiry
          </Button>
        </div>
      </section>
    </>
  );
}
