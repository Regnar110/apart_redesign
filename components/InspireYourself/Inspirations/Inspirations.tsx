import React from 'react'
import Image, { StaticImageData } from 'next/image'
import MediaQuery from 'react-responsive'
import instagram_desktop from '../../../public/inspire/instagram_desktopo.jpg'
import CustomTextButton from '../../button/CustomTextButton'

interface Props {
    images:{desktop:StaticImageData, mobile:StaticImageData, titleLine_1:string, titleLine_2:string}[]
}

const Inspirations = ({images}:Props) => {
  return (
    <div className='inspirations grid grid-cols-2 md:flex  justify-center gap-4 mx-3 md:mx-4'>
        {
            images.map((el,i) => {
                return (
                    <div key={i} className='insp cursor-pointer flex flex-col items-center gap-y-4 md:w-auto'>
                        <MediaQuery minWidth={768}>
                            <Image src={el.desktop} style={{objectFit:"contain"}} alt="insipration_card"/>
                        </MediaQuery>
                        <MediaQuery maxWidth={767}>
                            <Image src={el.mobile} style={{objectFit:"contain"}} alt="insipration_card"/>
                        </MediaQuery>
                        <p className='text-center font-roboto font-light text-[14px]'>{el.titleLine_1}<br/>{el.titleLine_2}</p>
                        <div className='button_width_setter w-[70px]'>
                            <CustomTextButton isArrow={true} hrefQuery="/" textContent='' />            
                        </div>
                    </div>                    
                )
            })
        }
    </div>
  )
}

export default Inspirations
