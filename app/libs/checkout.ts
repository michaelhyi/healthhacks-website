import { Stripe, loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import qs from "query-string";
import { FieldValues } from "react-hook-form";

export async function checkout(
  userId: string,
  data: FieldValues,
  {
    lineItems,
  }: {
    lineItems: { price: string; quantity: number }[];
  }
) {
  let stripePromise: Promise<Stripe | null>;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
      );
    }
    return stripePromise;
  };

  const stripe = await getStripe();
  const token = await axios.post("/api/payment/token", { userId });

  const date = {
    date: data.liabilityDate,
  };

  const updatedQuery: any = {
    userId,
    inPerson: data.inPerson,
    firstTrack: data.firstTrack,
    secondTrack: data.secondTrack,
    liabilitySignature: data.liabilitySignature,
    liabilityDate: JSON.stringify(date),
    other: data.other,
    paid: data.paid,
    token: token.data,
  };

  const url = qs.stringifyUrl(
    { url: "/", query: updatedQuery },
    { skipNull: true }
  );

  await stripe!.redirectToCheckout({
    mode: "payment",
    lineItems,
    successUrl: `${window.location.origin}/confirm/success${url}`,
    cancelUrl: `${window.location.origin}/confirm/failure`,
  });
}
