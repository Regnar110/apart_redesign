
interface Props {
    categories: {
        categories: Category[];
    }
    products: ProductList;
}


interface Category {
    _id:string;
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

//PRODUKT SUB INTERFACES

interface Description {
    _key: string;
    _type: "block";
    _id: string;
    children: {
        _key:string;
        _type: string;
        marks:[]
        text: string;
        markDefs:[],
        style: string;
    }[]
}

interface ProductDetails {
    marka:string;
    kolekcja:string;
    nr_wzoru:string;
    kamien?:string;
    dlugosc?:number;
    surowiec?:string;
    proba?:number;
    szerokosc?:number;
    liczba_diamentow?:number;
    masa_diamentow?:number;
    srednica?:number;
    gwarancja_producenta?:number;
    kaliber?:string;
    mechanizm?:string;
    pasek?:string;
    rodzaj_koperty?:string;
    szklo?:string;
    wodoszczelnosc?:number;
    wymiary_koperty?:number;
    zapiecie?:string;

}

interface Product {
    Opis: Description[];
    title: string;
    _id: string;
    category: {
        _ref: string;
        _type: "reference";
    };
    cena:number;
    details: ProductDetails;
    image: Image[];
    slug: {
        _type: "slug";
        current: string;
    };
}

///

interface ProductList {
    beads: Product[];
    bransoletki: Product[];
    charms: Product[];
    kolczyki: Product[];
    naszyjniki: Product[];
    pierscionki: Product[];
    zawieszki: Product[];
    zegarki: Product[];
}


//LOGIN OR REGISTER TYPES

interface SuccessLoginData { // interfejs określający dane przekazywane z komponentu do funkcji ganleLoginOrRegister
    login_email:string;
    login_password:string;
}

interface MongoUserDocument {
    _id:string;
    user_email:string;
    name:string;
    surname:string;
    wishList_productsRef: string[];
}

interface LoginResponse { // Interfejs określający dane zwracany z udanego logowania - dane z mongoDb
    is_error?: boolean;
    is_userExist?:boolean;
    error_message?:string
    _id?:string;
    user_email?: string;
    name?:string;
    surname?:string;
    wishList_productsRef?: string[];
}

interface SuccesRegisterData { // j/w
    register_email:string;
    register_password:string;
    register_name:string;
    register_surname:string;
}

interface RegisterResponse {
    is_error: boolean;
    is_userExist?:boolean,
    error_message?: string;
    name?:string;
    surname?:string;
    response_message?:string
}


//WISHLIST UPDATES

interface MongoDbWishListUpdateReturn {
    isError:boolean
    message:string
}


// LOCAL BASKET

type LocalBasket = {
    product_id:string;
    quantity:number;
}[]




