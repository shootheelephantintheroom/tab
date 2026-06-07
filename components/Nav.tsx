import Link from "next/link";
import { BRAND } from "@/lib/product";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-page items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="display text-xl tracking-tightest md:text-2xl"
        >
          {BRAND}
          <span className="align-top text-[0.5em] font-medium tracking-normal">
            ®
          </span>
        </Link>

        <nav className="flex items-center gap-8">
          <a
            href="#gallery"
            className="label hidden text-ink/60 transition-colors hover:text-ink sm:block"
          >
            Gallery
          </a>
          <a
            href="#buy"
            className="label rounded-full border border-ink px-5 py-2 transition-colors hover:bg-ink hover:text-paper"
          >
            Buy
          </a>
        </nav>
      </div>
    </header>
  );
}
