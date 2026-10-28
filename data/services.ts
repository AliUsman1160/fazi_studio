import { images } from "./gallery";

export type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  image: string;
  alt: string;
  includes: string[];
  /** Verified price text, e.g. "From PKR 00,000". Leave empty until confirmed by the studio. */
  price?: string;
  /** Gallery categories shown as related images */
  galleryCategory: "Barat" | "Walima" | "Nikkah" | "Mehndi" | "Party Makeup" | "Hair Styling";
};

export const PRICE_FALLBACK = "Contact us for package details.";

export const services: Service[] = [
  {
    id: "barat-bridal-makeup",
    title: "Barat Bridal Makeup",
    short: "A statement bridal look designed to complement traditional wedding attire.",
    description:
      "The centrepiece look of your wedding. Discuss colour story, jewelry and outfit so the makeup is designed to complement your traditional bridal attire.",
    image: images.goldJewelry,
    alt: "Close-up of a bride with smoky eye makeup and gold bridal jewelry",
    includes: ["Look discussion around your outfit", "Complexion and eye makeup", "Coordination with hairstyle and dupatta"],
    galleryCategory: "Barat",
  },
  {
    id: "walima-makeup",
    title: "Walima Makeup",
    short: "Refined bridal beauty with a polished, elegant finish.",
    description:
      "A graceful look for the Walima celebration, often lighter and more luminous than Barat while still feeling distinctly bridal.",
    image: images.blueBride,
    alt: "Bride in a teal and gold outfit on an ornate chair, styled for a Walima",
    includes: ["Polished, elegant finish", "Matched to your Walima outfit", "Hairstyle coordination"],
    galleryCategory: "Walima",
  },
  {
    id: "nikkah-engagement",
    title: "Nikkah & Engagement",
    short: "Soft, graceful bridal looks for intimate and formal celebrations.",
    description:
      "Soft-glam looks for Nikkah and engagement ceremonies — graceful, photogenic and designed around how you want to feel.",
    image: images.pastel,
    alt: "Smiling bride in a soft pink outfit with a sheer dupatta",
    includes: ["Soft-glam or classic styling", "Light, graceful finish", "Hair and dupatta setting available"],
    galleryCategory: "Nikkah",
  },
  {
    id: "mehndi-makeup",
    title: "Mehndi Makeup",
    short: "Fresh, expressive beauty suitable for colorful wedding festivities.",
    description:
      "Fresh, expressive makeup that holds its own beside vibrant mehndi colours, florals and festive styling.",
    image: images.magenta,
    alt: "Bride in a vibrant magenta outfit with henna and bangles",
    includes: ["Fresh, expressive styling", "Works with bold outfit colours", "Light hair or floral styling options"],
    galleryCategory: "Mehndi",
  },
  {
    id: "party-makeup",
    title: "Party Makeup",
    short: "Occasion makeup for wedding guests and special events.",
    description: "Occasion makeup for wedding guests, family members and other special events.",
    image: images.blackGold,
    alt: "Woman in a black and gold outfit with polished evening makeup and jewelry",
    includes: ["Wedding guest and family looks", "Evening and event makeup", "Hair styling can be added"],
    galleryCategory: "Party Makeup",
  },
  {
    id: "hair-styling",
    title: "Hair Styling",
    short: "Hairstyling options to complement the chosen makeup look and outfit.",
    description:
      "Hairstyling designed to sit beautifully with your makeup, outfit and dupatta — from sculpted updos to soft, open styles.",
    image: images.updo,
    alt: "Bride with a soft updo having her makeup applied",
    includes: ["Styling matched to outfit and makeup", "Dupatta setting guidance", "Updos, braids and open styles"],
    galleryCategory: "Hair Styling",
  },
];
