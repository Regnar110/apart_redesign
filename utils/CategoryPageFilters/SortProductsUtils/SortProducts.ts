interface Props {
    items_to_filter:Product[]
    filter_type:string;
}
export const SortProducts = ({items_to_filter, filter_type}:Props) => {
    items_to_filter.sort((a,b) => a.cena - b.cena)
    console.log(items_to_filter)
}