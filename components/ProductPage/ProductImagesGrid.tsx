import React from 'react'
import MediaQuery from 'react-responsive'
import { urlFor } from '../../sanity';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from "swiper";

interface Props {
    singleProduct:Product
}

const ProductImagesGrid = ({singleProduct}:Props) => {
  return (
    <div className='product_images_grid relative w-full md:w-auto md:grid md:grid-cols-2 justify-items-center'>
        <MediaQuery minWidth={1280}>
            <Image blurDataURL={singleProduct.image[0].asset.url} priority className='col-span-2' width={800} height={630} style={{objectFit:"contain", width:"auto"}} src={urlFor(singleProduct?.image[0]).url()} alt={'product_image'} />   
            <Image priority className='col-span-1' width={300} height={200} style={{objectFit:"contain", width:"auto"}} src={urlFor(singleProduct?.image[0]).url()} alt={'product_image'} />
            <Image priority className='col-span-1' width={300} height={200} style={{objectFit:"contain", width:"auto"}} src={urlFor(singleProduct?.image[0]).url()} alt={'product_image'} /> 
        </MediaQuery>
        <MediaQuery minWidth={768} maxWidth={1279}>
            <Image priority className='col-span-2' width={415} height={335} style={{objectFit:"contain", width:"auto"}} src={urlFor(singleProduct?.image[0]).url()} alt={'product_image'} />   
            <Image priority className='col-span-1' width={197} height={260} style={{objectFit:"contain", width:"auto"}} src={urlFor(singleProduct?.image[0]).url()} alt={'product_image'} />
            <Image priority className='col-span-1' width={197} height={260} style={{objectFit:"contain", width:"auto"}} src={urlFor(singleProduct?.image[0]).url()} alt={'product_image'} /> 
        </MediaQuery>
        <MediaQuery maxWidth={767}>
        <Swiper
            slidesPerView={1}
            scrollbar={{
                hide: true,
                }}
            modules={[Scrollbar]}
            className='w-full'
        >
            <SwiperSlide ><div className='w-[100%] flex justify-center items-center'><Image priority width={380} height={300} style={{objectFit:"contain", width:"auto"}} src={urlFor(singleProduct?.image[0]).url()} alt={'product_image'} /></div></SwiperSlide>
            <SwiperSlide><div className='w-[100%] flex justify-center items-center'><Image priority width={380} height={300} style={{objectFit:"contain", width:"auto"}} src={urlFor(singleProduct?.image[0]).url()} alt={'product_image'} /></div></SwiperSlide>
            <SwiperSlide><div className='w-[100%] flex justify-center items-center'><Image priority width={380} height={300} style={{objectFit:"contain", width:"auto"}} src={urlFor(singleProduct?.image[0]).url()} alt={'product_image'} /></div></SwiperSlide>
        </Swiper>
        </MediaQuery>
    </div>
  )
}

export default ProductImagesGrid
