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
        console.log(el[1][0]._id, _ref)
        return el[1][0].category._ref === _ref
    })
    return data
}

export const selectedProduct = ((state:RootState, _id:string) => {
    return _id
})