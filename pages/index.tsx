import _ from 'lodash'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'

import RandomAmountProducts from '../components/RandomAmountProducts/RandomAmountProducts'
import ProductPresentation from '../components/ProductsPresentations/ProductPresentation'

//BigLandingImageWithButton component image src's:

import firstLandingImage from '../public/landing_images/top_01.jpg'
import firstLandingImageMobile from '../public/landing_images/top-02_mobile.webp'
import secondLandingImage from '../public/landing_images/nasze-kolekcje_landing_one_desktop.jpg'
import secondLandingImageMobile from '../public/landing_images/nasze_kolekcje_landing_TWO.webp'
import thirdLandingImage from '../public/landing_images/diamenty_premium_desktop.jpg'
import thirdLandingImageMobile from '../public/landing_images/diamenty_premium_mobile.webp'
import fourthLandingImage from '../public/landing_images/zaręczyny_desktop.jpg'
import fourthLandingImageMobile from '../public/landing_images/zaręczyny_mobile.webp'
import fiveLandingImage from '../public/landing_images/nasza_bizuteria_desktop.jpg'
import fiveLandingImageMobile from '../public/landing_images/nasza_bizuteria_mobile.webp'
import sixLandingImage from '../public/landing_images/disney_desktop.jpg'
import sixLandingImageMobile from '../public/landing_images/disney_mobile.webp'

//PRODUCT PRESENTATION

import przewodnik_prezentowy_desktop from '../public/landing_images/prezent_idealny/przewodnik_prezentowy_big.jpg'
import przewodnik_prezentowy_mobile from '../public/landing_images/prezent_idealny/przewodnik_prezentowy_mobile.webp'
import szkatulki_desktop from '../public/landing_images/prezent_idealny/szkatułki_desktop.jpg';
import szkatulki_mobile from '../public/landing_images/prezent_idealny/szkatułki_mobile.webp'
import BigLandingImageWithButton from '../components/BigLandingImageWithButton/BigLandingImage'


