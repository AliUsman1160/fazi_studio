import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/Button";

export function SignatureServices() {
  return (
    <section className="bg-white px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Signature Services"
          title={<>Bridal beauty for <span className="gold-text italic">every celebration.</span></>}
          description="From the Barat to the Walima and every festivity between, discover looks created around your outfit and your vision."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 0.1}>
              <ServiceCard service={s} index={i} />
            </Reveal>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Button href="/services" variant="secondary">View All Services</Button>
        </div>
      </div>
    </section>
  );
}
