import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer/Footer';
import PaginatedItems from '../../components/CategoryPage/Pagination/PaginatedItems';
import FastShopingProducts from '../../components/FastShoppingProducts/FastShopingProducts';
import BasketModal from '../../components/BasketModal/BasketModal';
import Benefits from '../../components/Benefits/Benefits';
import Pajacyk from '../../components/Pajacyk/Pajacyk';
import Head from 'next/head';

const Category = () => {
    const router = useRouter();
    const {category_ref} = router.query
    const [basketModal, setBasketModal] = useState<boolean>(false)
    const notifyBasket = (status:boolean) => setBasketModal(status)
    return(
        <div className='category_page w-full flex flex-col gap-y-5'>
            <Head>
                <title>Kategorie</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation />
            <section className='products_pagination_section w-full flex flex-col items-center justify-center md:px-7'>
                <PaginatedItems current_ref={category_ref!} defaultItemsPerPage={10}/>
                <FastShopingProducts notifyBasket={notifyBasket}/>
            </section>
            
            {
                basketModal ? <BasketModal notifyBasket={notifyBasket}/> : null
            }
            <h1 className='text-center text-[22px] font-semibold'>Kupując u nas zyskujesz</h1>
            <Benefits/>
            <h1 className='text-center text-[22px] font-semibold'>Wspieraj z nami szczytne cele</h1>
            <Pajacyk/>
            <Footer />    
        </div>
    )
}
export default Category