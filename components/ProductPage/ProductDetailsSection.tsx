import React from 'react'

interface Props {
    singleProduct: Product;
    details: [string, any][] | null
}

const ProductDetailsSection = ({singleProduct, details}:Props) => {
  return (
    <div className='product_details_section flex flex-col lg:flex-row justify-center gap-x-5'>
        <div className='details w-full md:w-[90%] lg:w-[500px] xl:w-[600px] flex flex-col gap-y-5 pt-10'>
            <div className='box_title text-[17px] border-b-[1px] border-black'>
                <h4>Cechy produktu</h4>
            </div>
            <div className='product_properties flex flex-col'>
                {
                    details!.map(el => {
                        return (
                            <div key={el[0]} className='property text-[14px] flex gap-x-4'>
                                <span className='font-semibold'>{el[0]}:</span>
                                <span className='font-light'>{el[1]}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className='description w-full md:w-[90%] lg:w-[500px] xl:w-[600px] flex flex-col gap-y-5 justify-start pt-10'>
            <div className='box_title text-[17px] border-b-[1px] border-black'>
                <h4>Opis produktu</h4>
            </div>
            <span className='text-[14px] font-light'>
                {singleProduct?.Opis[0].children[0].text}
            </span>
        </div>
    </div>
  )
}

export default ProductDetailsSection
