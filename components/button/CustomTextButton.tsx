
import Link from 'next/link';
import Router from 'next/router';
import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
interface TextButtonProps {
    textContent:string;
    hrefQuery:string;
    isAbsolute?: boolean;
    buttonWidth?:string;
    position?: string;
    isArrow?: boolean;
}

const CustomTextButton = ({textContent, isAbsolute, position, isArrow, hrefQuery, buttonWidth}:TextButtonProps) => {
  return isArrow ?
      <div onClick={() => Router.push(hrefQuery)} className={`font-roboto ${isAbsolute ? "absolute":"inline-block"} ${position ? position : null} flex items-center justify-center flex-nowrap gap-x-2 border-[1px] border-black text-[11px] xl:text-[13px] 2xl:text-[16px] font-light bg-white px-4 py-2 text-black cursor-pointer hover:bg-black hover:text-white transition-all rounded-md `}>
        {
          textContent?
          <Link href={hrefQuery}>{textContent}</Link>
          :null
        }
        <AiOutlineArrowRight className='w-4 h-4'/>
      </div>   
      :
      <div className={`font-roboto ${isAbsolute ? "absolute":`${buttonWidth}`} ${position ? position : "relative"} inline-flex items-center justify-center gap-x-2 text-black text-[11px] xl:text-[14px] 2xl:text-[14px] font-light bg-white px-4 py-3 cursor-pointer hover:bg-[#F39DAA] transition-all rounded-md`}>
        <Link href={hrefQuery}>{textContent}</Link>
        <AiOutlineArrowRight className='w-4 h-4'/>
      </div>      
}

export default CustomTextButton

//#F39DAA