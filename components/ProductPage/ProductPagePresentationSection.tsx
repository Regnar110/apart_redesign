import React from 'react'

interface Props {
    children: JSX.Element[]
}

const ProductPagePresentationSection = ({children}:Props) => {
  return (
    <div className='product_presentation_section flex flex-col md:flex-row justify-center gap-x-10'>
        {children.map(el=>(el))}
    </div>
  )
}

export default ProductPagePresentationSection
