import { Dispatch } from "react";
import { autoFetch } from "./autoFetch";
import { AnyAction } from "@reduxjs/toolkit";
import { addToLocalBasket } from "../redux/slices/localBasketSlice";

export const basketActionsHandler = async (action:string, product_id:string, dispatch:Dispatch<AnyAction>) => {
    switch(action) {
        case "ADD": 
            console.log(action, product_id)
            dispatch(addToLocalBasket(product_id))
            break;
        case "REMOVE":
            
            break;
    }
}

//ksozyk będzie aktualizowany przy wylogowywaniu w mongo db w oparciu o lokalny koszyk.
// przy logowaniu użytkownik będzie korzystał z lokalnego koszyka.
// jeżeli lokalny ksozyk będzie pusty wypełnimy go koszykiem z bazy danyc hużytkownika. Ma to na celu keidy użytkownik zaloguje się z innego urządzenia to lokalny koszyk zostanie
// uzupełniony tym co jest w koszyku użytkownika.