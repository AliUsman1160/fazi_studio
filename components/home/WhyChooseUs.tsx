import { Sparkles, Eye, CalendarHeart, MessagesSquare } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const features = [
  { Icon: Sparkles, title: "Personalized Looks", text: "Styling designed around the bride's preferences and occasion." },
  { Icon: Eye, title: "Attention to Detail", text: "Thoughtful coordination of makeup, hairstyle, and overall bridal appearance." },
  { Icon: CalendarHeart, title: "Occasion-Focused Styling", text: "Looks tailored to the character of the celebration." },
  { Icon: MessagesSquare, title: "A Considered Experience", text: "A clear, welcoming consultation process to discuss the bride's vision." },
];

export function WhyChooseUs() {
  return (
    <section className="relative px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Choose Fazi Studio?"
          title={<>Your Vision, Our <span className="gold-text italic">Attention to Detail.</span></>}
        />
        <div className="mt-16 grid gap-px overflow-hidden border border-gold/30 bg-gold/30 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.08} className="h-full">
              <div className="group relative h-full bg-ivory p-9 transition-colors duration-500 hover:bg-espresso hover:text-ivory">
                <span className="grid h-14 w-14 place-items-center rounded-full border border-gold/60 text-gold-deep transition-all duration-500 group-hover:rotate-[360deg] group-hover:border-gold group-hover:text-gold">
                  <Icon size={24} aria-hidden />
                </span>
                <h3 className="font-display mt-8 text-2xl">{title}</h3>
                <p className="mt-3 leading-relaxed text-espresso/70 transition-colors group-hover:text-ivory/75">{text}</p>
                <span className="font-display absolute right-6 top-4 text-6xl text-champagne/70 transition-colors group-hover:text-gold/30" aria-hidden>
                  0{i + 1}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
