import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/data/gallery";

export const metadata: Metadata = {
  title: "About the Studio",
  description:
    "Discover the Fazi Studio approach to bridal beauty in Lahore — personalized looks, attention to detail and a considered consultation experience.",
  openGraph: { title: "About | Fazi Studio", description: "The Fazi Studio approach to bridal beauty.", url: "/about" },
};

const pillars = [
  { title: "Studio Philosophy", text: "Beauty should feel like you. Every look begins by listening to the bride — her personality, her outfit and the celebration she is planning." },
  { title: "Bridal Beauty Approach", text: "Makeup and hair are designed together so the whole look feels cohesive, from complexion and eyes to hairstyle and dupatta." },
  { title: "Attention to Detail", text: "Thoughtful coordination of every element of your bridal appearance, so you can focus on enjoying the day." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About"
        eyebrow="About Fazi Studio"
        title={<>Bridal beauty, <span className="gold-text italic">thoughtfully made.</span></>}
        description="A bridal makeup and hair studio in Lahore, centered on you, your style, and your special day."
        image={images.portraitGreen}
        alt="Sample portrait of a bride in red and gold bridal wear against a deep green backdrop"
        focus="50% 20%"
      />

      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="eyebrow mb-5">Our Philosophy</p>
            <h2 className="font-display text-4xl leading-tight sm:text-6xl">
              Every bride has <span className="gold-text italic">her own story.</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-espresso/75">
              Our approach to bridal beauty is centered on understanding your preferences and creating a look that
              complements your features, outfit, and celebration.
            </p>
            <p className="mt-5 leading-relaxed text-espresso/70">
              The studio&apos;s story, team and background will be shared here once confirmed.
              <span className="ml-1 text-rose">[Placeholder — to be provided by the studio]</span>
            </p>
          </Reveal>
          <Reveal className="relative grid grid-cols-5 gap-4">
            <div className="relative col-span-3 aspect-[3/4] overflow-hidden">
              <Image src={images.redVeil} alt="Sample portrait of a bride in a red dupatta with a rose in her hair" fill sizes="(max-width:1024px) 55vw, 350px" className="object-cover object-[50%_25%]" />
            </div>
            <div className="col-span-2 mt-14 space-y-4">
              <div className="relative aspect-square overflow-hidden">
                <Image src={images.henna} alt="Sample close-up of henna-decorated hands with a floral bracelet" fill sizes="(max-width:1024px) 35vw, 250px" className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={images.updo} alt="Sample photograph of a bride with a soft updo having makeup applied" fill sizes="(max-width:1024px) 35vw, 250px" className="object-cover object-[50%_25%]" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-champagne/35 px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="How We Think" title={<>Three ideas behind <span className="gold-text italic">every look.</span></>} />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="h-full border border-gold/40 bg-ivory p-9">
                  <span className="font-display text-5xl text-gold">0{i + 1}</span>
                  <h3 className="font-display mt-4 text-2xl">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-espresso/70">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-espresso px-5 py-24 text-center text-ivory sm:px-8">
        <SectionHeading
          light
          eyebrow="Begin Your Journey"
          title={<>Let&apos;s talk about <span className="gold-text italic">your day.</span></>}
          description="Tell us about your event and the look you have in mind."
        />
        <div className="mt-10">
          <Button href="/contact#inquiry" className="!bg-ivory !text-espresso hover:!bg-gold hover:!text-white">
            Inquire About an Appointment
          </Button>
        </div>
      </section>
    </>
  );
}
