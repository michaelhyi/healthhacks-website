import Stripe from 'stripe';
import nextConnect from 'next-connect';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const handler = nextConnect();

handler.post(async (req, res) => {
  const { priceId } = req.body;
  const { email } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${req.headers.origin}/confirm/success`, // ./success?session_id={CHECKOUT_SESSION_ID}
      cancel_url: `${req.headers.origin}/`,
      metadata: {
        email: email
      }
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: { message: error.message } });
  }
});

export default handler;