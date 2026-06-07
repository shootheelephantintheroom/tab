"use client";

import { useState } from "react";
import Image from "next/image";
import { PRODUCT, IMAGES, type Size } from "@/lib/product";

export default function BuySection() {
  const [size, setSize] = useState<Size | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleCheckout(e: React.MouseEvent<HTMLButtonElement>) {
    const selectedSize = e.currentTarget.dataset.size ?? "";
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ size: selectedSize }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("Checkout error:", data.error);
        alert(data.error ?? "Checkout failed. Please try again.");
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      alert("Checkout failed. Please try again.");
      setLoading(false);
    }
  }

  return (
    <section id="buy" className="border-t border-ink/10 bg-ink text-paper">
      <div className="mx-auto grid max-w-page grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-square w-full lg:aspect-auto lg:min-h-[640px]">
          <Image
            src={IMAGES.hero}
            alt={PRODUCT.name}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Purchase panel */}
        <div className="flex flex-col justify-center px-6 py-16 md:px-14 md:py-20">
          <p className="label text-paper/50">Available now</p>
          <h2 className="display mt-5 text-4xl md:text-5xl">{PRODUCT.name}</h2>

          <p className="mt-6 text-3xl font-semibold tracking-tight">
            ${PRODUCT.price}
            <span className="ml-2 align-middle text-sm font-normal text-paper/50">
              {PRODUCT.currency}
            </span>
          </p>

          {/* Size selector */}
          <div className="mt-10">
            <div className="flex items-center justify-between">
              <span className="label text-paper/60">Select size</span>
              {size && (
                <span className="label text-paper/40">Selected · {size}</span>
              )}
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {PRODUCT.sizes.map((s) => {
                const active = s === size;
                return (
                  <button
                    key={s}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setSize(s)}
                    className={`h-12 min-w-12 rounded-full border px-4 text-sm font-medium transition-colors ${
                      active
                        ? "border-paper bg-paper text-ink"
                        : "border-paper/30 text-paper hover:border-paper"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Checkout — wired to Stripe next */}
          <button
            id="checkout-btn"
            type="button"
            data-size={size ?? ""}
            disabled={!size || loading}
            onClick={handleCheckout}
            className="mt-12 inline-flex h-14 items-center justify-center rounded-full bg-paper text-sm font-medium uppercase tracking-[0.15em] text-ink transition-transform enabled:hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {loading ? "Redirecting…" : size ? "Buy now" : "Select a size"}
          </button>

          <p className="mt-5 text-xs text-paper/40">
            Secure checkout · Free worldwide shipping · 30-day returns
          </p>
        </div>
      </div>
    </section>
  );
}
