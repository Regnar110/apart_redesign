import Router from 'next/router';
import React from 'react'
interface Props {
    children:JSX.Element[]
    categories: [Category, number][];
    allProductsQuantity:number
}

const ProductsCategoriesChoice = ({children, categories,allProductsQuantity}:Props) => {
    console.log(children)
  return (
    <div  className='categories_choices  w-[250px] flex flex-col justify-start h-full px-3 mx-7'>
        {children[0]}{/* AppliedFilters Component*/}
        <h1 className='font-light text-[16px] border-b-[1px] border-[#ccc] h-fit w-full my-2'>Produkty</h1>
          <div className='choice flex items-center gap-2 h-fit' onClick={() => Router.push(`/category/all`)}>
            <span className='cursor-pointer text-[15px] text-[#222222be] hover:text-[#d4a82f] transition-all py-1'>Wszystko</span>
            <span className='category_products_quantity text-[10px] text-[#777777]'>({allProductsQuantity})</span>
          </div>
          {
            categories.map(([category, quantity]) => (
              <div key={category._id} className='choice flex items-center gap-2 h-fit' onClick={() => Router.push(`/category/${category!._id}`)}>
                <span className='cursor-pointer text-[15px] text-[#222222be] hover:text-[#d4a82f] transition-all py-1'>{category!.title}</span>
                <span className='category_products_quantity text-[10px] text-[#777777]'>({quantity as number})</span>
              </div>
            ))
          }
          <h1 className='font-light text-[16px] border-b-[1px] border-[#ccc] h-fit w-full my-2'>CENA</h1>
          {children[1]} {/*PRICE FILTER COMPONENt */}
          <h1 className='font-light text-[16px] border-b-[1px] border-[#ccc] h-fit w-full my-2'>SORTUJ</h1>
          {children[2]} {/*SORT PRODUCTS COMPONENT*/}
    </div>
  )
}

export default ProductsCategoriesChoice
