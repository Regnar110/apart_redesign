import React, { useState } from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { getFinalPrice, showLocalBasket } from '../redux/slices/localBasketSlice'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer/Footer';
import FastShopingProducts from '../components/FastShoppingProducts/FastShopingProducts';
import BasketModal from '../components/BasketModal/BasketModal';
import Router from 'next/router';
import BasketProduct from '../components/BasketProducts/BasketProduct';
import BasketProductsGrid from '../components/BasketProducts/BasketProductsGrid'
import BasketSummary from '../components/BasketProducts/BasketSummary'
import BasketAlertMessage from '../components/BasketProducts/BasketAlertMessage'

const Basket = () => { 
  const [basketModal, setBasketModal] = useState<boolean>(false)
  const notifyBasket = (status:boolean) => setBasketModal(status)
    const basketProducts = useSelector((state:RootState) => showLocalBasket(state))
    const finalPrice = useSelector((state:RootState) => getFinalPrice(state))
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
                <BasketProductsGrid>
                  {
                    basketProducts.map((el) => <BasketProduct product={el} productIsEditable={true}/>)
                  }
                </BasketProductsGrid>
                <BasketSummary finalPrice={finalPrice} />
                </>
              )
            }
          </div>
          <FastShopingProducts notifyBasket={notifyBasket}/>
          <BasketAlertMessage/>
          <div className='modal_basket_buttons font-light p-3 flex justify-between items-center text-[12px] md:text-[15px]'>
            <button className='px-3 py-1 border-[1px] border-[#adadad]'>Kontynuuj zakupy</button>
            <button onClick={() => Router.push("/checkout")} className='px-3 py-1 shadow-lg w-[120px] md:w-[170px] bg-[#F4C1C5] text-[#ae535a] hover:bg-[#c7747b] hover:text-white' >ZŁÓŻ ZAMÓWIENIE</button>
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