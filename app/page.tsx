import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { Introduction } from "@/components/home/Introduction";
import { SignatureServices } from "@/components/home/SignatureServices";
import { BridalLooks } from "@/components/home/BridalLooks";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { BridalJourney } from "@/components/home/BridalJourney";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { BookingCTA } from "@/components/home/BookingCTA";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: { absolute: "Fazi Studio | Bridal Makeup & Hair in Lahore" },
  description: siteConfig.description,
  openGraph: { title: "Fazi Studio | Bridal Makeup & Hair in Lahore", description: siteConfig.description, url: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Introduction />
      <SignatureServices />
      <BridalLooks />
      <WhyChooseUs />
      <BridalJourney />
      <GalleryPreview />
      <Testimonials />
      <BookingCTA />
    </>
  );
}
