import React from 'react'
import { basketActionsHandler } from '../../utils/basketActionsHandler'
import { useDispatch } from 'react-redux'
interface Props {
    represented_product_id:string
    product_name:string,
    price:number;
    product_img:Image[]
    notifyBasket:(status:boolean)=>void
    buttonColor: "bigBlack" | "red"
}

const AddToBasket = ({represented_product_id, product_name, price, product_img, notifyBasket, buttonColor}:Props) => {
    const dispatch = useDispatch()

  return (
    <>
    {
      buttonColor === "bigBlack" ? 
        (
          <button onClick={() => {
            basketActionsHandler("ADD", dispatch, represented_product_id, product_name, price, product_img)
            notifyBasket(true)
            }
          } className='text-[14px] my-5 p-4 shadow-lg w-[300px] md:w-[100%] bg-black text-white hover:bg-[#c7747b] hover:text-white transition-all' >
            DODAJ DO KOSZYKA
          </button>
        )
        :
        (
          <button onClick={() => {
            basketActionsHandler("ADD", dispatch, represented_product_id, product_name, price, product_img)
            notifyBasket(true)
            }
          } 
          className='px-3 py-1 shadow-lg w-[150px] bg-[#F4C1C5] text-[14px] text-[#ae535a] hover:bg-[#c7747b] hover:text-white transition-all' >
            Dodaj do koszyka
          </button>
        )
    }
  </>
  )
}

export default AddToBasket
