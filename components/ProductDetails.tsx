const SPECS = [
  {
    no: "01",
    label: "Fabric",
    body: "320gsm combed cotton, garment-dyed for a worn-in hand from the first wear.",
  },
  {
    no: "02",
    label: "Run",
    body: "A single numbered production of 250. Once it sells through, it's gone for good.",
  },
  {
    no: "03",
    label: "Shipping",
    body: "Carbon-neutral delivery to every door, with tracked dispatch inside 48 hours.",
  },
];

export default function ProductDetails() {
  return (
    <section className="border-y border-ink/10">
      <div className="mx-auto max-w-page px-6 py-12 md:px-10 md:py-16">
        <dl>
          {SPECS.map(({ no, label, body }, i) => (
            <div
              key={no}
              className={`grid grid-cols-1 gap-2 py-6 md:grid-cols-[14rem_1fr] md:gap-10 ${
                i !== 0 ? "border-t border-ink/10" : ""
              }`}
            >
              <dt className="label font-mono text-ink/50">
                {no} · {label}
              </dt>
              <dd className="max-w-xl text-sm leading-relaxed text-ink/60">
                {body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
