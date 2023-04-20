import React from 'react'
import { urlFor } from '../../sanity';
import Image from 'next/image';
import AddToWishList from '../AddToWishList/AddToWishList';
import toast, { Toaster } from 'react-hot-toast';
import ErrorIcon from '@mui/icons-material/Error';
import FlagIcon from '@mui/icons-material/Flag';
import Router from 'next/router';
interface Props {
    user_email:string;
    product_id:string;
    product_category_ref:string;
    product_name:string;
    price:number;
    image: Image[];
}

const CategoryProduct = ({user_email, product_id, product_category_ref, product_name, price, image}:Props) => {
  const notifyAction= (toastNotification:string, httpStatusCode:number) => { 
    return toast.custom(t => (
        <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} ${httpStatusCode === 500 ? "bg-[#c7747b] text-white font-bold" : "bg-white text-black font-medium"} max-w-md w-full p-5 shadow-2xl rounded-lg pointer-events-auto flex gap-x-5 items-center justify-center ring-1 ring-black ring-opacity-5`}>
        {
            httpStatusCode === 500 ? <ErrorIcon className='w-8 h-8' style={{color:"#F7C600"}}/> :<FlagIcon className='w-8 h-8' style={{color:"green"}}/>
        }
        <p>{toastNotification}</p>
        </div>
    ))
  }
  return (
    <div className='category_page_product w-full md:max-w-[250px]  relative cursor-pointer flex flex-col justify-start font-roboto border-b-[1px] hover:border-[#db0000] transition-all'>
      <Image onClick={() => Router.push(`/product/${product_category_ref}/${product_id}`)} priority={true} src={urlFor(image[0]).url()} width={200} height={200} style={{objectFit:"contain", width:"auto", height:"auto"}} alt="wishList_product_image"/>
      <span onClick={() => Router.push(`/product/${product_category_ref}/${product_id}`)} className='w-full text-[14px] text-[#222222] font-light hover:text-[#d4a82f] transition-all'>{product_name}</span>
      <span className='text-[22px] font-light'>{price} zł</span>
      <div className='wishList_hearth absolute top-0 right-[-20px] cursor-pointer'>
        <AddToWishList wishProductId={product_id} isUserLogged={user_email ? true:false} notifyAction={notifyAction} onlyIcon={true}/>
      </div>
      <Toaster position='bottom-center'/>
    </div>
  )
}

export default CategoryProduct
