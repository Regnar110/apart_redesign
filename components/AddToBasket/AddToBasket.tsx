import React from 'react'
import { basketActionsHandler } from '../../utils/basketActionsHandler'
import { useDispatch } from 'react-redux'
interface Props {
    represented_product_id:string
    product_name:string,
    price:number;
    product_img:Image[]
    notifyBasket:(status:boolean)=>void
}

const AddToBasket = ({represented_product_id, product_name, price, product_img, notifyBasket}:Props) => {
    const dispatch = useDispatch()

  return (
    <button onClick={() => {
      basketActionsHandler("ADD", dispatch, represented_product_id, product_name, price, product_img)
      notifyBasket(true)
      }
    } className='text-[14px] my-5 p-4 shadow-lg w-[300px] md:w-[100%] bg-black text-white hover:bg-[#c7747b] hover:text-white transition-all' >DODAJ DO KOSZYKA</button>
  )
}

export default AddToBasket
