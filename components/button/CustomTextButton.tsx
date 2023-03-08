
import Link from 'next/link';
import Router from 'next/router';
import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
interface TextButtonProps {
    textContent:string;
    hrefQuery:string;
    isAbsolute?: boolean;
    position?: string;
    isArrow?: boolean;
}

const CustomTextButton = ({textContent, isAbsolute, position, isArrow, hrefQuery}:TextButtonProps) => {
  return isArrow ?
      <div onClick={() => Router.push(hrefQuery)} className={`font-roboto ${isAbsolute ? "absolute":""} ${position ? position : null} w-[70px] flex items-center justify-center gap-x-2 border-[1px] border-black text-[13px] font-light bg-white p-2 text-black cursor-pointer hover:bg-black hover:text-white transition-all`}>
        <AiOutlineArrowRight className='w-4 h-4'/>
      </div>   
      :
      <div className={`font-roboto ${isAbsolute ? "absolute":"relative"} ${position ? position : null} inline-flex items-center justify-center gap-x-2 text-black text-[13px] font-light bg-white p-2 cursor-pointer hover:bg-[#F39DAA] transition-all`}>
        <Link href={hrefQuery}>{textContent}</Link>
        <AiOutlineArrowRight className='w-4 h-4'/>
      </div>      
}

export default CustomTextButton

//#F39DAA