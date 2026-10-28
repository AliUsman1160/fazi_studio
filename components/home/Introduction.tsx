import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { images } from "@/data/gallery";
import { Reveal } from "@/components/ui/Reveal";

export function Introduction() {
  return (
    <section id="intro" className="relative scroll-mt-20 overflow-hidden px-5 py-24 sm:px-8 lg:py-36">
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blush blur-3xl" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-24">
        <Reveal className="relative mx-auto w-full max-w-lg lg:mx-0">
          <div className="arch relative aspect-[3/4] overflow-hidden border border-gold/50 p-3">
            <div className="arch relative h-full w-full overflow-hidden">
              <Image
                src={images.portraitGreen}
                alt="Sample portrait of a bride in red and orange bridal wear with gold jewelry against a deep green backdrop"
                fill
                sizes="(max-width: 1024px) 90vw, 520px"
                className="object-cover object-[50%_20%]"
              />
            </div>
          </div>
          <div className="absolute -bottom-10 -right-2 aspect-square w-[46%] overflow-hidden border-[6px] border-ivory shadow-2xl sm:-right-10">
            <Image
              src={images.goldJewelry}
              alt="Sample close-up of bridal eye makeup and gold jewelry detail"
              fill
              sizes="(max-width: 1024px) 40vw, 240px"
              className="object-cover object-[50%_35%]"
            />
          </div>
        </Reveal>

        <div className="pt-8 lg:pt-0">
          <Reveal>
            <p className="eyebrow mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-gold" aria-hidden />
              The Fazi Studio Experience
            </p>
            <h2 className="font-display text-[2.6rem] leading-[1.05] sm:text-6xl">
              Beauty That Feels <span className="gold-text italic">Like You.</span>
            </h2>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-espresso/75">
              Every bride has her own story, personality, and vision. Our approach to bridal beauty is centered on
              understanding your preferences and creating a look that complements your features, outfit, and celebration.
            </p>
            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-3 border-b border-gold pb-1 text-[0.8rem] font-medium uppercase tracking-[0.2em] text-espresso transition hover:text-gold-deep"
            >
              Discover Our Approach
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1.5" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
