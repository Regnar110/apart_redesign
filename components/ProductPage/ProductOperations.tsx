import React from 'react'
import AddToWishList from '../AddToWishList/AddToWishList'
import AddToBasket from '../AddToBasket/AddToBasket'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import { isUserLogged } from '../../redux/slices/userSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
interface Props {
    singleProduct: Product;
    notifyAction: (toastNotification: string, httpStatusCode: number) => string;
    notifyBasket: (status: boolean) => void;
}

const ProductOperations = ({singleProduct ,notifyAction, notifyBasket}:Props) => {
    const userLogged= useSelector((state:RootState) => isUserLogged(state))
  return (
    <div className='product_operations w-full md:max-w-[350px] lg:max-w-[420px] text-left font-roboto flex flex-col h-fit'>
        <h1 className='text-[28px] text-[#333333]'>{singleProduct?.title}</h1>
        <span className='product_number text-[13px] text-[#777777]'>{singleProduct?.details.nr_wzoru}</span>
        <div className='size_selection flex gap-x-4 py-3 items-center'>
            <span className='font-bold text-[14px]'>Rozmiar:</span>
            <form className='flex justify-center items-center'>
                <select className='border-[1px] border-[#777777] p-2'>
                    <option value="12">12</option>
                    <option value="14">14</option>
                    <option value="16">16</option>
                    <option value="19">19</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                </select>
            </form>
        </div>
        <div className='product_price flex gap-x-5'>
            <span className='text-[28px]'>{singleProduct?.cena} zł</span>
            <div className='product_price_before_sale flex flex-col'>
                <span className='line-through text-[20px]'>{((150/100) * singleProduct?.cena!).toFixed(2)} zł</span>
                <span className='text-[12px] text-[#777777]'>Najniższa cena w okresie ostatnich 30 dni przed obniżką</span>
            </div>
        </div>
        <AddToBasket represented_product_id={singleProduct?._id as string} product_name={singleProduct?.title!} price={singleProduct?.cena!} product_img={singleProduct?.image!} notifyBasket={notifyBasket} buttonColor='bigBlack'/>
        <p className='mt-5 text-[14px]'>Dostawa <span className='font-bold'>GRATIS</span>  |  Wysyłka zamówienia w <span className='font-bold'>24 godziny</span></p>
        <p className='mb-5 text-[14px]'>100 dni na <span className='font-bold'>DARMOWY ZWROT</span>  |  Piękne opakowanie gratis</p>
        <div className='product_interface_icons flex flex-col gap-y-3'>
            <div className='wish_list flex gap-x-3 items-center cursor-pointer'>
                <AddToWishList wishProductId={singleProduct?._id as string} isUserLogged={userLogged} notifyAction={notifyAction}/>
            </div>
            <div className='location flex gap-x-3 items-center cursor-pointer'>
                <ModeOfTravelIcon className='w-10 h-10 transition-all text-black hover:text-[#c7747b] '/>
                <span className='text-[14px] transition-all text-black hover:text-[#c7747b] '>Sprawdź dostępność i zarezerwuj w salonie</span>
            </div>
            <div className='compare flex gap-x-3 items-center cursor-pointer'>
                <CompareArrowsIcon className='w-10 h-10 transition-all text-black hover:text-[#c7747b] '/>
                <span className='text-[14px] transition-all text-black hover:text-[#c7747b] '>Dodaj do  porównania</span>
            </div>
            
        </div>
    </div>
  )
}

export default ProductOperations
