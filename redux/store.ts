import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categoriesSlice";
import productsReducer from "./slices/productsSlice";
import userReducer from './slices/userSlice'

// interface PreloadedState {
//     [0]:ProductList
// }

// const createStore = (preloadedState?:any) => {
//     // preloadedState - dane pobrane np z getServerSideProps(przykłądowo) tj. ze strony serwera lub inne już istniejące dane mające znaczenie dla tej funkcji
//     return configureStore({
//         reducer: {
//             products: productsReducer
//         },
//         preloadedState
//     })
// }

// let store:any;
// export const initialiseStore = (preloadedState?:Partial<PreloadedState>) => {
//   let _store = store ?? createStore(preloadedState); // jeżeli store jest null lub undefined to zwracamy right side operand czyli createStore. Jeżeli store nie istnieje, tworzymy nowy. Jeżeli istnieje nic nie robimy
//     //preloadedState najczęściej będą propsami pobranymi w wyniku getServerSideProps lub getStaticProps
//   if (preloadedState && store) { // jeżeli store już istnieje i mamy wcześniejszą wersję stanu to...
//    _store = createStore({ ...store.getState(), ...preloadedState }); // aktualizujemy nasz store stanem poprzedniego store plus dodajemy preloadedState
//     store = undefined;
//   }

//   // For SSG and SSR always create a new store
//   if (typeof window === 'undefined') return _store;
//   // Create the store once in the client
//   if (!store) store = _store;

//   return _store;
// };

//Zwykły store - bez integracji w SSR i SSG
export const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoryReducer,
        user: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch