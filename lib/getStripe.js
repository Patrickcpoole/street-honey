import {loadStripe} from '@stripe/stripe-js'
console.log('environment', process.env.NODE_ENV)
console.log('production boolean', process.env.NODE_ENV === 'production')
console.log('stripe publishable test key', process.env.NEXT_PUBLIC_STRIPE_TEST_PUBLISHABLE_KEY);
const stripePublishableKey = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY : process.env.NEXT_PUBLIC_STRIPE_TEST_PUBLISHABLE_KEY;
let stripePromise;
console.log('stripe publishable key', stripePublishableKey)
const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe(stripePublishableKey)
  }
  return stripePromise
}

export default getStripe


