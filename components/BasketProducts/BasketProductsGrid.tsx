import React from 'react'
interface Props {
    children: JSX.Element[]
}

const BasketProductsGrid = ({children}:Props) => {
  return (
    <>
        <div className='basket_product_top grid grid-cols-12 border-b-[2px] justify-center items-center  text-[12px] md:text-[14px] font-semibold py-3'>
            <span className='col-span-6 md:col-span-8'>Artykuł</span>
            <span className='col-span-2 md:col-auto text-right w-auto'>Ilość</span>
            <span className='col-span-2 md:col-auto text-right'>Cena</span>
            <span className='text-right col-span-2'>Wartość</span>
        </div>
            {
            children.map(el => (el))
            }
    </>
  )
}

export default BasketProductsGrid