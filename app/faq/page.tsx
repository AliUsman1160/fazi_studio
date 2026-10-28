import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { faqs } from "@/data/faqs";
import { images } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about making a bridal makeup and hair inquiry with Fazi Studio in Lahore.",
  openGraph: { title: "FAQ | Fazi Studio", description: "Common questions about bridal makeup inquiries.", url: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        breadcrumb="FAQ"
        eyebrow="Questions"
        title={<>Frequently asked <span className="gold-text italic">questions.</span></>}
        description="Helpful starting points for your inquiry. The studio confirms all details directly."
        image={images.redLehenga}
        alt="Sample photograph of a bride in a red and gold embroidered lehenga"
        focus="50% 20%"
      />
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <Accordion items={faqs} />
          <div className="mt-16 text-center">
            <p className="font-display text-3xl">Still have a question?</p>
            <p className="mx-auto mt-3 max-w-md text-espresso/70">Get in touch and the studio will be happy to help.</p>
            <Button href="/contact#inquiry" className="mt-8">Contact the Studio</Button>
          </div>
        </div>
      </section>
    </>
  );
}
