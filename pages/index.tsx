import _ from 'lodash'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {useSelector } from 'react-redux'
import MediaQuery from 'react-responsive'
import CustomTextButton from '../components/button/CustomTextButton'
import Navigation from '../components/Navigation'
import { getFourRandomtAmountProducts } from '../redux/slices/productsSlice'
import { RootState } from '../redux/store'

import RandomAmountProducts from '../components/RandomAmountProducts/RandomAmountProducts'
import ProductPresentation from '../components/ProductsPresentations/ProductPresentation'

//PRODUCT PRESENTATION

import przewodnik_prezentowy_desktop from '../public/landing_images/prezent_idealny/przewodnik_prezentowy_big.jpg'
import przewodnik_prezentowy_mobile from '../public/landing_images/prezent_idealny/przewodnik_prezentowy_mobile.webp'
import szkatulki_desktop from '../public/landing_images/prezent_idealny/szkatułki_desktop.jpg';
import szkatulki_mobile from '../public/landing_images/prezent_idealny/szkatułki_mobile.webp'


const Home = () => {
  // const isTabletOrLess = useMediaQuery({ query: '(max-width: 768px)' }) // to uzycie react-responsive powodowało przy zwróceniu true z tego query Re-render kompoonentu!!!!!
  const [isMounted, setIsMounted] = useState(false) // pozwala na uniknięcie Hydration Error. 
  useEffect(() => {
    console.log("HOME MOUNTED")
    setIsMounted(true)
  },[])

  return isMounted ?// Renderujemy layout kiedy komponent się zamontuje
    <div className='box-border'>
      <Head>
        <title>Apart redesign</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>
      <section className='home-landing w-full flex flex-col justify-center items-center'>
        <div className='landing-image relative w-full h-auto'>
          <MediaQuery maxWidth={1024}>
            <Image width={2000} height={1000} alt='landing_apart_image' priority style={{objectFit:"contain"}} src={"/../public/landing_images/top-02_mobile.webp"}/>            
          </MediaQuery>
          <MediaQuery minWidth={1024}>
            <Image width={2000} height={1000} alt='landing_apart_image' priority style={{objectFit:"contain"}} src={"/../public/landing_images/top_01.jpg"}/>            
          </MediaQuery>
          
          <CustomTextButton textContent={'KUP PREZENT'} isAbsolute={true} position={"top-[90%] left-[5%] md:top-[75%] md:left-[15%] lg:left-[17%] xl:left-[18.5%]"} hrefQuery={'/'}/>
        </div>
        <RandomAmountProducts header={"NIESKOŃCZONOŚĆ PRODUKTÓW"} /> 
        {/* Komponent zwracający Div, który zawiera header i losowe produkty zawarte w randomProducts w systemie grid */}
        <ProductPresentation products={[[przewodnik_prezentowy_desktop, przewodnik_prezentowy_mobile, "Przewodnik prezentowy", "Przygotowany z myślą o mężczyznach chcących poznać nasze rady i sugestie przed wyborem prezentu na 8 marca."],[szkatulki_desktop, szkatulki_mobile, "Szkatułki", "Idealny - estetyczny oraz praktyczny - upominek dla kobiety kochającej i kolekcjonującej biżuterię oraz zegarki."]]} />
      </section>
    </div>
  :null
}
export default Home


// export const getServerSideProps:GetServerSideProps<Props> = async () => {
//   const categories = await autoFetch<Category[]>("getCategories") //Category is a reutrn Type and string is API route which we targeting with function
//   let products = await autoFetch<ProductList>("getProducts")
//   return {
//       props:{

//       }
//     }
// }
// Z powyższego nie korzystamy ze względu na to że products i categories są pobierane przed zainicjowaniem komponentu MyApp i w tym komponencie dodawane są do stanu aplikacji