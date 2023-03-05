import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux';
import { categorizedProducts } from '../../redux/slices/productsSlice';
import { RootState } from '../../redux/store';

const Category = () => {
    const router = useRouter();
    const {ref} = router.query
    let productsByCategory;
    if(typeof ref === "string")productsByCategory = useSelector((state:RootState) => categorizedProducts(state, ref))
    console.log(productsByCategory)
    return(
        <div>route :{ref}</div>
    )
}
export default Category