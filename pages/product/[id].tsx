import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux';
import { categorizedProducts } from '../../redux/slices/productsSlice';
import { RootState } from '../../redux/store';

const Product = () => {
    const router = useRouter();
    const {id} = router.query
    let productsByCategory;
    if(typeof id === "string")productsByCategory = useSelector((state:RootState) => categorizedProducts(state, ref))
    console.log(productsByCategory)
    return(
        <div>route :{id}</div>
    )
}
export default Product