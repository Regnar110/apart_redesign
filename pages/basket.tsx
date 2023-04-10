import React, { useState } from 'react'
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
import FastShopingProducts from '../components/FastShoppingProducts/FastShopingProducts';
import BasketModal from '../components/BasketModal/BasketModal';

const Basket = () => { 
  const [basketModal, setBasketModal] = useState<boolean>(false)
  const notifyBasket = (status:boolean) => setBasketModal(status)
    const basketProducts = useSelector((state:RootState) => showLocalBasket(state))
    const finalPrice = useSelector((state:RootState) => getFinalPrice(state))
    const dispatch = useDispatch()
  return (
    <div className='basket_page box-border relative flex flex-col items-center'>
      <Head>
          <title>Mój koszyk</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation stickToTop={true} />
      <section className='basket_items_container font-roboto pt-10 px-2 md:px-0'>
          <div className='basket min-h-[450px] md:w-[768px] lg:w-[1024px] xl:w-[1280px]'>
            <h1 className='text-[28px] font-light'>Mój koszyk</h1>
            {
              basketProducts.length === 0 ? <span>Twój koszyk jest pusty</span>
              :
              (
                <>
                <div className='basket_product_top grid grid-cols-12 border-b-[2px] justify-center items-center  text-[12px] md:text-[14px] font-semibold py-3'>
                  <span className='col-span-6 md:col-span-8'>Artykuł</span>
                  <span className='col-span-2 md:col-auto text-right w-auto'>Ilość</span>
                  <span className='col-span-2 md:col-auto text-right'>Cena</span>
                  <span className='text-right col-span-2'>Wartość</span>
                </div>
                {
                  basketProducts.map(el => {
                    return (
                        <div key={el.product_id} className='basket_product grid grid-cols-12 justify-center items-start py-4 text-[13px] md:text-[16px] border-b-[1px] px-3'>
                            <div className='relative col-span-2 border-black rounded-sm'><Image priority={true} src={urlFor(el.product_img[0]).url()} width={120} height={120} style={{objectFit:"contain", width:"auto", height:"auto"}} alt="modal_basket_image"/></div>
                            <div className='product_name col-span-4 md:col-span-6 font-semibold text-[14px] flex flex-col justify-center'>
                              <span className='cursor-pointer text-black hover:text-[#d4a82f] transition-all'>{el.product_name}</span>
                              <span onClick={() => basketActionsHandler("REMOVE", dispatch, el.product_id)} className='cursor-pointer font-light text-[#777] hover:text-[#d4a82f] transition-all flex'><CloseIcon fontSize='small'/>Usuń artykuł</span>
                            </div>
                            <div className='col-span-2 md:col-auto product_quantity text-center flex flex-col items-end'>
                              <span className='cursor-pointer' onClick={() => basketActionsHandler("INCRAMENT", dispatch, el.product_id)}><ArrowDropUpIcon fontSize='medium'/></span>
                              <span className='text-left w-[15px]'>{el.quantity}</span>
                              <span className='cursor-pointer' onClick={() => basketActionsHandler("DECRAMENT", dispatch, el.product_id)}><ArrowDropDownIcon fontSize='medium'/></span>
                            </div>
                            <div className='col-span-2 md:col-auto single_product_price text-right'>{el.price} zł</div>
                            <div className='product_quantity_price text-right col-span-2'>{el.price * el.quantity} zł</div>
                        </div> 
                    )
                  })
                }
                <div className='basket_sumamry'>
                  <div className='basket_full_price flex justify-between text-[14px] bg-[#F5F5F5] p-3'>
                    <span className='font-semibold'>Wartość koszyka</span>
                    <span>{finalPrice} zł</span>
                  </div>
                  <div className='basket_delivery_notation text-[14px] bg-[#F5F5F5] p-3 border-t-[1px]'>
                    <span className='font-light'>Wysyłka zamówienia w 24 godziny. DARMOWY ZWROT do 100 dni.</span>
                  </div>
                </div>
                </>
              )
            }
          </div>
          <FastShopingProducts notifyBasket={notifyBasket}/>
          <div className='basket_alert_message bg-[#FCF8E3] text-[12px] lg:text-[14px] font-light md:w-[768px] lg:w-[1024px] xl:w-[1280px] text-center p-10 lg:px-40 lg:py-10 flex flex-col gap-y-5'>
            <span>
              Jeśli posiadasz aktywną i zarejestrowaną kartę Apart Diamond Club, w celu skorzystania z przysługujących przywilejów i rabatów, w kolejnym kroku musisz się zalogować.
              Rabat zostanie wówczas naliczony automatycznie.
            </span>
            <span>
              Jeśli posiadasz kartę Apart Diamond Club <span className='font-semibold'>z kodem PIN na odwrocie</span>, która nie została jeszcze zarejestrowana, należy przed dokonaniem zakupu dokonać jej <span className='font-semibold'>rejestracji</span>.
            </span>
            <span>
              W przypadku posiadania karty ADC bez nadanego numeru PIN, prosimy na adres mailowy adc.bok@apart.pl podać:
              <br/>
              numer karty ADC, imię i nazwisko posiadacza karty ADC, adres do korespondencji, data urodzenia (opcjonalnie), numer telefonu do kontaktu.
              <br/>
              W godzinach pracy BOK można skontaktować się
              <br/>
              telefonicznie +48 61 89 55 555.
            </span>
          </div>
          <div className='modal_basket_buttons font-light p-3 flex justify-between items-center text-[12px] md:text-[15px]'>
            <button className='px-3 py-1 border-[1px] border-[#adadad]'>Kontynuuj zakupy</button>
            <button className='px-3 py-1 shadow-lg w-[120px] md:w-[150px] bg-[#F4C1C5] text-[#ae535a] hover:bg-[#c7747b] hover:text-white' >Do kasy</button>
          </div>
      </section>
      {
        basketModal ? <BasketModal notifyBasket={notifyBasket}/> :null
      }
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