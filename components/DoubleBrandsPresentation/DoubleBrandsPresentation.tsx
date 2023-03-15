import React from 'react'
import Image from 'next/image'
import CustomTextButton from '../button/CustomTextButton'
import charms_desktop from '../../public/DoubleBrands/set_one/charms_desktop.jpg'
import charms_mobile from '../../public/DoubleBrands/set_one/charms_mobile.webp'


const DoubleBrandsPresentation = () => {
  return (
    <div className='double_brands_container flex flex-col lg:grid lg:grid-cols-2 gap-10'>
       <div className='brand_container flex flex-col justify-center items-center relative text-center '>
            <div className='brand_image relative w-[100vw]] h-[100%] m-auto'>
                <Image fill={true} style={{objectFit:"contain"}} src={charms_desktop} alt="brand"/>
            </div>
            <h3>Pióra Wieczne</h3>
            <p>Prezent z klasą dla każdego, kto ceni nienaganny styl i prestiż. Wybierz pióro wieczne renomowanych marek, od lat cieszących się uznaniem na rynku</p>
            <div className='brand_button_width_setter w-[70px]'>
                <CustomTextButton isArrow={true} textContent="" hrefQuery='/'/>
            </div>
       </div>
       <div className='brand_container flex flex-col justify-center items-center w-full h-[40vw] relative text-center '>
            <div className='brand_image relative w-[100%] h-[100%] m-auto'>
                <Image fill={true} style={{objectFit:"contain"}} src={charms_desktop} alt="brand"/>
            </div>
            <h3>Pióra Wieczne</h3>
            <p>Prezent z klasą dla każdego, kto ceni nienaganny styl i prestiż. Wybierz pióro wieczne renomowanych marek, od lat cieszących się uznaniem na rynku</p>
            <div className='brand_button_width_setter w-[70px]'>
                <CustomTextButton isArrow={true} textContent="" hrefQuery='/'/>
            </div>
       </div>
    </div>
  )
}

export default DoubleBrandsPresentation
