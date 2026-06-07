import { Layers, Hash, Globe } from "lucide-react";

const POINTS = [
  {
    icon: Layers,
    title: "Premium fabric",
    body: "320gsm combed cotton, garment-dyed for a worn-in hand from the first wear.",
  },
  {
    icon: Hash,
    title: "Limited run",
    body: "A single numbered production of 250. Once it sells through, it's gone for good.",
  },
  {
    icon: Globe,
    title: "Ships worldwide",
    body: "Carbon-neutral delivery to every door, with tracked dispatch inside 48 hours.",
  },
];

export default function ProductDetails() {
  return (
    <section className="border-y border-ink/10">
      <div className="mx-auto grid max-w-page grid-cols-1 md:grid-cols-3">
        {POINTS.map(({ icon: Icon, title, body }, i) => (
          <div
            key={title}
            className={`px-6 py-12 md:px-10 md:py-16 ${
              i !== 0 ? "border-t border-ink/10 md:border-l md:border-t-0" : ""
            }`}
          >
            <Icon size={22} strokeWidth={1.5} className="text-ink" />
            <h3 className="mt-6 text-lg font-semibold tracking-tight">
              {title}
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/60">
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