const Home = () => {
  // const isTabletOrLess = useMediaQuery({ query: '(max-width: 768px)' }) // to uzycie react-responsive powodowało przy zwróceniu true z tego query Re-render kompoonentu!!!!!
  const [isMounted, setIsMounted] = useState(false) // pozwala na uniknięcie Hydration Error. 
  useEffect(() => {
    console.log("HOME MOUNTED")
    setIsMounted(true)
  },[])

  return isMounted ?// Renderujemy layout kiedy komponent się zamontuje
    <div className='box-border overflow-hidden'>
      <Head>
        <title>Apart redesign</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>
      <section className='home-landing w-full flex flex-col justify-center items-center'>
        <BigLandingImageWithButton 
          maxQueryWidth={1024} 
          minQueryWidth={1025} 
          imageWidth={2000} 
          imageHeight={2000}
          mobileImageSrc={firstLandingImageMobile}
          desktopImageSrc={firstLandingImage}
          buttonTextContent={'KUP PREZENT'}
          buttonIsAbsolute={true}
          buttonPosition={"top-[90%] left-[5%] md:top-[75%] md:left-[15%] lg:left-[17%] xl:left-[18.5%]"}
          buttonHref={'/'} 
        />
        <RandomAmountProducts header={"NIESKOŃCZONOŚĆ PRODUKTÓW"} /> 
        {/* Komponent zwracający Div, który zawiera header i losowe produkty zawarte w randomProducts w systemie grid */}
        <ProductPresentation products={[[przewodnik_prezentowy_desktop, przewodnik_prezentowy_mobile, "Przewodnik prezentowy", "Przygotowany z myślą o mężczyznach chcących poznać nasze rady i sugestie przed wyborem prezentu na 8 marca."],[szkatulki_desktop, szkatulki_mobile, "Szkatułki", "Idealny - estetyczny oraz praktyczny - upominek dla kobiety kochającej i kolekcjonującej biżuterię oraz zegarki."]]} />
        <h1 className='text-center font-bold text-[4vw] sm:text-[3.1vw] md:text-[2.8vw]  lg:text-[1.8vw] my-7'>NASZE KOLEKCJE</h1>
        <BigLandingImageWithButton 
          hasTitles={
            {
              top_title:"kolekcja w Twoim",
              bottom_title:"stylu",
              
              desktop: {
                placing:"right",
                titles_color:"text-black",
                desktopButtonPosition: "top-[90%] left-[5%] md:top-[100%] lg:left-[72%] xl:left-[74%]"
              },
              mobile: {
                placing:"center",
                titles_color:"text-white",
                buttonWidth: "w-[200px]"
              }
            }
          }
          maxQueryWidth={1024} 
          minQueryWidth={1025} 
          imageWidth={2000} 
          imageHeight={2000}
          mobileImageSrc={secondLandingImageMobile}
          desktopImageSrc={secondLandingImage}
          buttonTextContent={'POZNAJ KOLEKCJE APART'}
          buttonIsAbsolute={true}
          buttonPosition={"top-[90%] left-[5%] md:top-[75%] md:left-[15%] lg:left-[17%] xl:left-[18.5%]"}
          buttonHref={'/'} 
        />
        <h1 className='text-center font-bold text-[4vw] sm:text-[3.1vw] md:text-[2.8vw]  lg:text-[1.8vw] my-7'>BIŻUTERIA Z DIAMENTAMI</h1>
        <BigLandingImageWithButton 
          hasTitles={
            {
              top_title:"diamenty",
              bottom_title:"premium",
              
              desktop: {
                placing:"right",
                titles_color:"text-black",
                desktopButtonPosition: "top-[90%] left-[5%] md:top-[100%] lg:left-[72%] xl:left-[74%]"
              },
              mobile: {
                placing:"center",
                titles_color:"text-white",
                buttonWidth: "w-[200px]"
              }
            }
          }
          maxQueryWidth={1024} 
          minQueryWidth={1025} 
          imageWidth={2000} 
          imageHeight={2000}
          mobileImageSrc={thirdLandingImageMobile}
          desktopImageSrc={thirdLandingImage}
          buttonTextContent={'POZNAJ KOLEKCJE APART'}
          buttonIsAbsolute={true}
          buttonPosition={"top-[90%] left-[5%] md:top-[75%] md:left-[15%] lg:left-[17%] xl:left-[18.5%]"}
          buttonHref={'/'} 
        />
        <RandomAmountProducts header={""}/> 
        <h1 className='text-center font-bold text-[4vw] sm:text-[3.1vw] md:text-[2.8vw]  lg:text-[1.8vw] my-7'>PIERŚCIONKI ZARĘCZYNOWE</h1>
        <BigLandingImageWithButton 
          hasTitles={
            {
              top_title:"romantyczne",
              bottom_title:"zaręczyny",
              
              desktop: {
                placing:"left",
                titles_color:"text-white",
                desktopButtonPosition: "top-[90%] left-[5%] md:top-[100%] lg:left-[10%] xl:left-[15%]"
              },
              mobile: {
                placing:"center",
                titles_color:"text-white",

              }
            }
          }
          maxQueryWidth={1024} 
          minQueryWidth={1025} 
          imageWidth={2000} 
          imageHeight={2000}
          mobileImageSrc={fourthLandingImageMobile}
          desktopImageSrc={fourthLandingImage}
          buttonTextContent={'POZNAJ KOLEKCJE APART'}
          buttonIsAbsolute={true}
          buttonHref={'/'} 
        />
        <RandomAmountProducts header={""} categorySlug={"pierscionki"} /> 
        <h1 className='text-center font-bold text-[4vw] sm:text-[3.1vw] md:text-[2.8vw]  lg:text-[1.8vw] my-7'>NASZA BIŻUTERIA</h1>
        <BigLandingImageWithButton 
          hasTitles={
            {
              top_title:"dodatki zaprojektowane dla",
              bottom_title:"Ciebie",
              
              desktop: {
                placing:"right",
                titles_color:"text-black",
                desktopButtonPosition: "top-[90%] left-[5%] md:top-[100%] lg:left-[73%] xl:left-[77%]"
              },
              mobile: {
                placing:"center",
                titles_color:"text-white",

              }
            }
          }
          maxQueryWidth={1024} 
          minQueryWidth={1025} 
          imageWidth={2000} 
          imageHeight={2000}
          mobileImageSrc={fiveLandingImageMobile}
          desktopImageSrc={fiveLandingImage}
          buttonTextContent={'ODKRYJ BIŻUTERIĘ APART'}
          buttonIsAbsolute={true}
          buttonHref={'/'} 
        />
        <RandomAmountProducts header={"BIŻUTERIA W RÓŻNYCH PRZEDZIAŁACH CENOWYCH"} /> 
        <h1 className='text-center font-bold text-[4vw] sm:text-[3.1vw] md:text-[2.8vw]  lg:text-[1.8vw] my-7'>BIŻUTERIA I ZEGARKI NIE TYLKO DLA NAJMŁODSZYCH</h1>
        <BigLandingImageWithButton 
          maxQueryWidth={1024} 
          minQueryWidth={1025} 
          imageWidth={2000} 
          imageHeight={2000}
          mobileImageSrc={sixLandingImageMobile}
          desktopImageSrc={sixLandingImage}
          buttonTextContent={'ODKRYJ ŚWIAT DISNEY'}
          buttonIsAbsolute={true}
          arrowButton={true}
          buttonHref={'/'}
          buttonPosition={"top-[80%] left-[25%] md:top-[80%] sm:left-[37%] md:left-[42%] lg:left-[75%] xl:left-[70%]"}
        />

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