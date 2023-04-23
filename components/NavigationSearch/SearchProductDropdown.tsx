import React from 'react'
import Image from 'next/image';
import { urlFor } from '../../sanity'
import Router from 'next/router';

interface Props {
    products:Product[];
    setInputValue: React.Dispatch<React.SetStateAction<string>>
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

const SearchProductDropdown = ({products, setInputValue, setProducts}:Props) => {
    const closeSearchDrop = () => {
        setInputValue("")
        setProducts([])
    }
  return (
    <div className='search_product_dropdown absolute flex flex-col gap-y-4 w-full lg:w-[768px] max-h-[400px] overflow-y-auto top-[28px] bg-white z-50'>
        <span onClick={()=> closeSearchDrop()}  className='absolute right-0 top-0 cursor-pointer bg-black text-white p-2'>X</span>
        {
          products.map(el => (
                <div key={el._id} onClick={() => Router.push(`/product/${el.category._ref}/${el._id}`)} className='search_product flex mt-5 cursor-pointer'>
                    <Image src={urlFor(el.image[0]).url()} alt='apart-logo' width={120} height={120} style={{objectFit:"contain"}}/>
                    <div className='search_products_details flex w-[80%] items-center justify-between'>
                        <div className='flex flex-col'>
                            <span className='text-[22px] font-light'>{el.title}</span>
                            <span className='text-[11px] text-[#838181]'>Produkt dostępny</span>                                
                        </div>
                    <span className='font-semibold'>{el.cena} zł</span>
                    </div>
                </div>                
            ))
        }

    </div>  
  )
}

export default SearchProductDropdown
