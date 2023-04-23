import Router from 'next/router'
import React, { useEffect, useState } from 'react'
import MediaQuery from 'react-responsive'
import { urlFor } from '../../sanity'
import CustomTextButton from '../button/CustomTextButton'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { getCategorizedRandomProducts, getRandomtAmountProducts } from '../../redux/slices/productsSlice'


interface RandomAmountProducts {
    header:string;
    categorySlug?:string;
    //Jeżeli categorySlug jest przekazanyd okomponentu to losowe produkty będą wyświetlne dla danej wpisanej w categorySlug kategori produktów.
}

const RandomAmountProducts = ({header, categorySlug}:RandomAmountProducts) => {
    const [randomizedProducts, setRandomProducts] = useState<Product[]>([])
    const randomProducts = categorySlug ? 
    useSelector((state:RootState)=> getCategorizedRandomProducts(state, 4, categorySlug)) as Product[]
    :
    useSelector((state:RootState) => getRandomtAmountProducts(state, 4)) as Product[]
    useEffect(() => {
        setRandomProducts(randomProducts)
    },[])
return randomizedProducts ?
    <div className='landing-random-products p-3 flex flex-col justify-center items-center'>
        <h1 className='font-bold text-black text-[16px] md:text-[17px] lg:text-[22px] text-center my-7'>{header}</h1>
        <div className='randomp-wrapper w-12/12 md:w-10/12 grid grid-flow-col grid-rows-2 lg:grid-rows-1 auto-cols-fr gap-5'>
        {randomizedProducts.map(el => {
            return (<div key={el._id} className='z-30 relative random-product cursor-pointer flex flex-col items-center justify-center  border-b-[1px] transition-all hover:border-[#db0000] py-2'>
                <MediaQuery maxWidth={1024}>
                    <Image onClick={() => Router.push(`/product/${el.category._ref}/${el._id}`)} width={250} height={250} style={{objectFit:"contain", width:"auto"}} src={urlFor(el.image[0]).url()} alt={'product_image'} />            
                </MediaQuery>
                <MediaQuery minWidth={1024}>
                    <Image onClick={() => Router.push(`/product/${el.category._ref}/${el._id}`)} width={350} height={350} style={{objectFit:"contain", width:"auto"}} src={urlFor(el.image[0]).url()} alt={'product_image'} />            
                </MediaQuery>
                <span className='text-center text-[12px] md:text-[14px] lg:text-[16px] m-2'>{el.title.toUpperCase()}</span>
                <CustomTextButton textContent='Sprawdź' isArrow={true} hrefQuery={`/product/${el.category._ref}/${el._id}`}/>
            </div>)
            })
            }        
        </div>
    </div>
    :null
}

export default RandomAmountProducts
