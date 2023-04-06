import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

const initialState:LocalBasket = []
interface AddPayload { 
  product_id:string;
  product_name:string;
  price:number;
  product_img:Image[]
}
export const localBasketSlice = createSlice({
    name: "localBasket",
    initialState,
    reducers: {
        addToLocalBasket: (state, action:PayloadAction<AddPayload>) => {
            const productIndex = state.findIndex(el => el.product_id === action.payload.product_id)
            if(productIndex !== -1) {
              // produkt istnieje w koszyku, zwracamy nową tablicę
              return state.map((el, index) => {
                if (index === productIndex) {
                  return {...el, quantity: el.quantity + 1}
                }
                return el
              })
            } else {
              // produkt nie istnieje w koszyku, dodajemy do tablicy
              return state.concat({
                product_id: action.payload.product_id, 
                product_name: action.payload.product_name,
                price:action.payload.price, 
                product_img:action.payload.product_img, 
                quantity: 1
              })
            }
          },
        removeFromLocalBasket: (state, action:PayloadAction<string>) => {
            state = Object.assign(state, action.payload)
        }
    }
})

export const { addToLocalBasket, removeFromLocalBasket } = localBasketSlice.actions

export default localBasketSlice.reducer

//Selektory

export const showLocalBasket = (state:RootState) => {
    return state.localBasket
}

export const getFinalPrice = (state:RootState) => state.localBasket.reduce((acc, el) => acc + (el.price * el.quantity), 0) // zlicza cenę wszystkich produktów
export const basketQuantity = (state:RootState) => state.localBasket.reduce((acc, el) => acc + el.quantity,0) // zwracamy ilość przedmiotów w koszu
    // Stan LocalBasket będzie używany tylko wtedy kiedy użytkownik jest nie zalogowany. Ponadto kiedy użytkownik stworzy nowe konto local basket będzie przkazywany jako wartość
// właściwości koszyka nowego użytkownika. W przypadku gdy gośc zaloguje się na istniejące konto to ten koszyk będzie zastepował już istniejący koszyk w stanie użytkownika.
// Dzięki temu kiedy uzytkownik nie zaloguje się jako użytkownik a doda do koszyka np dużo produktów jako gość to przy logowaniu te produkty nie znikną a zostaną przekazane
// do koszyka użytkownika, który zostanie zaaktualizowany nowymi wartościami.