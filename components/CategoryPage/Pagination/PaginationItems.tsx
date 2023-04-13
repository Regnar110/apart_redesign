import React from 'react'
import CategoryProduct from '../CategoryProduct'
import { useSelector } from 'react-redux'
import { getLoggedUser } from '../../../redux/slices/userSlice'
import { RootState } from '../../../redux/store'

interface Props {
    current_items:Product[];
    title:string;
}

const PaginationItems = ({current_items, title}:Props) => {
    const { user_email } = useSelector((state:RootState) => getLoggedUser(state))
  return (
    <div className='items_container flex flex-col w-fit'>
      <h1 className='text-[28px] font-light'>{title.toUpperCase()}</h1>
      <div className='category_items grid grid-cols-3 justify-items-center items-center gap-10'>
        {
          current_items && current_items.map(el => <CategoryProduct 
              key={el._id}
              user_email={user_email as string} 
              product_id={el._id} 
              product_category_ref={el.category._ref}
              product_name={el.title}
              price={el.cena}
              image={el.image}
              />
          )
        }        
      </div>
    </div>
  )
}

export default PaginationItems
