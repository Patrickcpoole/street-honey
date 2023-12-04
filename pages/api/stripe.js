import Stripe from 'stripe';
// dev redeploy

const stripeSecretKey = process.env.NEXT_PUBLIC_NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY : process.env.NEXT_PUBLIC_STRIPE_TEST_SECRET_KEY;
const stripe = new Stripe(stripeSecretKey);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'], // Use an array here instead of a string
        billing_address_collection: 'auto',
        shipping_options: [
          { shipping_rate: 'shr_1N9CdOBbtJNcnowCgg8QfnMZ' }
        ],
        line_items: req.body.map((item) => {
          const img = item.image[0].asset._ref;
          const newImage = img.replace('image-', 'https://cdn.sanity.io/images/m6h4sq13/production/').replace('-webp', '.webp');

          return {
            
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.name,
                images: [newImage]
              },
              unit_amount: item.price * 100,
              tax_behavior: 'unspecified',
            },
            quantity: item.quantity
          };
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: req.headers.referer || req.headers.origin,
      };

      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json({ id: session.id });
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}