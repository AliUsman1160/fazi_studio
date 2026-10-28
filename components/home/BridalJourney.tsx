import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { n: "01", title: "Share Your Vision", text: "Tell us about your event, outfit, preferred makeup style, and inspiration." },
  { n: "02", title: "Discuss Your Look", text: "Explore suitable styling options and discuss your requirements." },
  { n: "03", title: "Plan Your Appointment", text: "Confirm the event details and appointment arrangements directly with the studio." },
  { n: "04", title: "Get Wedding-Ready", text: "Enjoy a thoughtfully coordinated bridal beauty experience." },
];

export function BridalJourney() {
  return (
    <section className="bg-champagne/35 px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Bridal Journey"
          title={<>From Your First Consultation to <span className="gold-text italic">Your Wedding Day.</span></>}
        />

        <ol className="relative mt-20 grid gap-12 lg:grid-cols-4 lg:gap-8">
          {/* desktop horizontal line */}
          <span className="absolute left-0 right-0 top-7 hidden h-px bg-gold/50 lg:block" aria-hidden />
          {/* mobile vertical line */}
          <span className="absolute bottom-0 left-7 top-0 w-px bg-gold/50 lg:hidden" aria-hidden />
          {steps.map((s, i) => (
            <li key={s.n} className="relative pl-20 lg:pl-0 lg:pt-20">
              <Reveal delay={i * 0.12}>
                <span className="font-display absolute left-0 top-0 grid h-14 w-14 place-items-center rounded-full border border-gold bg-ivory text-xl text-gold-deep shadow-[0_0_0_8px_rgba(250,247,242,1)] lg:left-0">
                  {s.n}
                </span>
                <h3 className="font-display text-2xl sm:text-[1.7rem]">{s.title}</h3>
                <p className="mt-3 max-w-xs leading-relaxed text-espresso/70">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
