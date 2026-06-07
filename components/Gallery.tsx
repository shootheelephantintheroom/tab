import Image from "next/image";
import { IMAGES } from "@/lib/product";

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-page px-6 py-20 md:px-10 md:py-28">
      <div className="flex items-end justify-between">
        <h2 className="display text-4xl md:text-6xl">The look</h2>
        <p className="label hidden text-ink/50 sm:block">Studio · 2026</p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 md:mt-14 md:grid-cols-4 md:gap-4">
        {IMAGES.gallery.map((src, i) => (
          <div
            key={src}
            className="relative aspect-[3/4] overflow-hidden border border-ink/15 bg-ink/5"
          >
            <Image
              src={src}
              alt={`Product shot ${i + 1}`}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
