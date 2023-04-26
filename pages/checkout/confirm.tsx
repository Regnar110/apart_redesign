import Router, { useRouter } from 'next/router'
import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navigation from '../../components/Navigation'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { getFinalPrice, showLocalBasket } from '../../redux/slices/localBasketSlice'
import Image from 'next/image'
import stripeLogo from '../../public/stripe.png'
import BasketProductsGrid from '../../components/BasketProducts/BasketProductsGrid'
import BasketProduct from '../../components/BasketProducts/BasketProduct'
import BasketSummary from '../../components/BasketProducts/BasketSummary'

const confirm = () => {
  const {query} = useRouter()

  const basketProducts = useSelector((state:RootState) => showLocalBasket(state))
  const finalPrice = useSelector((state:RootState) => getFinalPrice(state))
  console.log(query)
  return (
    <div className='checkout_page flex flex-col justify-center items-center'>
        <Head>
          <title>Podsumowanie</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation stickToTop={true} />
      <section className='checkout_page_content min-h-[450px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] pt-10 px-2 md:px-0'>
        <h1 className='text-[28px] font-light'>Zamówienie - Podsumowanie</h1>
        {
              basketProducts.length === 0 ? <span>Najpierw wrzuć coś do koszyka!</span>
              :
              (
                <>
                <BasketProductsGrid>
                  {
                    basketProducts.map((el) => <BasketProduct product={el} productIsEditable={false}/>)
                  }
                </BasketProductsGrid>
                <BasketSummary finalPrice={finalPrice} discount={true} delivery_price={true}/>
                </>
              )
            }
            <div className='delivery_summary flex flex-col md:flex-row'>
              <div className='delivery_person_data min-w-[290px] flex flex-col font-light text-[14px]'>
                <h1 className='text-[18px] font-light my-2'>Dostawa</h1>
                <span>{query.name}  {query.surname}</span>
                <span>{query.street}</span>
                <span>{query.postalCode} {query.city}</span>
                <span>Polska</span>
                <span>Tel: {query.phoneNumber}</span>
              </div>
              <div className='delivery_type_summary min-w-[290px] font-light text-[14px]'>
                <h1 className='text-[17px] font-light my-2'>Sposób dostawy</h1>
                <span>Kurier</span>
                <div className='payment flex flex-col mt-2 gap-y-2'>
                  <h1 className='text-[17px] font-light'>Płatność</h1>
                  <Image src={stripeLogo} width={100} height={100} style={{objectFit:"contain"}} alt='stripe_logo'/>
                  <span className='text-[12px]'>Płatnośc przy pomocy Stripe</span>
                </div>
              </div>
            </div>
            <div className='summary_buttons font-light p-3 flex justify-between items-center text-[12px] md:text-[15px]'>
              <button onClick={() => Router.push("/checkout")} className='px-3 py-1 border-[1px] border-[#adadad]'>Wstecz</button>
              <button type='submit' className='px-3 py-1 shadow-lg w-[120px] md:w-[170px] bg-[#F4C1C5] text-[#ae535a] hover:bg-[#c7747b] hover:text-white' >Kupuję i płacę</button>
            </div>
      </section>
      <Footer />
    </div>
  )
}

export default confirm
confirm