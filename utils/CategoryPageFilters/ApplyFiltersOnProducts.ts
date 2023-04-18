import { priceFilter } from "./PriceFiltersUtils/priceFilter"
import { SortProducts } from "./SortProductsUtils/SortProducts"

export const ApplyFiltersOnProducts = (items_to_filter:Product[], recent_filters:AppliedFilters, newFilter:AppliedFilters, filter_type:string) => {
    const filterFunctionsObject = {
        price_filter: priceFilter,
        sort_filter: SortProducts
    }
    const newFilterStateArray = Object.entries({...recent_filters, ...newFilter})
    let itemsToFilter = [...items_to_filter];
    for(let i = 0 ; i<newFilterStateArray.length;i++) {
        if(newFilterStateArray[i][0]==="price_filter") {
            let propsObj= newFilterStateArray[i][1] as {od:number, do:number}
            itemsToFilter = priceFilter({from:propsObj.od, to:propsObj.do, items_to_filter})   
        } else if(newFilterStateArray[i][0]==="sort_filter") {
            itemsToFilter === SortProducts({items_to_filter:itemsToFilter, filter_type})
        }      
    }
    console.log(itemsToFilter) // Produkty przefiltrowane przez wszystkie filtry znajdujące się w ustawionych filtrach

    
    // funkcja która będzie zwracała nam tablicę produktów przepuszczoną przez wszystkie filtry.
}