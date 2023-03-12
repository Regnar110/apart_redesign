import { StaticImageData } from 'next/image'
import React from 'react'
import Image from 'next/image'
import CustomTextButton from '../button/CustomTextButton'
import MediaQuery from 'react-responsive'
interface ProductPresentation {
    products: [StaticImageData, StaticImageData, string, string][]
    // drugi static image to wersja mobilna pierwszego
}

const ProductPresentation = ({products}:ProductPresentation) => {
  return products ?
    <div className='block w-full'>
        <h1 className='text-center text-[16px] lg:text-[22px] font-bold my-3'>PREZENT IDEALNY</h1>
        <div className=' flex flex-wrap justify-center w-full '>
        {
            products.map((el,i) => { //1024px
                return (
                    <div key={i} className='flex flex-col justify-center items-center lg:w-1/3 w-full break-words'>
                        <MediaQuery maxWidth={1024}>
                            <Image width={450} height={450} src={el[1]} style={{objectFit:"contain", width:"100%"}} key={i} alt={"product_presentation_image"}/>
                        </MediaQuery>
                        <MediaQuery minWidth={1024}>
                            <Image width={450} height={450} src={el[0]} width={630} height={630} style={{objectFit:"contain"}} key={i} alt={"product_presentation_image"}/>
                        </MediaQuery>
                        <h1 className='font-playfair text-center text-[28px] lg:text-[30px] my-5'>{el[2]}</h1>
                        <p className='md:w-2/3 lg:w-2/3 text-center text-[14px] mb-4'>{el[3]}</p>
                        <CustomTextButton textContent='' isArrow={true} hrefQuery='/'/>                        
                    </div>

                )
            })
        }
        </div>
    </div>
  : null
}

export default ProductPresentation
