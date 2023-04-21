import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { categorizedProducts } from '../../redux/slices/productsSlice'
import SearchInput from './SearchInput';
import SearchProductDropdown from './SearchProductDropdown';

interface Props {
    isMobileOrTablet:boolean
}

const NavigationSearch = ({isMobileOrTablet}:Props) => {
    const [,products] = useSelector((state:RootState) => categorizedProducts(state, "all"))
    console.log(products)
  return (
    <div className={`relative flex flex-col ${isMobileOrTablet? "w-full" : "md:w-auto"}`}>
        <SearchInput/>
        <SearchProductDropdown products={products}/>    
    </div>
  )
}

export default NavigationSearch
