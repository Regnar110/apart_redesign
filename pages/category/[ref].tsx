import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux';
import Navigation from '../../components/Navigation';
import { categorizedProducts } from '../../redux/slices/productsSlice';
import { RootState } from '../../redux/store';

const Category = () => {
    //komponent, który renderuje stronę kategorii z produktami dla danej kategori oraz w dalszej części query, jeżeli został wprowadzony druga wartośc dla router query to jest to p
    //produkt id i wtedy zostanie wyrenderowana strona produktu
    const router = useRouter();
    const {ref} = router.query
    let productsByCategory;
    if(typeof ref === "string")productsByCategory = useSelector((state:RootState) => categorizedProducts(state, ref))   
    console.log(productsByCategory) 

    return(
        <>
        <Navigation />
        <section>

        </section>        
        </>
        


    )
}
export default Category