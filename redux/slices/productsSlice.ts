import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'


const initialState:Partial<ProductList>= {}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        fetchProducts: (state, action:PayloadAction<ProductList>) => {
            state = Object.assign(state, action.payload)
        }
    }
})

export const { fetchProducts } = productsSlice.actions

export default productsSlice.reducer

// SELEKTORY

export const categorizedProducts = (state:RootState, _ref:string) => {
    const data = Object.entries(state.products).filter(el => {
        return el[1][0].category._ref === _ref
    })
    return data
}

export const selectedProduct = ((state:RootState, _id:string, category_ref:string) => {
    const targetedCategory = categorizedProducts(state, category_ref)
    return targetedCategory.map(el => {
        return el[1].filter(el => el._id === _id)
    })
})

export const getFourRandomtAmountProducts = ((state:RootState, amount:number) => {
    let randomizedProducts = [];
    const productsArrays = Object.entries(state.products)
    for(let i = 0 ; i < amount; i++) {
        let randomProductsArray = productsArrays[Math.floor(Math.random() * productsArrays.length)] // operacja asynchroniczna dlatego poniżej sprawdzamy czy istnieje
        if(randomProductsArray) {
            let randomProduct = randomProductsArray[1][Math.floor(Math.random() * randomProductsArray.length)]
            randomizedProducts.push(randomProduct)
        }
        // let randomProduct = randomProductsArray[Math.floor(Math.random() * randomProductsArray.length)]
        // randomizedProducts.push(randomProduct)
    }
    return randomizedProducts
})