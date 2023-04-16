export const removeSelectedPriceFilter = (e) => {
    //Funkcja w której tworzymy kopie zastosowanych filtrów, usuwamy z niej filtr, w który celujemy i zwracamy nowy stan filtrów.
    //Następnie bazując na nowym obiekcie danych z filtra, przekazujemy te dane do funkcji priceFilter na bazie nowych danych zwraca nam przefiltrowane produkty
    // w zależności od tego jaki filtr pozostał
    const [[,newFilterData]] = structuredClone(Object.entries(appliedFilters))
    delete newFilterData[e.target.id]
    setAppliedFilters([newFilterData])
    // const newFilters:AppliedFilters[] = appliedFilters.flatMap(el =>Object.fromEntries(Object.entries(el).filter(([filterName,]) => filterName !==e.target.id.toString())))
    const itemsAfterRemoveFilter = priceFilter({from:newFilterData.from_price_filter, to:newFilterData.to_price_filter, items_to_filter:productsByCategory})
    setAllProductsByCategory(itemsAfterRemoveFilter)
  }
