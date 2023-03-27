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
        userSignOut:() => initialState
    }
})

export const { userSignIn, userSignOut } = userSlice.actions

export default userSlice.reducer

//Selektory

export const getLoggedUser = (state:RootState) => {
    return state.user;
}

export const isUserLogged = (state:RootState):boolean => { // W planach uzycie redux persist żeby zachowywać stan aplikacji w momencie gdy jest ona np odświeżana
   return state.user.name ? true:false
}