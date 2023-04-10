import React from 'react'
import { urlFor } from '../../sanity';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import { addOrRemoveFromWish } from '../../utils/addOrRemoveFromWish';
import { useDispatch } from 'react-redux';
import Router from 'next/router';
interface Props {
    user_email:string;
    product_id:string;
    product_category_ref:string;
    product_name:string;
    price:number;
    image: Image[];
    notifyAction:(toastNotification:string, httpStatusCode:number) => void;
}
const WishListProduct = ({user_email, product_id,product_category_ref, product_name, price, image, notifyAction}:Props) => {
    const dispatch = useDispatch()
  return (
    <div key={product_id} className='wishlist_product relative cursor-pointer grid justify-items-center gap-y-4 border-b-[1px] hover:border-[#db0000] transition-all my-3 text-center'>
        <Image onClick={() => Router.push(`/product/${product_category_ref}/${product_id}`)} priority={true} src={urlFor(image[0]).url()} width={200} height={200} style={{objectFit:"contain", width:"auto", height:"auto"}} alt="wishList_product_image"/>
        <span className='text-[14px] font-light'>{product_name}</span>
        <span className='font-light text-[22px]'>{price} zł</span>
        <div onClick={() => addOrRemoveFromWish(product_id, user_email, "REMOVE", dispatch, notifyAction)} className='absolute top-- right-0 border-[1px] p-2 cursor-pointer'><CloseIcon/></div>
    </div>
  )
}

export default WishListProduct
