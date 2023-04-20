import { useRouter } from 'next/router'
import React from 'react'
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer/Footer';
import PaginatedItems from '../../components/CategoryPage/Pagination/PaginatedItems';

const Category = () => {
    const router = useRouter();
    const {category_ref} = router.query
    
    return(
        <div className='category_page w-full'>
            <Navigation />
            <section className='products_pagination_section w-full flex justify-center md:px-7'>
                <PaginatedItems current_ref={category_ref!} defaultItemsPerPage={10}/>
            </section>

            <Footer />    
        </div>
    )
}
export default Category