import Router from 'next/router';
import React, { useEffect, useState } from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
interface Props {
    children:JSX.Element[]
    categories: [Category, number][];
    allProductsQuantity:number;
    mobileWithDropdown:boolean; //wskazuje czy komponent ma być komponentem dla urządzeń mobilnych z użyciem Dropdownu
}

const ProductsCategoriesChoice = ({children, categories,allProductsQuantity,mobileWithDropdown}:Props) => {
  const [filtersOpen, setFiltersOpen] = useState<boolean>(false)

  useEffect(() => {
    setFiltersOpen(false)
    mobileWithDropdown === true? setFiltersOpen(false) : setFiltersOpen(true)
  },[])
  return (
    <div className={`mobile_categories_choice_conditional_wraper ${mobileWithDropdown ? "w-full":""} `}>
      {
        mobileWithDropdown ?       
        <div className='w-full flex justify-end mb-0'>
          <div onClick={() => setFiltersOpen(!filtersOpen)} className='w-fit px-4 py-1 border-[1px] my-5'>
            <span className='text-[12px]'>FILTRY</span>
            <FilterAltIcon fontSize='small'/>
          </div>
        </div>
        :
        null
      }
      <div  className={`categories_choices w-full lg:w-[250px] flex flex-col justify-start ${filtersOpen===true ? "h-full mb-5" : "h-[0px]"} lg:px-3 lg:mx-7  overflow-hidden`}>
          {mobileWithDropdown ? null: children[0]}
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
            {mobileWithDropdown ? children[0]: children[1]} {/*PRICE FILTER COMPONENt */}
            <h1 className='font-light text-[16px] border-b-[1px] border-[#ccc] h-fit w-full my-2'>SORTUJ</h1>
            {mobileWithDropdown ? children[1] : children[2]} {/*SORT PRODUCTS COMPONENT*/}
      </div>
    </div>
  )
}

export default ProductsCategoriesChoice
