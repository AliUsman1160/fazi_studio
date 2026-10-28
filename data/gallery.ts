// All image sources live here. Replace `src` with the studio's own photographs
// (put files in /public/images and use "/images/your-file.jpg").
//
// NOTE: the current photographs are free-to-use Unsplash sample images used as placeholders.
// They do NOT depict Fazi Studio clients or confirmed Fazi Studio work.

export type GalleryCategory = "Barat" | "Walima" | "Nikkah" | "Mehndi" | "Party Makeup" | "Hair Styling";
export type Ratio = "portrait" | "landscape" | "square";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  title: string;
  ratio: Ratio;
  /** object-position for cropping, e.g. "50% 20%" */
  focus?: string;
};

const img = (id: string) => `/images/${id}.jpg`;

export const images = {
  heroBride: img("1721324807072-784ab8ddf166"),
  portraitGreen: img("1721324807083-e9ddaa99310e"),
  blueBride: img("1747847471517-952a3eb93a89"),
  goldenCandle: img("1707665231481-f0d3e1fceb0b"),
  redVeil: img("1631549423660-c10874dc335f"),
  redRose: img("1631549423034-ceb712f24ab2"),
  goldJewelry: img("1600685890506-593fdf55949b"),
  redLehenga: img("1610047614301-13c63f00c032"),
  softVeil: img("1610047520958-b42ebcd2f6cb"),
  pastel: img("1588842867976-fd084ca2c87b"),
  magenta: img("1610173827043-9db50e0d8ef9"),
  blackGold: img("1634990107480-1422c742f9b5"),
  necklace: img("1669257977776-fc39c92c4147"),
  noseRing: img("1684868265714-fd2300637c23"),
  redWall: img("1684868268327-7e5590bcfbd6"),
  palace: img("1707576618343-26a1b377ca7a"),
  fullRed: img("1707665231486-4c1d66a15b80"),
  henna: img("1542042161784-26ab9e041e89"),
  hennaGroup: img("1505932794465-147d1f1b2c97"),
  palette: img("1512496015851-a90fb38ba796"),
  kit: img("1764269719546-afc8567db7c6"),
  applying: img("1773688189414-7637b9b138e1"),
  updo: img("1774814304885-bb5cc796a6c3"),
  sheerVeil: img("1779675257929-ae3dbf2ad924"),
};

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: images.redVeil, alt: "Bride in a deep red embroidered dupatta with a rose in her hair and bold red lip", category: "Barat", title: "Traditional red bridal look", ratio: "portrait", focus: "50% 25%" },
  { id: "g2", src: images.pastel, alt: "Smiling bride in a soft pink outfit with a sheer dupatta and gold tikka", category: "Nikkah", title: "Soft-glam Nikkah look", ratio: "portrait", focus: "50% 25%" },
  { id: "g3", src: images.blueBride, alt: "Bride in a teal and gold embellished outfit seated on an ornate gilded chair", category: "Walima", title: "Elegant Walima look", ratio: "landscape", focus: "50% 25%" },
  { id: "g4", src: images.goldenCandle, alt: "Bride in golden-toned bridal attire holding glowing fairy lights", category: "Barat", title: "Golden-toned Barat look", ratio: "portrait", focus: "50% 30%" },
  { id: "g5", src: images.softVeil, alt: "Bride in a pastel-toned embroidered dupatta lifting the veil with a soft smile", category: "Nikkah", title: "Contemporary pastel bridal look", ratio: "portrait", focus: "50% 20%" },
  { id: "g6", src: images.redRose, alt: "Bride in a red outfit with a sculpted updo, red roses and statement earrings", category: "Barat", title: "Classic Pakistani bridal look", ratio: "portrait", focus: "50% 25%" },
  { id: "g7", src: images.goldJewelry, alt: "Close-up of a bride's smoky eye makeup, gold matha patti, jhumkas and layered necklace", category: "Barat", title: "Bridal jewelry and eye makeup detail", ratio: "portrait", focus: "50% 30%" },
  { id: "g8", src: images.noseRing, alt: "Close-up of a bride with glittering eye makeup, nose ring and embellished neckline", category: "Barat", title: "Shimmer eye detail", ratio: "landscape", focus: "50% 30%" },
  { id: "g9", src: images.magenta, alt: "Bride in a magenta outfit with bangles, henna and a heavy gold necklace", category: "Mehndi", title: "Vibrant Mehndi styling", ratio: "portrait", focus: "50% 25%" },
  { id: "g10", src: images.henna, alt: "Close-up of a bride's hand with intricate red henna and a floral gajra bracelet", category: "Mehndi", title: "Henna and floral gajra detail", ratio: "square", focus: "50% 50%" },
  { id: "g11", src: images.hennaGroup, alt: "Hands decorated with intricate black henna designs gathered together", category: "Mehndi", title: "Mehndi celebration henna", ratio: "landscape", focus: "50% 50%" },
  { id: "g12", src: images.blackGold, alt: "Woman in a black and gold embroidered outfit with elegant jewelry and henna-decorated hands", category: "Party Makeup", title: "Evening occasion glam", ratio: "portrait", focus: "50% 25%" },
  { id: "g13", src: images.updo, alt: "Bride in a white robe having her makeup applied with her hair in a soft updo", category: "Hair Styling", title: "Bridal updo styling", ratio: "portrait", focus: "50% 25%" },
  { id: "g14", src: images.sheerVeil, alt: "Soft profile of a woman beneath a sheer veil in warm natural light", category: "Hair Styling", title: "Veil and dupatta setting", ratio: "portrait", focus: "50% 40%" },
  { id: "g15", src: images.applying, alt: "Makeup artist applying blush to a bride preparing for her wedding", category: "Party Makeup", title: "Makeup application", ratio: "landscape", focus: "50% 30%" },
  { id: "g16", src: images.redLehenga, alt: "Bride seated in a red and gold embroidered lehenga with layered bangles", category: "Walima", title: "Rich red and gold ensemble", ratio: "landscape", focus: "50% 25%" },
  { id: "g17", src: images.palette, alt: "Flat lay of an eyeshadow palette, foundation and makeup brushes", category: "Party Makeup", title: "Makeup artistry essentials", ratio: "square", focus: "50% 50%" },
  { id: "g18", src: images.necklace, alt: "Bride with pink eye makeup, gold nose ring and a heavy gold necklace", category: "Walima", title: "Gold jewelry portrait", ratio: "portrait", focus: "50% 25%" },
];

/** Curated six for the homepage "Signature Bridal Looks" section (IDs from galleryImages). */
export const signatureLookIds = ["g1", "g2", "g3", "g4", "g5", "g6"];

/** Preview strip on the homepage (IDs from galleryImages). */
export const previewIds = ["g7", "g13", "g16", "g10", "g14", "g18", "g11"];

export const galleryCategories: ("All" | GalleryCategory)[] = ["All", "Barat", "Walima", "Nikkah", "Mehndi", "Party Makeup", "Hair Styling"];

export const getGalleryImage = (id: string) => galleryImages.find((g) => g.id === id)!;
