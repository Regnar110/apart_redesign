interface Props {
    categories: Category[]
}


interface Category {
    id:string;
    _type: "category"
    image: Image[];
    slug: {
        _type: "slug";
        current:string
    };
    title:string
}

interface Image {
    _key: string;
    _type: "image";
    asset: {
        url:string
    }
}