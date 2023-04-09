import React from 'react'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { RootState } from '../redux/store'
import { getFinalPrice, showLocalBasket } from '../redux/slices/localBasketSlice'
import Navigation from '../components/Navigation'
import { urlFor } from '../sanity';
import Image from 'next/image';
import { basketActionsHandler } from '../utils/basketActionsHandler';
import Footer from '../components/Footer/Footer';

const Basket = () => { 
    const basketProducts = useSelector((state:RootState) => showLocalBasket(state))
    const finalPrice = useSelector((state:RootState) => getFinalPrice(state))
    const dispatch = useDispatch()
    console.log(basketProducts)
  return (
    <div className='basket_page box-border relative flex flex-col items-center'>
      <Head>
          <title>Mój koszyk</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation stickToTop={true} />
      <section className='basket_items_container font-roboto pt-10'>
          <div className='basket min-h-[450px] md:w-[768px] lg:w-[1024px] xl:w-[1280px]'>
            <h1 className='text-[28px] font-light'>Mój koszyk</h1>
            {
              basketProducts.length === 0 ? <span>Twój koszyk jest pusty</span>
              :
              (
                <>
                <div className='basket_product_top grid grid-cols-12 border-b-[2px] justify-center items-center  text-[12px] md:text-[14px] font-semibold py-3'>
                  <span className='col-span-6 md:col-span-8'>Artykuł</span>
                  <span className='col-span-2 md:col-auto text-center w-auto'>Ilość</span>
                  <span className='col-span-2 md:col-auto text-center'>Cena</span>
                  <span className='text-center col-span-2'>Wartość</span>
                </div>
                {
                  basketProducts.map(el => {
                    return (
                        <div className='modal_basket_product grid grid-cols-12 justify-center items-start py-4 text-[13px] md:text-[16px] border-b-[1px]'>
                            <div className='relative col-span-2 border-black rounded-sm'><Image src={urlFor(el.product_img[0]).url()} width={120} height={120} style={{objectFit:"contain"}} alt="modal_basket_image"/></div>
                            <div className='product_name col-span-4 md:col-span-6 font-semibold text-[14px] flex flex-col justify-center'>
                              <span className='cursor-pointer text-black hover:text-[#d4a82f] transition-all'>{el.product_name}</span>
                              <span onClick={() => basketActionsHandler("REMOVE", dispatch, el.product_id)} className='cursor-pointer font-light text-[#777] hover:text-[#d4a82f] transition-all flex'><CloseIcon fontSize='small'/>Usuń artykuł</span>
                            </div>
                            <div className='col-span-2 md:col-auto product_quantity text-center flex flex-col'>
                              <span className='cursor-pointer' onClick={() => basketActionsHandler("INCRAMENT", dispatch, el.product_id)}><ArrowDropUpIcon fontSize='medium'/></span>
                              <span>{el.quantity}</span>
                              <span className='cursor-pointer' onClick={() => basketActionsHandler("DECRAMENT", dispatch, el.product_id)}><ArrowDropDownIcon fontSize='medium'/></span>
                            </div>
                            <div className='col-span-2 md:col-auto single_product_price text-center'>{el.price} zł</div>
                            <div className='product_quantity_price text-center col-span-2'>{el.price * el.quantity} zł</div>
                        </div> 
                    )
                  })
                }
                <div className='modal_basket_buttons font-light p-3 flex justify-between items-center text-[12px] md:text-[15px]'>
                  <button className='px-3 py-1 border-[1px] border-[#adadad]'>Kontynuuj zakupy</button>
                  <button className='px-3 py-1 shadow-lg w-[120px] md:w-[150px] bg-[#F4C1C5] text-[#ae535a] hover:bg-[#c7747b] hover:text-white' >Do kasy</button>
                </div>
                </>
              )
            }
          </div>
      </section>
      <Footer />
    </div>

  )
}

export default Basket


//Basket jest komponentem, który renderuje zawartość koszyka użytkownika serwisu.
    // W zależności od tego czy użytkownik jest zalogowany czy nie komponent renderuje zawartość stanu
// lokalnego koszyka, który jest cachowany w pamięci podręcznej przeglądarki(bez logowania) lub wyświetla koszyk użytkownika,
// który jest aktualnie zalogowany.

    // Gdy użytkownik "Gość" dodaje produkty do koszyka to zostaną one zapisane w pamięci podręcznej. Jeżeli natomiast użytkownik ten postanowi np. 
// założyć nowe konto w serwisie, bądź zalogować się do już istniejącego konta to koszyk zostanie przekazany do nowego lub już istniejące konta  i tym samym
// lokalny koszyk gościa zostanie wyczyszczony, a jego zawartość przed tym zostanie wyemigrowana do stanu nowego lub istniejącego już użytkownika.