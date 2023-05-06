import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

interface Props {
  setInputValue:React.Dispatch<React.SetStateAction<string>>
  inputValue:string
}

const SearchInput = ({setInputValue, inputValue}:Props) => {
  return (
    <div className={`flex h-7 font-roboto border-[1px] border-b-[2px] border-gray-200 rounded-sm border-b-orange-500`}>
        <AiOutlineSearch className='w-4 h-6 cursor-pointer'/>
        <input onChange={({target}) => setInputValue(target.value)}placeholder="Szukaj produktów" value={inputValue} className='w-full border-0 outline-none bg-[#F1F1F1] md:bg-white'/>
    </div>
  )
}
export default SearchInput
