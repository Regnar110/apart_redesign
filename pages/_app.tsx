import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import App from 'next/app'
import { autoFetch } from '../utils/autoFetch'
import { containInStore } from '../utils/containInStore'
import { fetchProducts } from '../redux/slices/productsSlice'

function MyApp({ Component, pageProps }: AppProps) {
  // containInStore<ProductList>(store.dispatch(), pageProps.initialReduxState.products, "products")
  return (
  <Provider store={store}>
    <Component {...pageProps} />    
  </Provider>
  )
  // Component to aktualna strona która jest wyświetlana
  // umożliwia on wysyłanie propsów do każdej wyświetlanej aktualnie strony(page)
}

export default MyApp

// MyApp.getInitialProps = async (appContext: AppContext) => { 
//   const appProps = await App.getInitialProps(appContext);
//   //powyżej wywołujemy inicjującą funkkcję żeby komponent App był zinstancjonowany z domyslnymi propsami z domyślnego kontekstu jego użycia.
//   //appContext to obiekt zawierający m.in nasze pageProps, które są potem przekazywane dalej do komponentów dzieci MyApp
//   //initialise redux store on server side
//   let products = await autoFetch<ProductList>("getProducts")
//   appProps.pageProps = {
//     ...appProps.pageProps,
//     initialReduxState: {...store.getState(), products},
//   };

//   return appProps;
// };

//Powyższa metoda getInitialProps jest metodą statyczną wykonywaną przed wyrenderowaniem komponentu App. Metoda ta służy do jego modyfikacji.
// Metoda ta w zasadzie służy do nadpisania komponentu APP co pozwala na rozszerzenie zadań które mają być wykonane przed jego wyrenderowaniem.
//NIe można tu użyć getServerSideProps ze względu na to że nie jest to metoda dozwolona do wykorzystania przy użyciu komponentu App.

//W powyższym wypadku umożliwiamy domyślne zinicjalizowanie store Reduxa, który domyślnie ma zawierać {}. Typ stanu reduxa jest określony w store.ts
// Następnie z sotre reduxa wyciągamy metodę dispatch dzięki której możemy przekazywać do niej akcje z naszych sliców i tym samym aktualizować nasz store.
// Następnie do metody dispatch przekazujemy akcję z reducera prodctsSlice i przekazujemy jej pobrane z API produkty. Aktualizujemy nimi stan store.
//Nastepnie pageProps'y z zainicjalizowanego appProps definiujemy jako obiekt, gdzie rozprzestrzeniamy pozostałe propsy i stan domyslny stan naszego reduxa.

// do rozważenia powyższe : https://www.quintessential.gr/blog/development/how-to-integrate-redux-with-next-js-and-ssr