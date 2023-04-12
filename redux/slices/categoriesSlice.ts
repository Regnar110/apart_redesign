import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

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


export const getCategories = (state:RootState) => {
    return state.categories
}