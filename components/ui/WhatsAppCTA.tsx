import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";

/** Renders nothing unless a verified WhatsApp number is configured in data/site-config.ts */
export function WhatsAppCTA({
  message = "Hello Fazi Studio, I would like to enquire about bridal makeup.",
  className = "",
}: {
  message?: string;
  className?: string;
}) {
  const number = siteConfig.contact.whatsapp.replace(/\D/g, "");
  if (!number) return null;
  return (
    <a
      href={`https://wa.me/${number}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center gap-2 rounded-full border border-[#25D366]/60 px-6 py-3 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-espresso transition hover:bg-[#25D366] hover:text-white ${className}`}
    >
      <MessageCircle size={18} aria-hidden /> Chat on WhatsApp
    </a>
  );
}
