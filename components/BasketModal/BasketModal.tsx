import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { getFinalPrice, showLocalBasket } from '../../redux/slices/localBasketSlice';
import { RootState } from '../../redux/store';
import { urlFor } from '../../sanity';
import Router from 'next/router';
import ModalBasketProduct from '../BasketProducts/ModalBasketProduct';
import ModalBasketProductGrid from '../BasketProducts/ModalBasketProductGrid';
import ModalBasketSummary from '../BasketProducts/ModalBasketSummary';
interface Props {
    notifyBasket: (status:boolean) => void;
}

const BasketModal = ({notifyBasket}:Props) => {
    const finalPrice = useSelector((state:RootState) => getFinalPrice(state))
    const basketProducts = useSelector((state:RootState) => showLocalBasket(state))
  return (
    <div className='fixed flex justify-center items-center z-50 top-0 w-[100vw] h-[100vh] bg-[#0000002a] font-roboto'>
        <div className='relative w-[768px] max-h-[500px] border-[1px] border-red-100 bg-white mx-2 overflow-y-scroll'>
            <div className='modal_basket_top relative bg-[#E5E5E5] w-full py-3 flex justify-center'>
                <span className='text-[20px] font-light'>Mój koszyk</span>
                <span className='absolute right-3' onClick={() => notifyBasket(false)}>
                    <CloseIcon className='cursor-pointer' fontSize='medium'/>
                </span>
            </div>
            <ModalBasketProductGrid>
                {
                    basketProducts.map(el => <ModalBasketProduct product={el}/>)
                }                
            </ModalBasketProductGrid>
            <ModalBasketSummary finalPrice={finalPrice}/>
            <div className='modal_basket_buttons font-light p-3 flex justify-between items-center text-[12px] md:text-[15px]'>
                <button className='px-3 py-1 border-[1px] border-[#adadad]' onClick={() => notifyBasket(false)}>Kontynuuj zakupy</button>
                <button onClick={() => Router.push("/basket")} className='px-3 py-1 shadow-lg w-[120px] md:w-[150px] bg-[#F4C1C5] text-[#ae535a] hover:bg-[#c7747b] hover:text-white' >Do kasy</button>
            </div>
        </div>
    
    
    </div>
  )
}

export default BasketModal
