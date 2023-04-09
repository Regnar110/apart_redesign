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
    const product = targetedCategory[0][1].filter(el => el._id=== _id)
    return product[0]
})


    export const getRandomtAmountProducts = ((state:RootState, amount = 4) => { // funkcja zwraca 4 losowe przedmioty, każdy z innej kategorii
        const productIds = Object.keys(state.products) as string[];
        const selectedProductIds = new Set<string>(); // towrzy zestaw unikalnych wartości wskazanego typu - tutaj string. Jest to dobre rozwiązanie gdy chcemy tylko "Zerknąć" na unikalne wartości
        // w tym zestawie. Nie jest to dobra opcja keidy chcemy iterować przez wartośći w zestawie np używając map, filter, reduce lub np include.
        const selectedProducts: Product[] = [];
        while (selectedProducts.length < amount && selectedProductIds.size < productIds.length) { // pętla wykonuje się do momentu spełnienia warunków.
            const randomProductId = productIds[Math.floor(Math.random() * productIds.length)] // np zegarki, biżuteria itd
            if (!selectedProductIds.has(randomProductId)) {
                selectedProductIds.add(randomProductId);
                const randomProduct = state.products[randomProductId as keyof typeof state.products]![Math.floor(Math.random() * state.products[randomProductId as keyof typeof state.products]!.length)] ; // np state.products["zegarki"] lub inne.
                if (randomProduct) {// sprawdzamy czy random product istnieje
                    selectedProducts.push(randomProduct);
                }
            }
        }
        return selectedProducts;
    });

export const getCategorizedRandomProducts = ((state:RootState, amount:number, productsCategorySlug:string) => {
    const productIds = Object.keys(state.products) as string[];
    const selectedProductIds = new Set<string>() // tablica służąca nam do przechowywani id produktów, które już zostały wybrane
    const selectedProducts = [] as Product[]
    while(selectedProducts.length < amount && selectedProductIds.size < amount) {
        let selectedCategory;
        for(let i=0; i<productIds.length;i++) {
            if(productIds[i] === productsCategorySlug) {
                selectedCategory = productsCategorySlug
            }
        }
        if(selectedCategory){
            const selectedProductArray = state.products[selectedCategory]
            const randomProduct = selectedProductArray[Math.floor(Math.random() * selectedProductArray.length)] as Product
            !selectedProductIds.has(randomProduct._id) ? (selectedProductIds.add(randomProduct._id), selectedProducts.push(randomProduct)) : null;          
        }

    }
    return selectedProducts
})

export default productsSlice.reducer