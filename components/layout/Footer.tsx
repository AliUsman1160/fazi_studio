import Link from "next/link";
import { Instagram, Facebook, Music2, Mail, MapPin, Phone, Clock } from "lucide-react";
import { navLinks, siteConfig, placeholder } from "@/data/site-config";
import { services } from "@/data/services";
import { Wordmark } from "./Header";

export function Footer() {
  const { contact, social } = siteConfig;
  const socials = [
    { label: "Instagram", href: social.instagram, Icon: Instagram },
    { label: "Facebook", href: social.facebook, Icon: Facebook },
    { label: "TikTok", href: social.tiktok, Icon: Music2 },
  ];

  return (
    <footer className="relative overflow-hidden bg-espresso text-ivory/80">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-gold/20" aria-hidden />
      <div className="absolute -right-12 -top-12 h-72 w-72 rounded-full border border-gold/10" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-20 sm:px-8">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <Wordmark light />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/65">
              Bridal makeup and hair studio in Lahore — timeless beauty, thoughtfully created around you, your style, and
              your special day.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Fazi Studio on ${label}`}
                    className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 transition hover:bg-gold hover:text-white"
                  >
                    <Icon size={17} />
                  </a>
                ) : (
                  <span
                    key={label}
                    title={`${label} profile — to be added in data/site-config.ts`}
                    className="grid h-10 w-10 cursor-not-allowed place-items-center rounded-full border border-ivory/15 text-ivory/30"
                  >
                    <Icon size={17} />
                    <span className="sr-only">{label} link not yet configured</span>
                  </span>
                ),
              )}
            </div>
          </div>

          <div>
            <h2 className="eyebrow !text-gold">Explore</h2>
            <ul className="mt-6 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-gold">{l.label}</Link>
                </li>
              ))}
              <li><Link href="/faq" className="transition hover:text-gold">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="eyebrow !text-gold">Services</h2>
            <ul className="mt-6 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`/services#${s.id}`} className="transition hover:text-gold">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow !text-gold">Contact</h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex gap-3"><MapPin size={17} className="mt-0.5 shrink-0 text-gold" aria-hidden />
                <span>{contact.address || placeholder.address}<br />{contact.city}</span></li>
              <li className="flex gap-3"><Phone size={17} className="mt-0.5 shrink-0 text-gold" aria-hidden />
                {contact.phone ? <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-gold">{contact.phone}</a> : <span>{placeholder.phone}</span>}</li>
              <li className="flex gap-3"><Mail size={17} className="mt-0.5 shrink-0 text-gold" aria-hidden />
                {contact.email ? <a href={`mailto:${contact.email}`} className="hover:text-gold">{contact.email}</a> : <span>{placeholder.email}</span>}</li>
              <li className="flex gap-3"><Clock size={17} className="mt-0.5 shrink-0 text-gold" aria-hidden />
                <span>{contact.hours || placeholder.hours}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ivory/10 pt-6 text-xs text-ivory/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Fazi Studio. All rights reserved.</p>
          <p>Sample photography shown for illustration only — not work by Fazi Studio.</p>
        </div>
      </div>
    </footer>
  );
}
