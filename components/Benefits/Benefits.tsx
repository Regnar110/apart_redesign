import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";

//DESKTOP 
import zwrot from '../../public/korzysci/100-dni-zwrot.svg'
import dostawa from '../../public/korzysci/dostawa-gratis.svg'
import opakowanie from '../../public/korzysci/piekne-opakowanie.svg'
import produkty from '../../public/korzysci/piekne-produkty.svg'
import raty from '../../public/korzysci/raty-0.svg'
import szybkie_zwroty from '../../public/korzysci/szybkie-zwroty.svg'
import wysylka_prezent from '../../public/korzysci/wysylka-jako-prezent.svg'
import wysylka_24 from '../../public/korzysci/wysylka-w-24h.svg'
import zamow_przez_tel from '../../public/korzysci/zamow-przez-telefon.svg'
import zaplac from '../../public/korzysci/zaplac-za-30-dni.svg'
import MediaQuery from 'react-responsive'

//MOBILE
import zwrot_mobile from '../../public/korzysci/mobile/100-dni-1x.webp'
import dostawa_mobile from '../../public/korzysci/mobile/dostawa-1x.webp'
import opakowanie_mobile from '../../public/korzysci/mobile/piekne-opakowanie-gratis-1x.webp'
import produkty_mobile from '../../public/korzysci/mobile/24000-produktow-1x.webp'
import raty_mobile from '../../public/korzysci/mobile/raty-1x.webp'
import szybkie_zwroty_mobile from '../../public/korzysci/mobile/szybkie-zwroty-1x.webp'
import wysylka_prezent_mobile from '../../public/korzysci/mobile/wysylka-jako-prezent-1x.webp'
import wysylka_24_mobile from '../../public/korzysci/mobile/24h-1x.webp'
import zamow_przez_tel_mobile from '../../public/korzysci/mobile/telefon-1x.webp'
import zaplac_mobile from '../../public/korzysci/mobile/paypo-1x.webp'


