import Image from "next/image";
import { images } from "@/data/gallery";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";

export function BookingCTA() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="relative mx-auto grid max-w-7xl overflow-hidden border border-gold/40 bg-champagne/40 lg:grid-cols-2">
        <Reveal className="relative order-2 flex flex-col justify-center p-8 py-14 sm:p-16 lg:order-1">
          <p className="eyebrow mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-gold" aria-hidden />
            Begin With a Conversation
          </p>
          <h2 className="font-display text-[2.6rem] leading-[1.05] sm:text-6xl">
            Let&apos;s Create Your <span className="gold-text italic">Bridal Look.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-espresso/75">
            Tell us about your special day and the look you have in mind. Let&apos;s begin with a conversation.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">Make a Booking Inquiry</Button>
            <WhatsAppCTA />
          </div>
        </Reveal>
        <div className="relative order-1 aspect-[4/3] lg:order-2 lg:aspect-auto lg:min-h-[34rem]">
          <Image
            src={images.pastel}
            alt="Sample portrait of a smiling bride in a soft pink outfit and sheer dupatta"
            fill
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[50%_22%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-champagne/40 to-transparent lg:bg-gradient-to-r lg:from-champagne/50 lg:to-transparent" />
        </div>
      </div>
    </section>
  );
}
