import React, { useEffect, useState } from 'react'
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
    const [ inputValue, setInputValue ] = useState<string>("")
    const [searchedProducts, setSearchedProducts] = useState<Product[]>([])
    useEffect(() => {
      const filteredBySearch = inputValue.length? products.filter(({title}) => title.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())):[]
      setSearchedProducts(filteredBySearch)
    },[inputValue])
  return (
    <div className={`relative flex flex-col ${isMobileOrTablet? "w-full" : "md:w-auto"}`}>
        <SearchInput inputValue={inputValue} setInputValue={setInputValue}/>
        <SearchProductDropdown products={searchedProducts}setInputValue={setInputValue} setProducts={setSearchedProducts}/>    
    </div>
  )
}

export default NavigationSearch
