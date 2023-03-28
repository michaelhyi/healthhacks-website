// pages/api/stripe-webhook.ts

import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const event = req.body;
    const session = event.data.object as Stripe.Checkout.Session;
    let email = null
    if(session.metadata && session.metadata.email) {
      email = session.metadata.email;
    }
    try {
      if (event.type === 'checkout.session.completed') {
        // Payment is successful, perform your desired actions here
        // You can access the customer ID, price ID, etc. from the session object.

        //if(email) console.log(`Payment successful for customer ID: ${email}`);
        
        // Send a response to acknowledge receipt of the event

        // Update the user's payment status in the database
        if (email) {
          try {
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL!, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                query: `
                  mutation updatePayment($email: String!, $status: Boolean!) {
                    updatePayment(email: $email, status: $boolean) {
                      email
                      paid
                    }
                  }
                `,
                variables: {
                  email: email,
                  paid: true,
                },
              }),
            });

            const json = await response.json();

            if (json.errors) {
              console.error(`GraphQL error: ${JSON.stringify(json.errors)}`);
            } else {
              console.log(`Payment successful for customer ID: ${email}`);
            }
          } catch (err) {
            console.error(`Error occurred during GraphQL update: ${err instanceof Error ? err.message : 'Unknown error'}`);
          }
        }

        // Send a response to acknowledge receipt of the event
        res.status(200).json({ received: true });
      } else {
        //console.warn(`Unhandled event type: ${event.type}`);
        //console.log(email)
        res.status(400).end();
      }
    } catch (err) {
      console.error(`Error occurred during webhook processing: ${err instanceof Error ? err.message : 'Unknown error'}`);
      res.status(400).end();
    }
    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
    }
}