import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

const initialState:LoginResponse = {}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userSignIn: (state, action:PayloadAction<LoginResponse>) => {
            state = Object.assign(state, action.payload)
        },
        userSignOut:() => initialState,
        addToWishList: (state, action:PayloadAction<string>) => {
            const productIndexIfExist = state.wishList_productsRef?.findIndex(el => el === action.payload) as number
            if(productIndexIfExist >= 0) {
                state = state
            } else {
                const newState = state.wishList_productsRef?.push(action.payload)
                state = Object.assign(state, newState)   
            }

        },
        removeFromWishList: (state, action:PayloadAction<string>) => {
            const productIndexIfExist = state.wishList_productsRef?.findIndex(el => el === action.payload) as number
            if(productIndexIfExist === -1) {
                state = state
            } else {
                const newState = state.wishList_productsRef?.splice(productIndexIfExist, 1)
                state = Object.assign(state, newState)              
            }

        }
    }
})

export const { userSignIn, userSignOut, addToWishList, removeFromWishList } = userSlice.actions

export default userSlice.reducer

//Selektory

export const getLoggedUser = (state:RootState) => {
    return state.user;
}

export const isUserLogged = (state:RootState):boolean => { // W planach uzycie redux persist żeby zachowywać stan aplikacji w momencie gdy jest ona np odświeżana
   return state.user.name ? true:false
}

export const isProductAdded = (state:RootState, productId:string):boolean => {
    const isAdded = state.user.wishList_productsRef?.findIndex(el => el===productId);
    return isAdded === -1 ? false : true
}

export const wishListQuantity = (state:RootState) => state.user.wishList_productsRef?.length as number

export const getWishListProductsRefs = (state:RootState) => state.user.wishList_productsRef