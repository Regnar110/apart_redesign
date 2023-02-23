import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
  // Component to aktualna strona która jest wyświetlana
  // umożliwia on wysyłanie propsów do każdej wyświetlanej aktualnie strony(page)
}

export default MyApp
