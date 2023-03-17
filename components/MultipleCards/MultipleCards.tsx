import React from 'react'
import Image, { StaticImageData } from 'next/image'
import CustomTextButton from '../button/CustomTextButton'
import MediaQuery from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";


interface Props {
    images:{
        desktop:StaticImageData;
        mobile:StaticImageData;
        button?:boolean
        buttonText?:string
    }[]
}

const MultipleCards = ({images}:Props) => {
  return (
    <>
        <MediaQuery minWidth={768}>
        <div className='multiple_cards_container w-[90%] flex justify-center gap-3 my-1'>
            {
                images.map((el,i) => {
                    return (
                        <div key={i} className='card relative m-0'>
                            <Image className='m-0' src={el.desktop} style={{objectFit:"contain"}} alt="card"/>
                            {
                                el.button && el.buttonText ? <CustomTextButton textContent={el.buttonText!} hrefQuery='/' isArrow={true}/> : null
                            } 
                        </div>                        
                    )
                })
            }
        </div>
        </MediaQuery>
        <MediaQuery maxWidth={767}>
            <div className='multiple_cards_container relative w-full mx-2'>
                <Swiper 
                    slidesPerView={1}
                    pagination={{dynamicBullets:true}}
                    modules={[Pagination]}
                >
                    {
                        images.map((el,i) => {
                            return <SwiperSlide key={i}>
                                <Image src={el.mobile} style={{objectFit:"contain", width:"100%"}} alt="card"/>
                                </SwiperSlide>
                        })
                    }               
                </Swiper>        
            </div>
        </MediaQuery>
    </>
  )
}

export default MultipleCards
