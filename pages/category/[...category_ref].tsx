import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Navigation from '../../components/Navigation';
import { categorizedProducts } from '../../redux/slices/productsSlice';
import { RootState } from '../../redux/store';
import CategoryProduct from '../../components/CategoryPage/CategoryProduct';
import { getLoggedUser } from '../../redux/slices/userSlice';
import Footer from '../../components/Footer/Footer';
import PaginationItems from '../../components/CategoryPage/Pagination/PaginationItems';
import PaginatedItems from '../../components/CategoryPage/Pagination/PaginatedItems';

const Category = () => {
    const router = useRouter();
    const {category_ref} = router.query
    console.log(category_ref)

    return(
        <div className='category_page w-full'>
            <Navigation />
            <section className='products_pagination_section w-full flex justify-center'>
                <PaginatedItems current_ref={category_ref!} itemsPerPage={5}/>
            </section>

            <Footer />    
        </div>
        


    )
}
export default Category