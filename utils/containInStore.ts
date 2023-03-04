import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { fetchProducts } from "../redux/slices/productsSlice";

type ReducerType = "products"

export const containInStore = <Payload>(dispatch: Dispatch<AnyAction>, payload:Payload, targetedReducer:ReducerType) => {
    switch(targetedReducer) {
        case 'products':
            dispatch(fetchProducts(payload));
            break;
    }
    
}