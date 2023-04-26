import React from 'react'
import { urlFor } from '../../sanity';
import Image from 'next/image';

interface Props {    
    product:{
        product_id:string;
        product_name:string;
        price:number
        quantity:number;
        product_img: Image[]
    }
}
const ModalBasketProduct = ({product}:Props) => {
  return (
    <div className='modal_basket_product grid grid-cols-12 justify-center items-center py-4 text-[13px] md:text-[16px]'>
        <div className='relative col-span-2 border-black rounded-sm'><Image src={urlFor(product.product_img[0]).url()} width={120} height={120} style={{objectFit:"contain", width:"auto"}} alt="modal_basket_image"/></div>
        <div className='product_name col-span-4 md:col-span-6 font-semibold'>{product.product_name}</div>
        <div className='col-span-2 md:col-auto product_quantity text-center'>{product.quantity}</div>
        <div className='col-span-2 md:col-auto single_product_price text-center'>{product.price}</div>
        <div className='product_quantity_price text-center col-span-2'>{product.price * product.quantity}</div>
    </div>
  )
}

export default ModalBasketProduct
