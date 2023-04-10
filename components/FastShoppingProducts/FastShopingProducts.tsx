import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { getRandomtAmountProducts } from '../../redux/slices/productsSlice'
import { urlFor } from '../../sanity';
import Image from 'next/image';
import AddToBasket from '../AddToBasket/AddToBasket';
import Router from 'next/router';

interface Props {
    notifyBasket:(status:boolean)=>void
}

const FastShopingProducts = ({notifyBasket}:Props) => {
    const randomizedProducts = useSelector((state:RootState) => getRandomtAmountProducts(state, 6))
    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        setProducts(randomizedProducts)
    },[])
  return (
    <div className='fast_shopping_products md:w-[768px] lg:w-[1024px] xl:w-[1280px]'>
        <h1 className='w-full border-b-[1px]'>Kup również</h1>
        <div className='shopping_random_products grid grid-cols-1 lg:grid-cols-3 justify-items-start lg:justify-items-center p-3 lg:p-0'>
            {
                products.map(el => {
                    return (
                        <div key={el._id} className='product flex col-span-1 w-full py-10'>
                            <Image priority={true} className='cursor-pointer' onClick={() => Router.push(`/product/${el.category._ref}/${el._id}`)} src={urlFor(el.image[0]).url()} width={100} height={100} style={{objectFit:"contain", width:"auto", height:"auto"}} alt="fast_shopping_image"/>
                            <div className='fast_shopping_product_details flex flex-col justify-around'>
                                <span onClick={() => Router.push(`/product/${el.category._ref}/${el._id}`)} className='cursor-pointer font-semibold text-[14px]'>{el.title}</span>
                                <span className='font-light'>Cena: {el.cena} zł</span>
                                <AddToBasket represented_product_id={el._id} product_name={el.title} product_img={el.image} notifyBasket={notifyBasket} price={el.cena} buttonColor='red'/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default FastShopingProducts
