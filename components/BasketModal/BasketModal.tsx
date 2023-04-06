import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { getFinalPrice, showLocalBasket } from '../../redux/slices/localBasketSlice';
import { RootState } from '../../redux/store';
import { urlFor } from '../../sanity';
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
            <div className='modal_basket_products_container p-3'>
                <div className='modal_basket_product_top grid grid-cols-12 border-b-[2px] justify-center items-center  text-[13px] md:text-[16px] font-semibold'>
                    <span className='col-span-6 md:col-span-8'>Artykuł</span>
                    <span className='col-span-2 md:col-auto text-center w-auto'>Ilość</span>
                    <span className='col-span-2 md:col-auto text-center'>Cena</span>
                    <span className='text-center col-span-2'>Wartość</span>
                </div>
                {
                    basketProducts.map(el => {
                        return (
                            <div className='modal_basket_product grid grid-cols-12 justify-center items-center py-4 text-[13px] md:text-[16px]'>
                                <div className='relative col-span-2 border-black rounded-sm'><Image src={urlFor(el.product_img[0]).url()} width={120} height={120} style={{objectFit:"contain"}} alt="modal_basket_image"/></div>
                                <div className='product_name col-span-4 md:col-span-6 font-semibold'>{el.product_name}</div>
                                <div className='col-span-2 md:col-auto product_quantity text-center'>{el.quantity}</div>
                                <div className='col-span-2 md:col-auto single_product_price text-center'>{el.price}</div>
                                <div className='product_quantity_price text-center col-span-2'>{el.price * el.quantity}</div>
                            </div>
                            
                        )
                    })
                }
            </div>
            <div className='final_basket_price w-full bg-[#F5F5F5] grid grid-cols-12 p-3 font-light text-[13px] md:text-[16px]'>
                <span className='col-span-9'>Wartość koszyka</span>
                <span className='col-span-3 text-center'>{finalPrice} zł</span>
            </div>
            <div className='modal_basket_buttons font-light p-3 flex justify-between items-center text-[12px] md:text-[15px]'>
                <button className='px-3 py-1 border-[1px] border-[#adadad]' onClick={() => notifyBasket(false)}>Kontynuuj zakupy</button>
                <button className='px-3 py-1 shadow-lg w-[120px] md:w-[150px] bg-[#F4C1C5] text-[#ae535a] hover:bg-[#c7747b] hover:text-white' >Do kasy</button>
            </div>
        </div>
    
    
    </div>
  )
}

export default BasketModal
