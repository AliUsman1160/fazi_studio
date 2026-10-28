import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FilterableGallery } from "@/components/gallery/FilterableGallery";
import { Button } from "@/components/ui/Button";
import { images } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Bridal Gallery",
  description:
    "Browse bridal looks by occasion — Barat, Walima, Nikkah, Mehndi, party makeup and hair styling. Sample imagery for inspiration; contact Fazi Studio to discuss your look.",
  openGraph: { title: "Bridal Gallery | Fazi Studio", description: "Browse bridal looks by occasion.", url: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        breadcrumb="Bridal Gallery"
        eyebrow="Bridal Gallery"
        title={<>A portfolio of <span className="gold-text italic">bridal beauty.</span></>}
        description="Browse looks by occasion. Photography shown here is sample imagery for inspiration, not confirmed work by Fazi Studio."
        image={images.goldenCandle}
        alt="Sample photograph of a bride in golden attire holding glowing fairy lights"
        focus="50% 35%"
      />
      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <FilterableGallery />
          <div className="mt-20 text-center">
            <p className="font-display text-3xl sm:text-4xl">Found a look you love?</p>
            <p className="mx-auto mt-3 max-w-md text-espresso/70">Share it with the studio and discuss how it can be tailored to you.</p>
            <Button href="/contact#inquiry" className="mt-8">Make a Booking Inquiry</Button>
          </div>
        </div>
      </section>
    </>
  );
}
