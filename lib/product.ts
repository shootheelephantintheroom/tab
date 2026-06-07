// Single source of truth for the drop. Rename `BRAND` / `PRODUCT` when ready.
export const BRAND = "Tab";

export const PRODUCT = {
  name: "Drop 001 — Heavyweight Tee",
  price: 60,
  currency: "USD",
  sizes: ["XS", "S", "M", "L", "XL"] as const,
};

// Local product imagery (served from /public/images).
export const IMAGES = {
  hero: "/images/hero.jpg",
  gallery: [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
  ],
};

export type Size = (typeof PRODUCT.sizes)[number];
