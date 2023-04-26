import React from 'react'
interface Props {
    finalPrice:number
}

const ModalBasketSummary = ({finalPrice}:Props) => {
  return (
    <div className='final_basket_price w-full bg-[#F5F5F5] grid grid-cols-12 p-3 font-light text-[13px] md:text-[16px]'>
        <span className='col-span-9'>Wartość koszyka</span>
        <span className='col-span-3 text-center'>{finalPrice} zł</span>
    </div>
  )
}

export default ModalBasketSummary
