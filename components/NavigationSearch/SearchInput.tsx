import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

const SearchInput = () => {
  return (
    <div className={`flex h-7 font-roboto border-2 border-gray-200`}>
        <AiOutlineSearch className='w-4 h-6 cursor-pointer'/>
        <input placeholder="Szukaj" className='w-full border-0 outline-none bg-[#F1F1F1] md:bg-white'/>
    </div>
  )
}

export default SearchInput
