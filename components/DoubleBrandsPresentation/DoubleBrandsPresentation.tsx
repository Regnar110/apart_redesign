import React from 'react'
import Image from 'next/image'
import CustomTextButton from '../button/CustomTextButton'
import charms_desktop from '../../public/DoubleBrands/set_one/charms_desktop.jpg'
import charms_mobile from '../../public/DoubleBrands/set_one/charms_mobile.webp'
import MediaQuery from 'react-responsive'


const DoubleBrandsPresentation = () => {
  return (
    <div className='double_brands_container md:flex md:justify-center md:items-center  gap-10 lg:w-[100%] xl:w-[70%] p-0 md:p-5'>
      <div className='brand_card flex flex-col w-[100%] md:w-[50%] justify-center items-center'>
        <div className='card_image_container relative flex justify-center items-center h-[100%]'>
          <MediaQuery maxWidth={767}>
            <Image src={charms_mobile} style={{objectFit:"contain"}} alt="card_brand"/>
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <Image src={charms_desktop} style={{objectFit:"contain"}} alt="card_brand"/>
          </MediaQuery>
        </div>
        <div className='brand_card_description flex flex-col text-center'>
          <h3 className='font-playfair text-[25px] sm:text-[30px] md:text-[35px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px]'>Pióra wieczne</h3>
          <p className='font-roboto text-[13px] sm:text-[14px] md:text-[14px] lg:text-[15px] xl:text-[17px] 2xl:text-[18px]'>Prezent z klasą dla każdego, kto ceni nienaganny styl i prestiż. Wybierz pióro wieczne renomowanych marek, od lat cieszących się uznaniem na rynku</p>
        </div>
        <div className='w-[70px]'>
          <CustomTextButton textContent='' isArrow={true} hrefQuery={'/'}/>
        </div>
      </div>
      <div className='brand_card w-[100%] md:w-[50%] flex flex-col justify-center items-center'>
        <div className='card_image_container flex justify-center items-center relative h-[100%]'>
          <MediaQuery maxWidth={767}>
            <Image src={charms_mobile} style={{objectFit:"contain"}} alt="card_brand"/>
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <Image src={charms_desktop} style={{objectFit:"contain"}} alt="card_brand"/>
          </MediaQuery>
        </div>
        <div className='brand_card_description flex flex-col text-center'>
          <h3 className='font-playfair text-[25px] sm:text-[30px] md:text-[35px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px]'>Pióra wieczne</h3>
          <p className='font-roboto text-[13px] sm:text-[14px] md:text-[14px] lg:text-[15px] xl:text-[17px] 2xl:text-[18px]'>Prezent z klasą dla każdego, kto ceni nienaganny styl i prestiż. Wybierz pióro wieczne renomowanych marek, od lat cieszących się uznaniem na rynku</p>
        </div>
        <div className='w-[70px]'>
          <CustomTextButton textContent='' isArrow={true} hrefQuery={'/'}/>
        </div>
      </div>
    </div>
  )
}

export default DoubleBrandsPresentation
