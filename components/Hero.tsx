import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { BRAND, IMAGES } from "@/lib/product";

export default function Hero() {
  return (
    <section className="mx-auto max-w-page px-6 pb-16 pt-12 md:px-10 md:pb-28 md:pt-20">
      <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        {/* Type block */}
        <div className="order-2 lg:order-1">
          <p className="label text-ink/50">The Drop · 2026</p>
          <h1 className="display mt-6 text-[18vw] leading-[0.82] sm:text-[14vw] lg:text-[10vw]">
            {BRAND}
          </h1>
          <p className="mt-8 max-w-md text-balance text-2xl font-medium leading-tight tracking-tight md:text-3xl">
            One piece. One run. Built to outlast the season.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#buy"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-paper transition-transform hover:-translate-y-0.5"
            >
              Buy now
              <ArrowDown
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
            <span className="label text-ink/50">Limited to 250 units</span>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-ink/15 bg-ink/5">
            <Image
              src={IMAGES.hero}
              alt={`${BRAND} hero product`}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
