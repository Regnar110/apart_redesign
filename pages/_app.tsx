import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import { autoFetch } from '../utils/autoFetch'
import App from 'next/app'
import { fetchProducts } from '../redux/slices/productsSlice'
import { useEffect } from 'react'
import { fetchCategories } from '../redux/slices/categoriesSlice'


function MyApp({ Component, pageProps }: AppProps) {
  const {dispatch} = store
  useEffect(() => {
    dispatch(fetchProducts({...pageProps.initialReduxState.products}))
    dispatch(fetchCategories(pageProps.initialReduxState.categories.categories))
  },[])
   //inicjalizacja pooczątkowego stanu store aplikacji przy montowaniu się komponentu.
   // Bez użycia useEffect pojawi się dużo błędów!!

  return (
  <Provider store={store}>
    <Component {...pageProps}/>    
  </Provider>
  )
  // Component to aktualna strona która jest wyświetlana
  // umożliwia on wysyłanie propsów do każdej wyświetlanej aktualnie strony(page)
}

export default MyApp

MyApp.getInitialProps = async (appContext: AppContext) => { 
  const appProps = await App.getInitialProps(appContext);
  //powyżej wywołujemy inicjującą funkkcję żeby komponent App był zinstancjonowany z domyslnymi propsami z domyślnego kontekstu jego użycia.
  //appContext to obiekt zawierający m.in nasze pageProps, które są potem przekazywane dalej do komponentów dzieci MyApp
  //initialise redux store on server side
  let products = await autoFetch<ProductList>("getProducts")
  const categories = await autoFetch<Category[]>("getCategories")
  appProps.pageProps = {
    ...appProps.pageProps,
    store,
    initialReduxState: { products, categories }
  };

  return appProps;
};

//Powyższa metoda getInitialProps jest metodą statyczną wykonywaną przed wyrenderowaniem komponentu App. Metoda ta służy do jego modyfikacji.
// Metoda ta w zasadzie służy do nadpisania komponentu APP co pozwala na rozszerzenie zadań które mają być wykonane przed jego wyrenderowaniem.
//NIe można tu użyć getServerSideProps ze względu na to że nie jest to metoda dozwolona do wykorzystania przy użyciu komponentu App.

//W powyższym wypadku umożliwiamy domyślne zinicjalizowanie store Reduxa, który domyślnie ma zawierać {}. Typ stanu reduxa jest określony w store.ts
// Następnie z sotre reduxa wyciągamy metodę dispatch dzięki której możemy przekazywać do niej akcje z naszych sliców i tym samym aktualizować nasz store.
// Następnie do metody dispatch przekazujemy akcję z reducera prodctsSlice i przekazujemy jej pobrane z API produkty. Aktualizujemy nimi stan store.
//Nastepnie pageProps'y z zainicjalizowanego appProps definiujemy jako obiekt, gdzie rozprzestrzeniamy pozostałe propsy i stan domyslny stan naszego reduxa.

// do rozważenia powyższe : https://www.quintessential.gr/blog/development/how-to-integrate-redux-with-next-js-and-ssr