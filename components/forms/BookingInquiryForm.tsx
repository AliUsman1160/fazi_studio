"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, MessageCircle, RotateCcw } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const eventTypes = ["Barat", "Walima", "Nikkah", "Engagement", "Mehndi", "Party / Guest", "Other"];

type Values = {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  service: string;
  details: string;
};
type Errors = Partial<Record<keyof Values, string>>;

const empty: Values = { name: "", phone: "", email: "", eventType: "", eventDate: "", service: "", details: "" };

export function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  // Accepts local (03XX XXXXXXX) and international (+92 3XX XXXXXXX) formats, 10–13 digits.
  const digits = v.phone.replace(/[\s\-()]/g, "");
  if (!/^\+?\d{10,13}$/.test(digits)) e.phone = "Enter a valid phone number, e.g. 0300 1234567 or +92 300 1234567.";
  if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (!v.eventType) e.eventType = "Please choose an event type.";
  if (!v.eventDate) e.eventDate = "Please select your event date.";
  else if (new Date(v.eventDate) < new Date(new Date().toDateString())) e.eventDate = "Event date cannot be in the past.";
  if (!v.service) e.service = "Please choose a preferred service.";
  return e;
}

const fieldCls = (err?: string) =>
  cn(
    "w-full rounded-none border-0 border-b bg-transparent px-0 py-3 text-base text-espresso outline-none transition placeholder:text-espresso/35 focus:border-gold-deep",
    err ? "border-rose" : "border-espresso/25",
  );

function Field({ id, label, optional, error, children }: { id: string; label: string; optional?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow mb-1 block !text-espresso/60">
        {label} {optional && <span className="normal-case tracking-normal text-espresso/40">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-[#a64b4b]">
          {error}
        </p>
      )}
    </div>
  );
}

export function BookingInquiryForm() {
  const params = useSearchParams();
  const [values, setValues] = useState<Values>(() => {
    const wanted = params.get("service");
    const match = services.find((s) => s.id === wanted);
    return { ...empty, service: match ? match.title : "" };
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    // Frontend demo only: nothing is sent or stored anywhere.
    setSubmitted(true);
  };

  const waNumber = siteConfig.contact.whatsapp.replace(/\D/g, "");
  const waMessage = `Hello Fazi Studio, I would like to make a booking inquiry.\n\nName: ${values.name}\nPhone: ${values.phone}\nEvent: ${values.eventType}\nDate: ${values.eventDate}\nService: ${values.service}${values.details ? `\nDetails: ${values.details}` : ""}`;

  if (submitted) {
    return (
      <div role="status" className="border border-gold/40 bg-white p-8 sm:p-12">
        <CheckCircle2 className="text-gold-deep" size={44} aria-hidden />
        <h3 className="font-display mt-5 text-3xl sm:text-4xl">Thank you, {values.name.split(" ")[0]}. Your details look great.</h3>
        <p className="mt-4 rounded-sm border border-rose/50 bg-blush px-4 py-3 text-sm leading-relaxed text-espresso/80">
          <strong>This is a demo form.</strong> Nothing was sent or saved, and the studio has not received this inquiry. To
          actually enquire, please contact Fazi Studio directly using the contact details on this page.
        </p>
        <dl className="mt-6 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
          {[
            ["Event", values.eventType],
            ["Date", values.eventDate],
            ["Service", values.service],
            ["Phone", values.phone],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="eyebrow !text-espresso/50">{k}</dt>
              <dd className="mt-0.5 text-base">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8 flex flex-wrap gap-3">
          {waNumber && (
            <a
              href={`https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#25D366] px-7 py-3 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-white"
            >
              <MessageCircle size={18} aria-hidden /> Continue on WhatsApp
            </a>
          )}
          <Button
            variant="secondary"
            onClick={() => {
              setValues(empty);
              setSubmitted(false);
            }}
          >
            <RotateCcw size={16} aria-hidden /> Start again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-7 border border-gold/30 bg-white p-6 shadow-[0_30px_60px_-40px_rgba(48,37,34,.35)] sm:p-10">
      <div className="grid gap-7 sm:grid-cols-2">
        <Field id="f-name" label="Full name" error={errors.name}>
          <input id="f-name" autoComplete="name" value={values.name} onChange={set("name")} aria-invalid={!!errors.name} aria-describedby={errors.name ? "f-name-error" : undefined} className={fieldCls(errors.name)} placeholder="Your full name" />
        </Field>
        <Field id="f-phone" label="Phone number" error={errors.phone}>
          <input id="f-phone" type="tel" inputMode="tel" autoComplete="tel" value={values.phone} onChange={set("phone")} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "f-phone-error" : undefined} className={fieldCls(errors.phone)} placeholder="0300 1234567" />
        </Field>
      </div>
      <Field id="f-email" label="Email address" optional error={errors.email}>
        <input id="f-email" type="email" autoComplete="email" value={values.email} onChange={set("email")} aria-invalid={!!errors.email} aria-describedby={errors.email ? "f-email-error" : undefined} className={fieldCls(errors.email)} placeholder="you@example.com" />
      </Field>
      <div className="grid gap-7 sm:grid-cols-2">
        <Field id="f-eventType" label="Event type" error={errors.eventType}>
          <select id="f-eventType" value={values.eventType} onChange={set("eventType")} aria-invalid={!!errors.eventType} aria-describedby={errors.eventType ? "f-eventType-error" : undefined} className={fieldCls(errors.eventType)}>
            <option value="">Select event</option>
            {eventTypes.map((t) => <option key={t}>{t}</option>)}
          </select>
        </Field>
        <Field id="f-eventDate" label="Event date" error={errors.eventDate}>
          <input id="f-eventDate" type="date" value={values.eventDate} onChange={set("eventDate")} aria-invalid={!!errors.eventDate} aria-describedby={errors.eventDate ? "f-eventDate-error" : undefined} className={fieldCls(errors.eventDate)} />
        </Field>
      </div>
      <Field id="f-service" label="Preferred service" error={errors.service}>
        <select id="f-service" value={values.service} onChange={set("service")} aria-invalid={!!errors.service} aria-describedby={errors.service ? "f-service-error" : undefined} className={fieldCls(errors.service)}>
          <option value="">Select service</option>
          {services.map((s) => <option key={s.id}>{s.title}</option>)}
        </select>
      </Field>
      <Field id="f-details" label="Additional details" optional>
        <textarea id="f-details" rows={4} value={values.details} onChange={set("details")} className={cn(fieldCls(), "resize-none")} placeholder="Outfit colour, preferred makeup style, inspiration, number of people…" />
      </Field>
      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" className="w-full sm:w-auto">Make a Booking Inquiry</Button>
        <p className="text-xs leading-relaxed text-espresso/55 sm:max-w-[16rem]">
          Demo form: your details stay in your browser and are not sent or stored.
        </p>
      </div>
    </form>
  );
}
