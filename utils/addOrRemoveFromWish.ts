import { addToWishList, removeFromWishList } from "../redux/slices/userSlice";
import { Dispatch } from "react";
import { AnyAction } from "@reduxjs/toolkit";
import { autoFetch } from "./autoFetch";

export const addOrRemoveFromWish = async (product_id:string, user_email:string, action:string, dispatch:Dispatch<AnyAction>, notifyAction:(toastNotofication:string, httpStatusCode:number)=>void) => {
    switch(action) {
        case "ADD": 
            const updateWishListResponseAdd = await autoFetch<MongoDbWishListUpdateReturn, {action:string, product_id:string, user_email:string}>("updateWishListMongoDB", {action, product_id, user_email})
            if(updateWishListResponseAdd.isError) {
              notifyAction(updateWishListResponseAdd.message, 500)
              console.error(updateWishListResponseAdd.message)
              break;
            } else {
                dispatch(addToWishList(product_id))
                notifyAction(updateWishListResponseAdd.message, 200)              
                break;
            }
        case "REMOVE":
            const updateWishListResponseRemove = await autoFetch<MongoDbWishListUpdateReturn, {action:string, product_id:string, user_email:string}>("updateWishListMongoDB", {action, product_id, user_email})
            if(updateWishListResponseRemove.isError) {
              notifyAction(updateWishListResponseRemove.message, 500)  
              console.error(updateWishListResponseRemove.message)
              break;
            } else {
                dispatch(removeFromWishList(product_id))
                notifyAction(updateWishListResponseRemove.message, 200)         
                break;
            }
    }
}