import Image from 'next/image'
import React from 'react'
import MediaQuery from 'react-responsive/'

import mennica_desktop from '../../public/landing_images/mennica_desktop.jpg'
import mennica_mobile from '../../public/landing_images/mennica_mobile.webp'
import CustomTextButton from '../button/CustomTextButton'

const SmallLandingImageWithButton = () => {
  return (
    <div className='small_landing_image_container flex justify-center items-center relative h-[100%] px-2'>
        <div className='small_image_container w-[100%] md:w-[90%] relative flex justify-center items-center'>
            <MediaQuery minWidth={768}>
                <Image src={mennica_desktop} style={{objectFit:"contain"}} alt={"small_landing_img"}/>        
            </MediaQuery>
            <MediaQuery maxWidth={767}>
                <Image src={mennica_mobile} style={{objectFit:"contain"}} alt={"small_landing_img"}/>        
            </MediaQuery>
            <CustomTextButton isAbsolute={true} position={"right-10 md:right-0 bottom-3"} isArrow={true} textContent="ZOBACZ WIĘCEJ" hrefQuery='/'/>
        </div>

    </div>
  )
}

export default SmallLandingImageWithButton
