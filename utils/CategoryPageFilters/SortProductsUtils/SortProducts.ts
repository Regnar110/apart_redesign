interface Props {
    items_to_filter:Product[]
    filter_type:string;
}
export const SortProducts = ({items_to_filter, filter_type}:Props) => {
    switch(filter_type) {
        case "HIGH":
            const fromHighest = items_to_filter.sort((a,b) => {
                return b.cena - a.cena
            })
            return fromHighest as Product[];
        case "LOW":
            const fromLowest = items_to_filter.sort((a,b) => {
                return a.cena - b.cena
            })
            return fromLowest as Product[];
        default:
            return [] as Product[]
    }
}