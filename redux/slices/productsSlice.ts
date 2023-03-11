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

export const getFourRandomtAmountProducts = ((state:RootState, amount =4) => {
    const repeatedProductIds = [] as string[] 
    let randomizedProducts = [];
    const productsArrays = Object.entries(state.products)
    for(let i = 0 ; randomizedProducts.length < amount; i++) {
        let randomProductsArray = productsArrays[Math.floor(Math.random() * productsArrays.length)] // operacja asynchroniczna dlatego poniżej sprawdzamy czy istnieje
        if(randomProductsArray) {
            let randomProduct = randomProductsArray[1][Math.floor(Math.random() * randomProductsArray.length)]
            if(repeatedProductIds.includes(randomProduct._id)) {// sprawdzamy czy produkt już został wybrany
                return
            }
            randomizedProducts.push(randomProduct)
            repeatedProductIds.push(randomProduct._id)
        }
        // let randomProduct = randomProductsArray[Math.floor(Math.random() * randomProductsArray.length)]
        // randomizedProducts.push(randomProduct)
    }
    return randomizedProducts
})

export const getCategorizedRandomProducts = ((state:RootState, amount:number, productsCategorySlug:string) => {
    const categorizedProductArray = Object.entries(state.products).find(el => el[0]===productsCategorySlug) as Product[][]
    const repeatedProductIds = [] as string[] // tablica służąca nam do przechowywani id produktów, które już zostały wybrane
    const randomizedProducts = [] as Product[]

    if(typeof categorizedProductArray !== "undefined") { //TypeGuard - na wypadek gdyby ktoś wprowadził błędną nazwę kategorii produktów
        for(let i = 0; randomizedProducts.length<amount; i++) {
        let randomProduct = categorizedProductArray[1][Math.floor(Math.random()* categorizedProductArray[1].length)]
        console.log(randomProduct)
        if(repeatedProductIds.includes(randomProduct._id)) { // sprawdzamy czy produkt już został wybrany
            return
        } else {
            repeatedProductIds.push(randomProduct._id)
            randomizedProducts.push(randomProduct)
            }   
        }
    }

    return randomizedProducts

})

export default productsSlice.reducer