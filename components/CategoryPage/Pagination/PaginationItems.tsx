import React from 'react'
import CategoryProduct from '../CategoryProduct'
import { useSelector } from 'react-redux'
import { getLoggedUser } from '../../../redux/slices/userSlice'
import { RootState } from '../../../redux/store'

interface Props {
    current_items:Product[]
}

const PaginationItems = ({current_items}:Props) => {
    const { user_email } = useSelector((state:RootState) => getLoggedUser(state))
  return (
    <div className='paginated_items grid grid-cols-3 justify-items-center items-center gap-5'>
      {
        current_items && current_items.map(el => <CategoryProduct 
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
  )
}

export default PaginationItems
