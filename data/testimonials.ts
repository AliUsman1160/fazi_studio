// PLACEHOLDER CONTENT ONLY. These are NOT real client reviews.
// Replace every entry with verified testimonials (set `verified: true`) before launch.
// When all items are verified, the "placeholder" notice disappears automatically.

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  event: string;
  verified: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "[Placeholder] A genuine client review about the consultation experience will appear here.",
    name: "Client name",
    event: "Barat",
    verified: false,
  },
  {
    id: "t2",
    quote: "[Placeholder] A genuine client review about the makeup and hair styling will appear here.",
    name: "Client name",
    event: "Walima",
    verified: false,
  },
  {
    id: "t3",
    quote: "[Placeholder] A genuine client review about the overall bridal experience will appear here.",
    name: "Client name",
    event: "Nikkah",
    verified: false,
  },
];
