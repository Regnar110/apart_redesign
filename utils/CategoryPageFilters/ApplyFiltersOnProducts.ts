import { priceFilter } from "./PriceFiltersUtils/priceFilter"
import { SortProducts } from "./SortProductsUtils/SortProducts"

export const ApplyFiltersOnProducts = (items_to_filter:Product[], recent_filters:AppliedFilters, newFilter:AppliedFilters, filter_type:string):{appliedFilters:AppliedFilters, filteredProducts:Product[]} => {
    const newFilterStateArray = Object.entries({...recent_filters, ...newFilter})
    let itemsToFilter = [...items_to_filter];
    for(let i = 0 ; i<newFilterStateArray.length;i++) {
        if(newFilterStateArray[i][0]==="price_filter") {
            let propsObj= newFilterStateArray[i][1] as {od:number, do:number}
            itemsToFilter = priceFilter({from:propsObj.od, to:propsObj.do, items_to_filter})
            console.log("price")
        } else if(newFilterStateArray[i][0]==="sort_filter") { // jest tu problem z tym, że jeżeli używamy filtra przez przycisk price, i chcemy aby po price zastosowane było sortowanie
            // to do sortowania nie trafia filter_type - jest undefined
            const safetyFilterType = (
                filter_type !== "HIGH" && filter_type !== "LOW" ? 
                    (recent_filters.sort_filter?.cena === "od najwyższej" ? 
                        "HIGH" 
                        : 
                        "LOW"
                    )
                : filter_type
            ) // bezpiecznika typu filtra. Jeżeli zastosujemy wszystkie filtry przy użyciu np innego filtra niż filtr sortowania to domyślnie dostalibyśmy filter_type jako np. PRICE
            // gdy użylibyśmy filtru ceny. Teraz sprawdzamy warunkowo czy  typ filtra jest inny niż high i low i wtedy zwracamy odpowiednią wartość. Ma to na celu warunkowe ustawienie typu filtra
            // na wypadek przejścia do filtra sortowania na skutek akcji użytkownika, która wywoła działanie całej funkcji z kontekstu innego filtra np filtra ceny
            itemsToFilter = SortProducts({items_to_filter:itemsToFilter, filter_type:safetyFilterType})
            console.log("sort")
        } 
    }
    return {appliedFilters: Object.fromEntries(newFilterStateArray), filteredProducts:itemsToFilter} // Produkty przefiltrowane przez wszystkie filtry znajdujące się w ustawionych filtrach
    
    // funkcja która będzie zwracała nam tablicę produktów przepuszczoną przez wszystkie filtry.
}