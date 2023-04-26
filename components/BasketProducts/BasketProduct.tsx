import React from 'react'
import { basketActionsHandler } from '../../utils/basketActionsHandler'
import { useDispatch } from 'react-redux'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { urlFor } from '../../sanity';

interface Props {
    product:{
        product_id:string;
        product_name:string;
        price:number
        quantity:number;
        product_img: Image[]
    };
    productIsEditable:boolean
}
const BasketProduct = ({product, productIsEditable}:Props) => {
    const dispatch = useDispatch()
    return (
        <div key={product.product_id} className='basket_product grid grid-cols-12 justify-center items-start py-4 text-[13px] md:text-[16px] border-b-[1px] px-3'>
            <div className='relative col-span-2 border-black rounded-sm'><Image priority={true} src={urlFor(product.product_img[0]).url()} width={120} height={120} style={{objectFit:"contain", width:"auto", height:"auto"}} alt="modal_basket_image"/></div>
            <div className='product_name col-span-4 md:col-span-6 font-semibold text-[14px] flex flex-col justify-center'>
              <span className='cursor-pointer text-black hover:text-[#d4a82f] transition-all'>{product.product_name}</span>
              {productIsEditable ? <span onClick={() => basketActionsHandler("REMOVE", dispatch, product.product_id)} className='cursor-pointer font-light text-[#777] hover:text-[#d4a82f] transition-all flex'><CloseIcon fontSize='small'/>Usuń artykuł</span> : null}
            </div>
            <div className='col-span-2 md:col-auto product_quantity text-center flex flex-col items-end'>
              {productIsEditable? <span className='cursor-pointer' onClick={() => basketActionsHandler("INCRAMENT", dispatch, product.product_id)}><ArrowDropUpIcon fontSize='medium'/></span>:null}
              <span className='text-left w-[15px]'>{product.quantity}</span>
              {productIsEditable ? <span className='cursor-pointer' onClick={() => basketActionsHandler("DECRAMENT", dispatch, product.product_id)}><ArrowDropDownIcon fontSize='medium'/></span> : null}
            </div>
            <div className='col-span-2 md:col-auto single_product_price text-right'>{product.price} zł</div>
            <div className='product_quantity_price text-right col-span-2'>{product.price * product.quantity} zł</div>
        </div> 
    )
}

export default BasketProduct
