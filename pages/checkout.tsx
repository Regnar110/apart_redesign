import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { getFinalPrice, showLocalBasket } from '../redux/slices/localBasketSlice'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer/Footer'
import CheckoutForm from '../components/Checkout/CheckoutForm'
import BasketProductsGrid from '../components/BasketProducts/BasketProductsGrid'
import BasketProduct from '../components/BasketProducts/BasketProduct'
import BasketSummary from '../components/BasketProducts/BasketSummary'


const checkout = () => {
    const basketProducts = useSelector((state:RootState) => showLocalBasket(state))
    const finalPrice = useSelector((state:RootState) => getFinalPrice(state))
    console.log(basketProducts)
  return (
    <div className='checkout_page flex flex-col justify-center items-center'>
        <Head>
          <title>Rozliczenie</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation stickToTop={true} />
      <section className='checkout_page_content min-h-[450px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] pt-10 px-2 md:px-0'>
        <h1 className='text-[28px] font-light'>Zamówienie - Dostawa i płatność</h1>
        {
              basketProducts.length === 0 ? <span>Nie masz żadnych zakupów w koszyku!</span>
              :
              (
                <>
                <BasketProductsGrid>
                  {
                    basketProducts.map((el) => <BasketProduct product={el} productIsEditable={false}/>)
                  }
                </BasketProductsGrid>
                <BasketSummary finalPrice={finalPrice} delivery_price={true} />
                </>
              )
            }
            <CheckoutForm />
      </section>
      <Footer />
    </div>
  )
}
export default checkout