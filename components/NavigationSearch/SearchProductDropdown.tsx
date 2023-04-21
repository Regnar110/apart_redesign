import React from 'react'
import Image from 'next/image';
import { urlFor } from '../../sanity'

interface Props {
    products:Product[]
}

const SearchProductDropdown = ({products}:Props) => {
  return (
    <div className='search_product_dropdown absolute flex flex-col gap-y-4 w-full lg:w-[768px] max-h-[400px] overflow-y-auto  border-[1px] top-[28px] bg-white z-50'>
        <span className='absolute right-0 top-0 cursor-pointer'>X</span>
        <div className='search_product flex mt-5 cursor-pointer'>
            <Image src={urlFor(products[0].image[0]).url()} alt='apart-logo' width={120} height={120} style={{objectFit:"contain"}}/>
            <div className='search_products_details flex w-[80%] items-center justify-between'>
                <div className='flex flex-col'>
                    <span className='text-[22px] font-light'>{products[0].title}</span>
                    <span className='text-[11px] text-[#838181]'>Produkt dostępny</span>                                
                </div>
            <span className='font-semibold'>{products[0].cena} zł</span>
            </div>
        </div>
    </div>  
  )
}

export default SearchProductDropdown
