import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { urlFor } from "../../sanity";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const items: LocalBasket = req.body.payload;
    // Transformitems to obiekt, który przedstawia strukture danych, której wymaga Stipe
    const transformedItems = items.map((item) => ({
      price_data: {
        currency: "pln",
        product_data: {
          name: item.product_name,
          images: [urlFor(item.product_img[0]).url()],
        },
        unit_amount: item.price * 100, // cena przedstawiona w groszach
      },
      quantity: item.quantity,
    }));

    try {
      // Utworzenie checkout session z parametrów body
      const params: Stripe.Checkout.SessionCreateParams = {
        payment_method_types: ["card"],
        // shipping_address_collection: {
        //   allowed_countries: ["US", "CA", "GB"],
        // },
        line_items: transformedItems,
        payment_intent_data: {},
        mode: "payment",
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/confirm`,
        metadata: {
          images: JSON.stringify(items.map((item) => item.product_img[0].asset.url)),
        },
      };
      const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create(params);

      res.status(200).json(checkoutSession);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Internal server error";
      res.status(500).json({ statusCode: 500, message: errorMessage });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}