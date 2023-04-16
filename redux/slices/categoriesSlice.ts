import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { selectedCategoryProductsQuantity } from './productsSlice'

const initialState:Partial<Category[]>= []

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        fetchCategories: (state, action:PayloadAction<Category[]>) => {
            state = Object.assign(state, action.payload)
        }
    }
})

export const { fetchCategories } = categoriesSlice.actions

export default categoriesSlice.reducer


export const getCategoryNameWithQuantity = (state:RootState):[Category, number][] => {
    const categoriesWithQuantity = state.categories.map(el=> {
        const quantity = selectedCategoryProductsQuantity(state, el!._id)
        return [el, quantity] as [Category, number]
    })
    return categoriesWithQuantity
}

export const getCategoryNameByItsRef = (state:RootState, category_ref:string):[Category] => {
    return state.categories.filter((el) => el && el._id ===category_ref) as [Category]
}