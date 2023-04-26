import React from 'react'

interface Props {
    finalPrice:number;
    discount?:boolean;
    delivery_price?:boolean;
}
const BasketSummary = ({finalPrice, delivery_price, discount}:Props) => {
  return (
    <div className='basket_sumamry border-t-[2px] border-black'>
        <div className='basket_full_price flex justify-between text-[14px] bg-[#F5F5F5] p-3'>
        <span className='font-light'>Wartość koszyka</span>
        <span>{finalPrice} zł</span>
        </div>
        {
            discount ?
            <div className='checkout_delivery_price flex justify-between text-[14px] bg-[#F5F5F5] p-3'>
                <span className='font-light'>Rabat</span>
                <span>0 zł</span>
            </div>
            :
            null        
        }
        {
            delivery_price ? 
            <div className='checkout_delivery_price flex justify-between text-[14px] bg-[#F5F5F5] p-3'>
                <span className='font-light'>Koszt dostawy</span>
                <span>90 zł</span>
            </div>        
            :
            null
        }

        <div className='checkout_delivery_price flex justify-between text-[14px] bg-[#F5F5F5] p-3'>
        <span className='font-semibold'>RAZEM</span>
        <span className='font-semibold'>{finalPrice + 90} zł</span>
        </div>
        <div className='basket_delivery_notation text-[14px] bg-[#F5F5F5] p-3 border-t-[1px]'>
        <span className='font-light'>Wysyłka zamówienia w 24 godziny. DARMOWY ZWROT do 100 dni.</span>
        </div>
    </div>
  )
}

export default BasketSummary
