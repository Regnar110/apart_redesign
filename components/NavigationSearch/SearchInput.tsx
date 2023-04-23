import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

interface Props {
  setInputValue:React.Dispatch<React.SetStateAction<string>>
  inputValue:string
}

const SearchInput = ({setInputValue, inputValue}:Props) => {
  return (
    <div className={`flex h-7 font-roboto border-2 border-gray-200`}>
        <AiOutlineSearch className='w-4 h-6 cursor-pointer'/>
        <input onChange={({target}) => setInputValue(target.value)}placeholder="Szukaj" value={inputValue} className='w-full border-0 outline-none bg-[#F1F1F1] md:bg-white'/>
    </div>
  )
}
export default SearchInput
