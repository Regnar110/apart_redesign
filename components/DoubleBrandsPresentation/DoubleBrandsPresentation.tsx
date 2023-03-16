import React from 'react'
import Image, { StaticImageData } from 'next/image'
import CustomTextButton from '../button/CustomTextButton'
import MediaQuery from 'react-responsive'

interface Props {
  button:boolean;
  buttonText?:string;
  images:[
    {
      desktop: StaticImageData;
      mobile: StaticImageData;
      logo?: StaticImageData
      description?: {
        header?:string;
        text?:string
      }    
    },
    {
      desktop: StaticImageData;
      mobile: StaticImageData;
      logo?: StaticImageData
      description?: {
        header?:string;
        text?:string
      }    
    }
  ]
}


const DoubleBrandsPresentation = ({button, buttonText, images}:Props) => {
  return (
    <div className='double_brands_container md:flex md:justify-center md:items-center gap-10 lg:w-[100%] xl:w-[70%] p-0 md:p-5'>
      <>
      {
        images.map((el,i) => {
          return (
            <div key={i} className='brand_card flex flex-col w-[100%] md:w-[50%] justify-center items-center md:m-5'>
              <div className='card_image_container relative flex justify-center items-center h-[100%]'>
                <MediaQuery maxWidth={767}>
                  <Image src={el.mobile} style={{objectFit:"contain"}} alt="card_brand"/>
                </MediaQuery>
                <MediaQuery minWidth={768}>
                  <Image src={el.desktop} style={{objectFit:"contain"}} alt="card_brand"/>
                </MediaQuery>
              </div>
              {
                el.logo? 
                (
                  <div className='relative my-6 w-[50%] flex justify-center items-center'>
                    <Image src={el.logo} style={{objectFit:"contain"}} alt="card_brand"/>
                  </div>
                )
                :
                (
                  <div className='brand_card_description flex flex-col text-center'>
                    <h3 className='font-playfair text-[25px] sm:text-[30px] md:text-[35px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px]'>{el.description?.header}</h3>
                    <p className='font-roboto text-[13px] sm:text-[14px] md:text-[14px] lg:text-[15px] xl:text-[17px] 2xl:text-[18px] px-2'>{el.description?.text}</p>
                  </div>
                )
              }
              {
                button ? 
                (
                  <div className='w-[70px] my-2'>
                    <CustomTextButton textContent={buttonText? buttonText:""} isArrow={true} hrefQuery={'/'}/>
                  </div>
                )
                :
                null
              }
            </div>
          )
        })
      }
      </>
    </div>
  )
}

export default DoubleBrandsPresentation
