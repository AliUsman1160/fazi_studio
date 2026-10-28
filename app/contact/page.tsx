import type { Metadata } from "next";
import { Suspense } from "react";
import { Facebook, Instagram, MapPin, Mail, Phone, Clock, Music2 } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { BookingInquiryForm } from "@/components/forms/BookingInquiryForm";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { siteConfig, placeholder } from "@/data/site-config";
import { images } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Contact & Booking Inquiry",
  description:
    "Tell Fazi Studio about your special day. Send a booking inquiry for bridal makeup and hair in Lahore and discuss your look and appointment requirements.",
  openGraph: { title: "Contact | Fazi Studio", description: "Make a bridal booking inquiry.", url: "/contact" },
};

export default function ContactPage() {
  const { contact, social } = siteConfig;
  const rows = [
    { Icon: Phone, label: "Phone", value: contact.phone, href: contact.phone ? `tel:${contact.phone.replace(/\s/g, "")}` : "", ph: placeholder.phone },
    { Icon: Mail, label: "Email", value: contact.email, href: contact.email ? `mailto:${contact.email}` : "", ph: placeholder.email },
    { Icon: Clock, label: "Hours", value: contact.hours, href: "", ph: placeholder.hours },
  ];
  const socials = [
    { label: "Instagram", href: social.instagram, Icon: Instagram },
    { label: "Facebook", href: social.facebook, Icon: Facebook },
    { label: "TikTok", href: social.tiktok, Icon: Music2 },
  ];

  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Booking Inquiry"
        title={<>Tell Us About Your <span className="gold-text italic">Special Day.</span></>}
        description="Share your event details and the look you have in mind. Let's begin with a conversation."
        image={images.heroBride}
        alt="Sample portrait of a bride lifting a blush-pink dupatta"
        focus="50% 25%"
      />

      <section id="inquiry" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          <div>
            <Suspense fallback={<div className="h-96 animate-pulse bg-champagne/40" />}>
              <BookingInquiryForm />
            </Suspense>
          </div>

          <aside className="space-y-10">
            <div>
              <h2 className="font-display text-3xl">Contact Details</h2>
              <ul className="mt-6 space-y-5">
                {rows.map(({ Icon, label, value, href, ph }) => (
                  <li key={label} className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/50 text-gold-deep">
                      <Icon size={18} aria-hidden />
                    </span>
                    <span>
                      <span className="eyebrow block !text-espresso/50">{label}</span>
                      {value ? (href ? <a href={href} className="hover:text-gold-deep">{value}</a> : value) : <span className="text-espresso/55">{ph}</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-3xl">Studio Location</h2>
              <div className="mt-6 flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/50 text-gold-deep">
                  <MapPin size={18} aria-hidden />
                </span>
                <p>
                  {contact.address || <span className="text-espresso/55">{placeholder.address}</span>}
                  <br />
                  {contact.city}
                </p>
              </div>
              <div className="mt-5 grid aspect-[16/10] place-items-center border border-dashed border-gold/60 bg-champagne/30 p-6 text-center text-sm text-espresso/55">
                Map will appear here once the studio address is confirmed.
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl">Follow Along</h2>
              <div className="mt-5 flex gap-3">
                {socials.map(({ label, href, Icon }) =>
                  href ? (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Fazi Studio on ${label}`} className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 transition hover:bg-gold hover:text-white">
                      <Icon size={18} />
                    </a>
                  ) : (
                    <span key={label} title={`${label} profile — to be added`} className="grid h-11 w-11 cursor-not-allowed place-items-center rounded-full border border-espresso/15 text-espresso/30">
                      <Icon size={18} />
                      <span className="sr-only">{label} link not yet configured</span>
                    </span>
                  ),
                )}
              </div>
              {!social.instagram && !social.facebook && !social.tiktok && (
                <p className="mt-3 text-sm text-espresso/55">Social profile links to be confirmed.</p>
              )}
              <div className="mt-6">
                <WhatsAppCTA />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
