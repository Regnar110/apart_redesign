import _ from 'lodash'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'

import RandomAmountProducts from '../components/RandomAmountProducts/RandomAmountProducts'
import ProductPresentation from '../components/ProductsPresentations/ProductPresentation'
import LandingHeader from '../components/LandingHeader/LandingHeader'
import FourCards from '../components/FourCards/FourCards'
import DoubleBrandsPresentation from '../components/DoubleBrandsPresentation/DoubleBrandsPresentation'

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

//FOUR CARDS COMPONENT ASSETS

import bizuteria_srebrna_pozlacane_desktop from '../public/FourCardsImages/set_one/bizuteria-srebrna-pozlacane_desktop.jpg'
import bizuteria_srebrna_pozlacane_mobile from '../public/FourCardsImages/set_one/bizuteria-srebrna-pozlacana_mobile.webp'
import bizuteria_z_diamentami_desktop from '../public/FourCardsImages/set_one/bizuteria-z-diamentami_desktop.jpg'
import bizuteria_z_diamentami_mobile from '../public/FourCardsImages/set_one/bizuteria-z-diamentami_mobile.webp'
import srebrna_bizuteria_desktop from '../public/FourCardsImages/set_one/srebrna-bizuteria_desktop.jpg'
import srebrna_bizuteria_mobile from '../public/FourCardsImages/set_one/srebrna-bizuteria_mobile.webp'
import zlota_bizuteria_desktop from '../public/FourCardsImages/set_one/zlota-bizuteria_desktop.jpg'
import zlota_bizuteria_mobile from '../public/FourCardsImages/set_one/zlota-bizuteria_mobile.webp'

import kids_desktop from '../public/FourCardsImages/set_two/kids_desktop.jpg'
import kids_mobile from '../public/FourCardsImages/set_two/kids_mobile.webp'
import mama_corka_desktop from '../public/FourCardsImages/set_two/mama_corka_desktop.jpg'
import mama_corka_mobile from '../public/FourCardsImages/set_two/mama_corka_mobile.webp'
import smartwatche_desktop from '../public/FourCardsImages/set_two/smartwatche_desktop.jpg'
import smartwatche_mobile from '../public/FourCardsImages/set_two/smartwatche_mobile.webp'
import teens_desktop from '../public/FourCardsImages/set_two/teens_desktop.jpg'
import teens_mobile from '../public/FourCardsImages/set_two/teens_mobile.webp'

import chrzest_desktop from '../public/FourCardsImages/set_three/chrzest_desktop.jpg'
import chrzest_mobile from '../public/FourCardsImages/set_three/chrzest_mobile.webp'
import narodziny_desktop from '../public/FourCardsImages/set_three/narodziny_desktop.jpg'
import narodziny_mobile from '../public/FourCardsImages/set_three/narodziny_mobile.webp'
import slub_desktop from '../public/FourCardsImages/set_three/ślub_desktop.jpg'
import slub_mobile from '../public/FourCardsImages/set_three/slub_mobile.webp'
import zareczyny_desktop from '../public/FourCardsImages/set_three/zareczyny_desktop.jpg'
import zareczyny_mobile from '../public/FourCardsImages/set_three/zaręczyny_mobile.webp'

//DOUBLE BRAND

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
      <section className='home-landing relative w-full flex flex-col justify-center items-center'>
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
        <LandingHeader headerContent={'NASZE KOLEKCJE'}/>
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
        <LandingHeader headerContent={'BIŻUTERIA I DIAMENTY'}/>
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
        <LandingHeader headerContent={'PIERŚCIONKI ZARĘCZYNOWE'}/>
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
        <LandingHeader headerContent={'NASZA BIŻUTERIA'}/>
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
        <FourCards title={
          {
            bottomText: "Biżuteryjne nowości w klasycznym lub modowym stylu. Wśród premierowych wzorów z pewnością czeka ten, który zachwyci",
            button: true,
            buttonText: "ZOBACZ NOWOŚCI",
            buttonWidth: "w-[170px]",
            position: "right"
          }
        } 
        cards={[
          {
            desktopImage: bizuteria_srebrna_pozlacane_desktop,
            mobileImage: bizuteria_srebrna_pozlacane_mobile,
            subTitle: "Biżuteria srebrna pozłacana",
            hrefQuery: "/"
          },
          {
            desktopImage: bizuteria_z_diamentami_desktop,
            mobileImage: bizuteria_z_diamentami_mobile,
            subTitle: "Biżuteria z diamentami",
            hrefQuery: "/"
          },
          {
            desktopImage: srebrna_bizuteria_desktop,
            mobileImage: srebrna_bizuteria_mobile,
            subTitle: "Srebrna biżuteria",
            hrefQuery: "/"
          },
          {
            desktopImage: zlota_bizuteria_desktop,
            mobileImage: zlota_bizuteria_mobile,
            subTitle: "Złota biżuteria",
            hrefQuery: "/"
          },
        ]}/>
        <RandomAmountProducts header={"BIŻUTERIA W RÓŻNYCH PRZEDZIAŁACH CENOWYCH"} /> 
        <LandingHeader headerContent={'BIŻUTERIA I ZEGARKI NIE TYLKO DLA NAJMŁODSZYCH'}/>
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
        <FourCards title={
          {
            topHeader_one:"Dla dziecka",
            topHeader_two: "i mamy",
            bottomText: "Wybrane kolekcje zaprojektowane dla dzieci, w których także ich mamy odkrywają biżuterię dla siebie",
            position: "right"
          }
        } 
        cards={[
          {
            desktopImage: teens_desktop,
            mobileImage: teens_mobile,
            subTitle: "Teens dla nastolatek",
            hrefQuery: "/"
          },
          {
            desktopImage: kids_desktop,
            mobileImage: kids_mobile,
            subTitle: "Biżuteria dla dzieci",
            hrefQuery: "/"
          },
          {
            desktopImage: smartwatche_desktop,
            mobileImage: smartwatche_mobile,
            subTitle: "Smartwatche dla dzieci i dorosłych",
            hrefQuery: "/"
          },
          {
            desktopImage: mama_corka_desktop,
            mobileImage: mama_corka_mobile,
            subTitle: "Biżuteria dla mamy i córki",
            hrefQuery: "/"
          },
        ]}/>
        <FourCards title={
          {
            topHeader_one:"Chwile warte",
            topHeader_two: "podkreślenia",
            bottomText: "W życiu są wydarzenia, które wymagają niezwykłej oprawy. Zobacz specjalne kolekcje, stworzone z myślą o zaręczynach, ślubie oraz narodzinach i chrzcie dziecka",
            position: "left",
            button:true,
            buttonText:"ZOBACZ WSZYSTKIE OKAZJE",
            buttonWidth:"w-[220px]"
          }
        } 
        cards={[
          {
            desktopImage: zareczyny_desktop,
            mobileImage: zareczyny_mobile,
            subTitle: "Zaręczyny",
            hrefQuery: "/"
          },
          {
            desktopImage: slub_desktop,
            mobileImage: slub_mobile,
            subTitle: "Biżuteria ślubna",
            hrefQuery: "/"
          },
          {
            desktopImage: narodziny_desktop,
            mobileImage: narodziny_mobile,
            subTitle: "Narodziny dziecka",
            hrefQuery: "/"
          },
          {
            desktopImage: chrzest_desktop,
            mobileImage: chrzest_mobile,
            subTitle: "Chrzest dziecka",
            hrefQuery: "/"
          },
        ]}/>
        <DoubleBrandsPresentation />
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