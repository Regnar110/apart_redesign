import Image, { StaticImageData } from 'next/image'
import React from 'react'
import MediaQuery from 'react-responsive'

import sg_desktop from '../../../public/inspire/News/sg_2_desktop.jpg'
import sg_mobile from '../../../public/inspire/News/sg_2_mobile.webp'

interface Props {
    images: {
        desktop:StaticImageData;
        mobile:StaticImageData;
        imageTopTitle:string;
        imageBottomTitle:string;
        description:string
    }[]
}
const News = ({images}:Props) => {
  return (
    <div className='news_container flex flex-col md:flex-row gap-4 m-4'>
        {
            images.map((el,i) => {
                return (
                    <div key={i} className='news cursor-pointer'>
                        <div className='news_image relative'>
                            <MediaQuery minWidth={768}><Image src={el.desktop} style={{objectFit:"contain"}} alt="news_card"/></MediaQuery>
                            <MediaQuery maxWidth={767}><Image src={el.mobile} style={{objectFit:"contain"}} alt="news_card"/></MediaQuery>
                            <div className='grandient_image_cover bg-gradient-to-b from-transparent via-transparent to-black w-full h-full absolute top-0'></div>
                            <div className='image_titles absolute bottom-0 text-white font-roboto m-3'>
                                <p className='text-[25px] md:text-[19px] lg:text-[20px] xl:text-[21px] font-bold md:font-light my-3'>{el.imageTopTitle}</p>
                                <p className='text-[14px] md:text-[8px] lg:text-[9px] xl:text-[11px]'>{el.imageBottomTitle}</p>
                            </div>
                        </div>
                        <div className='news_description xl:w-[420px] text-[12px] lg:text-[14px]'>
                            {el.description}
                            <span className='text-[#ae535a]'>     czytaj więcej</span>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default News