const Benefits = () => {
    const [isMounted, setIsMounted] = useState(false) // pozwala na uniknięcie Hydration Error. 
    useEffect(() => {
      setIsMounted(true)
    },[])
  return isMounted ?
    <>
    <MediaQuery minWidth={768}>
        <div className='benefits_container w-full flex flex-col justify-center items-center gap-y-5 '>
            <div className='benefits_row_one flex gap-10 xl:gap-20 md:text-[12px] lg:text-[14px] text-center mx-10 lg:mx-0'>
                <div className='benefit flex flex-col justify-start items-center'>
                    <div className='benefit_svg_containet w-[60px] xl:w-[80px]'>
                        <Image src={zwrot} style={{objectFit:"contain"}} alt="korzysc"/>                
                    </div>
                    <p className='font-bold'>100 DNI</p>
                    <p>NA DARMOWY ZWROT</p>
                </div>
                <div className='benefit flex flex-col justify-start items-center'>
                    <div className='benefit_svg_containet w-[60px] xl:w-[80px]'>
                        <Image src={dostawa} style={{objectFit:"contain"}} alt="korzysc"/>                
                    </div>
                    <p className='font-bold'>DOSTAWA GRATIS</p>
                    <p>DO 30TYS. PUNKTÓW</p>
                    <p>ODBIORU LUB DOMU</p>
                </div>
                <div className='benefit flex flex-col justify-start items-center'>
                    <div className='benefit_svg_containet w-[60px] xl:w-[80px]'>
                        <Image src={opakowanie} style={{objectFit:"contain"}} alt="korzysc"/>                
                    </div>
                    <p>PIĘKNE OPAKOWANIE</p>
                    <p className='font-bold'>GRATIS</p>
                </div>
                <div className='benefit flex flex-col justify-start items-center'>
                    <div className='benefit_svg_containet w-[60px] xl:w-[80px]'>
                        <Image src={produkty} style={{objectFit:"contain"}} alt="korzysc"/>                
                    </div>
                    <p>PONAD <span className='font-bold'>24 000</span></p>
                    <p>PIĘKNYCH PRODUKTÓW</p>
                </div>
                <div className='benefit flex flex-col justify-start items-center'>
                    <div className='benefit_svg_containet w-[60px] xl:w-[80px]'>
                        <Image src={raty} style={{objectFit:"contain"}} alt="korzysc"/>                
                    </div>
                    <p>ZAKUP NA RATY 0%</p>
                    <p>OD 300 ZŁ - <span className='font-bold'>RRSO 0%</span></p>
                </div>
            </div>

            <div className='benefits_row_two flex gap-10 xl:gap-20 md:text-[12px] lg:text-[14px] text-center mx-10 lg:mx-0'>
                <div className='benefit flex flex-col justify-start items-center'>
                    <div className='benefit_svg_containet w-[60px] xl:w-[80px]'>
                        <Image src={szybkie_zwroty} style={{objectFit:"contain"}} alt="korzysc"/>                
                    </div>
                    <p>SZYBKIE ZWROTY</p>
                    <p>DO <span className='font-bold'>PACZKOMATÓW</span></p>
                </div>
                <div className='benefit flex flex-col justify-start items-center'>
                    <div className='benefit_svg_containet w-[60px] xl:w-[80px]'>
                        <Image src={wysylka_prezent} style={{objectFit:"contain"}} alt="korzysc"/>                
                    </div>
                    <p>WYSYŁKA JAKO <span className='font-bold'>PREZENT</span></p>
                    <p>Z DEDYKACJĄ</p>
                </div>
                <div className='benefit flex flex-col justify-start items-center'>
                    <div className='benefit_svg_containet w-[60px] xl:w-[80px]'>
                        <Image src={wysylka_24} style={{objectFit:"contain"}} alt="korzysc"/>                
                    </div>
                    <p>WYSYŁKA WIĘKSZOŚCI</p>
                    <p>PRODUKTÓW W <span className='font-bold'>24H</span></p>
                </div>
                <div className='benefit flex flex-col justify-start items-center'>
                    <div className='benefit_svg_containet w-[60px] xl:w-[80px]'>
                        <Image src={zamow_przez_tel} style={{objectFit:"contain"}} alt="korzysc"/>                
                    </div>
                    <p>ZAMÓW PRZEZ <span className='font-bold'>TELEFON</span></p>
                    <p>LUB <span className='font-bold'>ZAREZERWUJ</span> W SALONIE</p>
                </div>
                <div className='benefit flex flex-col justify-start items-center font-roboto'>
                    <div className='benefit_svg_containet w-[60px] xl:w-[80px]'>
                        <Image src={zaplac} style={{objectFit:"contain"}} alt="korzysc"/>                
                    </div>
                    <p>ZAPLAC ZA 30 DNI</p>
                    <p>Z <span className='font-bold'>PAYPO</span></p>
                </div>
            </div>
        </div>
    </MediaQuery>
    <MediaQuery maxWidth={767}>
        <div className='benefits_swiper relative w-full'>
            <Swiper 
                slidesPerView={1}
                pagination={{dynamicBullets:true}}
                modules={[Pagination]}
            >
                <SwiperSlide><Image src={zwrot_mobile} style={{objectFit:"contain", width:"100%"}} alt="korzysc"/></SwiperSlide>
                <SwiperSlide><Image src={dostawa_mobile} style={{objectFit:"contain", width:"100%"}} alt="korzysc"/></SwiperSlide>
                <SwiperSlide><Image src={opakowanie_mobile} style={{objectFit:"contain", width:"100%"}} alt="korzysc"/></SwiperSlide>
                <SwiperSlide><Image src={produkty_mobile} style={{objectFit:"contain", width:"100%"}} alt="korzysc"/></SwiperSlide>
                <SwiperSlide><Image src={raty_mobile} style={{objectFit:"contain", width:"100%"}} alt="korzysc"/></SwiperSlide>
                <SwiperSlide><Image src={szybkie_zwroty_mobile} style={{objectFit:"contain", width:"100%"}} alt="korzysc"/></SwiperSlide>
                <SwiperSlide><Image src={wysylka_24_mobile} style={{objectFit:"contain", width:"100%"}} alt="korzysc"/></SwiperSlide>
                <SwiperSlide><Image src={wysylka_prezent_mobile} style={{objectFit:"contain", width:"100%"}} alt="korzysc"/></SwiperSlide>
                <SwiperSlide><Image src={zamow_przez_tel_mobile} style={{objectFit:"contain", width:"100%"}} alt="korzysc"/></SwiperSlide>
                <SwiperSlide><Image src={zaplac_mobile} style={{objectFit:"contain", width:"100%"}} alt="korzysc"/></SwiperSlide>

            </Swiper>        
        </div>
    </MediaQuery>
    </>
  :
  null
}

export default Benefits
