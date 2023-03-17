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
    row_1: [
        {
            desktop:StaticImageData;
            mobile:StaticImageData;
            header?:string;
            button?:boolean;
            buttonText?:string;
            buttonWidth?:string;
        },
        {
            desktop:StaticImageData;
            mobile:StaticImageData;
            header?:string;
            button?:boolean;
            buttonText?:string;
            buttonWidth?:string;
        }        
    ],
    row_2_bigger: {
        desktop:StaticImageData;
        mobile:StaticImageData;
        header?:string;
        button?:boolean;
        buttonText?:string;
        buttonWidth?:string;
    }

}

const ThreeCardsInOne = ({row_1, row_2_bigger}:Props) => {
  const mobileArray = [row_1[0], row_1[1], row_2_bigger]
  return (
    <>
    <MediaQuery minWidth={768}>
      <div className='three_cards_container flex justify-center items-center flex-col gap-3 w-[90%]'>
        <div className='row-1 flex gap-3'>
          {
            row_1.map((el,i) => {
              return (
                <div key={i} className='card_row1 flex flex-col justify-end items-center'>
                  <Image src={el.desktop} style={{objectFit:"contain"}} alt="card_one_from_three"/>
                  <div className='card_btn_and_description absolute flex flex-col justify-center items-center gap-y-2'>
                      <h3 className='font-playfair md:text-[27px] xl:text-[30px]'>{el.header}</h3>
                      {
                        el.button && el.buttonText && el.buttonWidth ? 
                        (
                        <div className={`button_width_setter ${el.buttonWidth}`}>
                            <CustomTextButton hrefQuery='/' textContent={el.buttonText} isArrow={true}/>                    
                        </div>
                        )
                        :
                        null
                      }

                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='row-2_bigger'>
          <div  className='card_row1 relative flex flex-col justify-center items-center'>
                  <Image src={row_2_bigger.desktop} style={{objectFit:"contain"}} alt="card_one_from_three"/>
                  <div className='card_btn_and_description absolute right-10 flex flex-col justify-center items-center gap-y-2 w-[50%] text-center'>
                      <h3 className='font-playfair md:text-[27px] xl:text-[30px]'>{row_2_bigger.header}</h3>
                      {
                        row_2_bigger.button && row_2_bigger.buttonText && row_2_bigger.buttonWidth ? 
                        (
                        <div className={`button_width_setter ${row_2_bigger.buttonWidth}`}>
                            <CustomTextButton hrefQuery='/' textContent={row_2_bigger.buttonText} isArrow={true}/>                    
                        </div>
                        )
                        :
                        null
                      }

                  </div>
                </div>
          </div>
      </div>
    </MediaQuery>
    <MediaQuery maxWidth={767}>
      <div className='three_cards_swiper relative w-full mx-2'>
          <Swiper 
              slidesPerView={1}
              pagination={{dynamicBullets:true}}
              modules={[Pagination]}
              className={" w-[98%] "}
          >
              {
                  mobileArray.map((el,i) => {
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

export default ThreeCardsInOne
