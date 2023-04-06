import categoryReducer from "./slices/categoriesSlice";
import productsReducer from "./slices/productsSlice";
import userReducer from './slices/userSlice'
import localBasketReducer from './slices/localBasketSlice'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ["products, categories"],// stan, który nie będzie cachowany w pamięci podręcznej przeglądarki. Jedynym stanem, który będzie się "Zapamiętywał" będzie user i localbasker ponieważ categories i products mogą się zmieniać dynamicznie jeżeli np ktoś doda nowe produkty
    whitelist: ["user"] 
  }
  export const rootReducers = combineReducers({
    user: userReducer,
    products: productsReducer,
    categories: categoryReducer,
    localBasket: localBasketReducer,
  })
  const persistedReducer = persistReducer(persistConfig, rootReducers)
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
  setupListeners(store.dispatch)

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
// export const store = configureStore({
//     reducer: {
//         products: productsReducer,
//         categories: categoryReducer,
//         user: userReducer
//     }
// })
export default store;
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch