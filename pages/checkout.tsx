import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { getFinalPrice, showLocalBasket } from '../redux/slices/localBasketSlice'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer/Footer'
import { urlFor } from '../sanity'
import Image from 'next/image'
import Router from 'next/router'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput';
import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import CheckoutForm from '../components/Checkout/CheckoutForm'


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
                            
                            </div>
                            <div className='col-span-2 md:col-auto product_quantity text-center flex flex-col items-end'>
                              <span className='text-left w-[15px]'>{el.quantity}</span>     
                            </div>
                            <div className='col-span-2 md:col-auto single_product_price text-right'>{el.price} zł</div>
                            <div className='product_quantity_price text-right col-span-2'>{el.price * el.quantity} zł</div>
                        </div> 
                    )
                  })
                }
                <div className='basket_sumamry border-t-[2px] border-black'>
                  <div className='basket_full_price flex justify-between text-[14px] bg-[#F5F5F5] p-3'>
                    <span className='font-light'>Wartość koszyka</span>
                    <span>{finalPrice} zł</span>
                  </div>
                  <div className='checkout_delivery_price flex justify-between text-[14px] bg-[#F5F5F5] p-3'>
                    <span className='font-light'>Koszt dostawy</span>
                    <span>90 zł</span>
                  </div>
                  <div className='checkout_delivery_price flex justify-between text-[14px] bg-[#F5F5F5] p-3'>
                    <span className='font-semibold'>RAZEM</span>
                    <span className='font-semibold'>{finalPrice + 90} zł</span>
                  </div>
                  <div className='basket_delivery_notation text-[14px] bg-[#F5F5F5] p-3 border-t-[1px]'>
                    <span className='font-light'>Wysyłka zamówienia w 24 godziny. DARMOWY ZWROT do 100 dni.</span>
                  </div>
                </div>
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