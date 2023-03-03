import { createContext, FC } from "react";

const productContext = createContext<ProductList | null>(null);

export const ProductProvider:FC<ProductList> = (products, {children}) => {
    return (
        <productContext.Provider value={products}>
        {children}
        </productContext.Provider>
    );
}