import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import CustomTextButton from '../components/button/customTextButton'
import Navigation from '../components/Navigation'
import { autoFetch } from '../utils/autoFetch'

const Home = () => {
  const [isMounted, setIsMounted] = useState(false)
  const isTabletOrLess = useMediaQuery({ query: '(max-width: 768px)' })

  useEffect(() => {
    setIsMounted(true) //pomocniczno umożliwia działanie useMediaQuery tj react-responsive
  },[])
  return isMounted ?
    
    <div className='h-[2000px]'>
      <Head>
        <title>Apart redesign</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>
      <section className=' w-full'>
        <div className='relative w-full h-auto'>
          <Image width={2000} height={1000} alt='landing_apart_image' priority style={{objectFit:"contain"}} src={isTabletOrLess? "/../public/landing_images/top-02_mobile.webp" : "/../public/landing_images/top_01.jpg"}/>
          <CustomTextButton textContent='KUP PREZENT'/>
        </div>
      </section>
    </div>
  : null
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