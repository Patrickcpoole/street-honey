import {loadStripe} from '@stripe/stripe-js'

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe(stripePublishableKey)
  }
  return stripePromise
}

export default getStripe


