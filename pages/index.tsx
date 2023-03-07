import _ from 'lodash'
import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import MediaQuery from 'react-responsive'
import CustomTextButton from '../components/button/CustomTextButton'
import Navigation from '../components/Navigation'
import { getFourRandomtAmountProducts } from '../redux/slices/productsSlice'
import { RootState } from '../redux/store'
import { urlFor } from '../sanity'
import { autoFetch } from '../utils/autoFetch'
import Router from 'next/router'

const Home = () => {
  // const isTabletOrLess = useMediaQuery({ query: '(max-width: 768px)' }) // to uzycie react-responsive powodowało przy zwróceniu true z tego query Re-render kompoonentu!!!!!
  const randomProducts = useSelector((state:RootState) => getFourRandomtAmountProducts(state, 4))
  useEffect(() => {
    console.log("HOME MOUNTED")
  },[])

  return randomProducts.length>1 ?(
    <div className='h-[2000px]'>
      <Head>
        <title>Apart redesign</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>
      <section className='home-landing w-full'>
        <div className='landing-image relative w-full h-auto'>
          <MediaQuery maxWidth={1024}>
            <Image width={2000} height={1000} alt='landing_apart_image' priority style={{objectFit:"contain"}} src={"/../public/landing_images/top-02_mobile.webp"}/>            
          </MediaQuery>
          <MediaQuery minWidth={1024}>
            <Image width={2000} height={1000} alt='landing_apart_image' priority style={{objectFit:"contain"}} src={"/../public/landing_images/top_01.jpg"}/>            
          </MediaQuery>
          
          <CustomTextButton textContent={'KUP PREZENT'} isAbsolute={true} position={"top-[90%] left-[5%] md:top-[75%] md:left-[15%] lg:left-[17%] xl:left-[18.5%]"} hover_color={"bg-[#F39DAA]"}/>
        </div>
        <div className='landing-random-products p-3 flex flex-col justify-center items-center'>
          <h1 className='font-bold text-black text-[16px] md:text-[17px] lg:text-[22px] text-center'>ZAKOCHAJ SIĘ W PRODUKTACH APART</h1>
          <div className='rp-wrapper w-12/12 md:w-10/12 grid grid-flow-col grid-rows-2 lg:grid-rows-1 auto-cols-fr gap-5'>
            {
              randomProducts.map(el => {
                return (
                  <div onClick={() => Router.push(`/product/${el.category._ref}/${el._id}`)} className='relative random-product cursor-pointer flex flex-col items-center justify-center border-1 rounded-md p-2 shadow-md transition-all hover:scale-[1.02]'>
                    <MediaQuery maxWidth={1024}>
                      <Image width={250} height={250} style={{objectFit:"contain"}} src={urlFor(el.image[0]).url()} alt={'product_image'} />            
                    </MediaQuery>
                    <MediaQuery minWidth={1024}>
                      <Image width={350} height={350} style={{objectFit:"contain"}} src={urlFor(el.image[0]).url()} alt={'product_image'} />            
                    </MediaQuery>
      
                    <span className='text-center text-[12px] md:text-[14px] lg:text-[16px] m-2'>{el.title.toUpperCase()}</span>
                    <CustomTextButton textContent='Sprawdź' isArrow={true}/>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </div>
  ):null
}
export default Home


export const getServerSideProps:GetServerSideProps<Props> = async () => {
  const categories = await autoFetch<Category[]>("getCategories") //Category is a reutrn Type and string is API route which we targeting with function
  let products = await autoFetch<ProductList>("getProducts")
  return {
      props:{
        categories,
        products
      }
    }
}