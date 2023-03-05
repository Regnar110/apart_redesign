
import { fetchProducts } from "../redux/slices/productsSlice";

type ReducerType = "products"

export const containInStore = <Payload extends ProductList>(dispatch: any, payloadArray:[Payload, ReducerType][]) => {
    Promise.resolve().then(() => {
        for(let i=0; i<payloadArray.length; i++) {
            switch(payloadArray[i][1]) {
                case "products":
                    dispatch(fetchProducts(payloadArray[i][0]));
                    break;
            }                    
        }

    })

    
}