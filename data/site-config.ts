// Central, editable site configuration.
// Set verified values here. Anything left empty is shown as a clearly labeled placeholder
// (or hidden entirely, e.g. the WhatsApp button).

export const siteConfig = {
  name: "Fazi Studio",
  tagline: "Bridal Makeup & Hair Studio · Lahore",
  url: "https://example.com", // TODO: replace with the live domain
  description:
    "Explore bridal makeup, occasion makeup, and hairstyling services at Fazi Studio in Lahore. Contact the studio to discuss your bridal look and appointment requirements.",
  contact: {
    phone: "", // e.g. "+92 3XX XXXXXXX" — verified number
    email: "", // verified email
    whatsapp: "", // digits only with country code, e.g. "923001234567"
    address: "", // verified studio address
    city: "Lahore, Pakistan",
    hours: "", // verified opening hours
  },
  social: {
    instagram: "", // full profile URL
    facebook: "",
    tiktok: "",
  },
};

export const placeholder = {
  phone: "[Phone number — to be confirmed]",
  email: "[Email address — to be confirmed]",
  address: "[Studio address — to be confirmed]",
  hours: "[Opening hours — to be confirmed]",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Bridal Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];
