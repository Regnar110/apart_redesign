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



// SELEKTORY

export const categorizedProducts = (state:RootState, _ref:string) => {
    const data = Object.entries(state.products).filter(el => {
        return el[1][0].category._ref === _ref
    })
    return data
}

export const selectedProduct = ((state:RootState, _id:string, category_ref:string) => {
    const targetedCategory = categorizedProducts(state, category_ref)
    return targetedCategory.map(el => {
        return el[1].filter(el => el._id === _id)
    })
})


    export const getFourRandomtAmountProducts = ((state:RootState, amount = 4) => {
        const productIds = Object.keys(state.products);
        const selectedProductIds = new Set<string>(); // towrzy zestaw unikalnych wartości wskazanego typu - tutaj string. Jest to dobre rozwiązanie gdy chcemy tylko "Zerknąć" na unikalne wartości
        // w tym zestawie. Nie jest to dobra opcja keidy chcemy iterować przez wartośći w zestawie np używając map, filter, reduce lub np include.
        const selectedProducts: Product[] = [];
        while (selectedProducts.length < amount && selectedProductIds.size < productIds.length) { // pętla wykonuje się do momentu spełnienia warunków.
            const randomProductId = productIds[Math.floor(Math.random() * productIds.length)] // np zegarki, biżuteria itd
            if (!selectedProductIds.has(randomProductId)) {
                selectedProductIds.add(randomProductId);
                const randomProduct = state.products[randomProductId][Math.floor(Math.random() * state.products[randomProductId].length)]; // np state.products["zegarki"] lub inne.
                if (randomProduct) {// sprawdzamy czy random product istnieje
                    selectedProducts.push(randomProduct);
                }
            }
        }
        return selectedProducts;
    });

export const getCategorizedRandomProducts = ((state:RootState, amount:number, productsCategorySlug:string) => {
    const categorizedProductArray = Object.entries(state.products).find(el => el[0]===productsCategorySlug) as Product[][]
    const repeatedProductIds = [] as string[] // tablica służąca nam do przechowywani id produktów, które już zostały wybrane
    const randomizedProducts = [] as Product[]

    if(typeof categorizedProductArray !== "undefined") { //TypeGuard - na wypadek gdyby ktoś wprowadził błędną nazwę kategorii produktów
        for(let i = 0; randomizedProducts.length<amount; i++) {
        let randomProduct = categorizedProductArray[1][Math.floor(Math.random()* categorizedProductArray[1].length)]
        console.log(randomProduct)
        if(repeatedProductIds.includes(randomProduct._id)) { // sprawdzamy czy produkt już został wybrany
            return
        } else {
            repeatedProductIds.push(randomProduct._id)
            randomizedProducts.push(randomProduct)
            }   
        }
    }

    return randomizedProducts

})

export default productsSlice.reducer