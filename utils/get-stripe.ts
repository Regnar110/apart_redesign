import { Stripe, loadStripe } from '@stripe/stripe-js'


let stripePromise: Promise<Stripe | null>

//Inicjalizuje Stripe. Robi to tylko jeden raz.
//Jeżeli stripePromise nie isnieje(stripe nie jest zainicjalizowany) to ta funkcja to zrobi
// jeżeli natomiast jest true to już drugi ra znie będzie inicjalizował.
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(`${process.env.STRIPE_KEY!}`)
  }
  return stripePromise
}

export default getStripe