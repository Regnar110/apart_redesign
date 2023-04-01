import { addToWishList, removeFromWishList } from "../redux/slices/userSlice";
import { Dispatch } from "react";
import { AnyAction } from "@reduxjs/toolkit";
import { autoFetch } from "./autoFetch";

export const addOrRemoveFromWish = async (product_id:string, user_email:string, action:string, dispatch:Dispatch<AnyAction>, notifyAction:(toastNotofication:string, httpStatusCode:number)=>void) => {
    switch(action) {
        case "ADD": 
            dispatch(addToWishList(product_id))
            const updateWishListResponseAdd = await autoFetch<string, {action:string, product_id:string, user_email:string}>("updateWishListMongoDB", {action, product_id, user_email})
            notifyAction("Dodano produkt do listy życzeń", 200)
            console.log(updateWishListResponseAdd)
            break;
        case "REMOVE":
            dispatch(removeFromWishList(product_id))
            const updateWishListResponseRemove = await autoFetch<string, {action:string, product_id:string, user_email:string}>("updateWishListMongoDB", {action, product_id, user_email})
            notifyAction("Usunięto produkt z listy życzeń", 500)
            console.log(updateWishListResponseRemove)
            break;
    }
}