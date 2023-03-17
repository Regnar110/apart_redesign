import React from 'react'
import Image from 'next/image'
import CustomTextButton from '../button/CustomTextButton'
import MediaQuery from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";

//DESKTOP
import promoce_bizuteria from '../../public/promocje/promocje-bizuteria.jpg'
import promocje_zegarki from '../../public/promocje/promocje-zegarki.jpg'
import adc from '../../public/promocje/adc.jpg'
//MOBILE
import promocje_zegarki_mobile from '../../public/promocje/promocje-zegarki-mobile.webp'
import promocje_bizuteria_mobile from '../../public/promocje/promocje-bizuteria-mobile.webp'
import adc_mobile from '../../public/promocje/adc-mobile.webp'

const ThreeCards = () => {
  return (
    <>
        <MediaQuery minWidth={768}>
        <div className='three_cards_container w-[70%] flex justify-center gap-3 my-1'>
            <div className='card relative m-0'>
                <Image className='m-0' src={promoce_bizuteria} style={{objectFit:"contain"}} alt="card"/>
                <CustomTextButton textContent='SKORZYSTAJ' hrefQuery='/' isArrow={true}/>
            </div>
            <div className='card relative m-0'>
                <Image className='m-0' src={promocje_zegarki} style={{objectFit:"contain"}} alt="card"/>
                <CustomTextButton textContent='SKORZYSTAJ' hrefQuery='/'  isArrow={true}/>
            </div>
            <div className='card relative m-0'>
                <Image className='m-0' src={adc} style={{objectFit:"contain"}} alt="card"/>
                <CustomTextButton textContent='SKORZYSTAJ' hrefQuery='/' isArrow={true}/>
            </div>
        </div>
        </MediaQuery>
        <MediaQuery maxWidth={767}>
            <div className='three_cards_swiper relative w-full mx-2'>
                <Swiper 
                    slidesPerView={1}
                    pagination={{dynamicBullets:true}}
                    modules={[Pagination]}
                >
                    <SwiperSlide><Image src={promocje_bizuteria_mobile} style={{objectFit:"contain", width:"100%"}} alt="korzysc"/></SwiperSlide>
                    <SwiperSlide><Image src={promocje_zegarki_mobile} style={{objectFit:"contain", width:"100%"}} alt="korzysc"/></SwiperSlide>
                    <SwiperSlide><Image src={adc_mobile} style={{objectFit:"contain", width:"100%"}} alt="korzysc"/></SwiperSlide>

                </Swiper>        
            </div>
        </MediaQuery>
    </>
  )
}

export default ThreeCards
