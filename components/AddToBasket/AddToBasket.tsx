import React from 'react'
import { basketActionsHandler } from '../../utils/basketActionsHandler'
import { useDispatch } from 'react-redux'
interface Props {
    represented_product_id:string
}

const AddToBasket = ({represented_product_id}:Props) => {
    const dispatch = useDispatch()

  return (
    <button onClick={() => basketActionsHandler("ADD", represented_product_id, dispatch)} className='text-[14px] my-5 p-4 shadow-lg w-[300px] md:w-[100%] bg-black text-white hover:bg-[#c7747b] hover:text-white transition-all' >DODAJ DO KOSZYKA</button>
  )
}

export default AddToBasket
