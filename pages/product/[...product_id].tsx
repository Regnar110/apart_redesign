import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectedProduct } from '../../redux/slices/productsSlice';
import { RootState } from '../../redux/store';

const Product = () => {
    const router = useRouter();
    const {product_id} = router.query // tablica [id produktu, referencja do kategori tego produktu]
    let singleProduct;
    if(product_id && typeof product_id[1] === "string") singleProduct = useSelector((state:RootState) => selectedProduct(state, product_id[1], product_id[0]))
    console.log(singleProduct)
    return(
        <div>route product</div>
    )
}
export default Product