import React from 'react'

interface Props {
    children: JSX.Element[]
}

const ModalBasketProductGrid = ({children}:Props) => {
  return (
<div className='modal_basket_products_container p-3'>
    <div className='modal_basket_product_top grid grid-cols-12 border-b-[2px] justify-center items-center  text-[13px] md:text-[16px] font-semibold'>
        <span className='col-span-6 md:col-span-8'>Artykuł</span>
        <span className='col-span-2 md:col-auto text-center w-auto'>Ilość</span>
        <span className='col-span-2 md:col-auto text-center'>Cena</span>
        <span className='text-center col-span-2'>Wartość</span>
    </div>
    {children.map(el=>el)}
</div>
  )
}

export default ModalBasketProductGrid
