import { Instagram, Twitter, Mail } from "lucide-react";
import { BRAND } from "@/lib/product";

const LINKS = [
  { label: "Shipping", href: "#" },
  { label: "Returns", href: "#" },
  { label: "Sizing", href: "#" },
  { label: "Contact", href: "#" },
];

const SOCIAL = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "Email", href: "#", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="mx-auto max-w-page px-6 py-14 md:px-10 md:py-20">
      <div className="flex flex-col gap-10 border-t border-ink/10 pt-10 md:flex-row md:items-center md:justify-between">
        <div className="display text-3xl tracking-tightest md:text-4xl">
          {BRAND}
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="label text-ink/60 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-4">
          {SOCIAL.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition-colors hover:bg-ink hover:text-paper"
            >
              <Icon size={16} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>

      <p className="mt-10 text-xs text-ink/40">
        © {new Date().getFullYear()} {BRAND}. All rights reserved.
      </p>
    </footer>
  );
}
