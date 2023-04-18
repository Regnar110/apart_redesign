interface Props {
    from?:number;
    to?:number;
    items_to_filter:Product[];
}

export const priceFilter = ({from, to, items_to_filter}:Props):Product[] => {
    if(to && from){
        return items_to_filter.filter(el => el.cena >= from && el.cena <= to)
    } else if(!to && from) {
        console.log("od")
        return items_to_filter.filter(el => el.cena >= from)
    } else if(to && !from) {
        console.log("do")
        return items_to_filter.filter(el => el.cena <= to)
    }  
    console.log("pierwotna")
    return items_to_filter
}