import { NextResponse } from "next/server";
import Stripe from "stripe";
import { PRODUCT } from "@/lib/product";

export async function POST(req: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      { error: "Stripe is not configured. Set STRIPE_SECRET_KEY in .env.local." },
      { status: 500 }
    );
  }

  const stripe = new Stripe(secretKey);

  const { size } = await req.json().catch(() => ({ size: "" }));

  // Build the absolute base URL from the incoming request so success/cancel
  // redirects work in dev and on any deployed host.
  const origin = req.headers.get("origin") ?? new URL(req.url).origin;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: PRODUCT.currency.toLowerCase(),
            unit_amount: Math.round(PRODUCT.price * 100),
            product_data: { name: PRODUCT.name },
          },
        },
      ],
      success_url: `${origin}/?checkout=success`,
      cancel_url: `${origin}/?checkout=cancelled`,
      metadata: { size: size ?? "" },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Checkout failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
