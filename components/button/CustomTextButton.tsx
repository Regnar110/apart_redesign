import React from 'react'
interface TextButtonProps {
    textContent:string
}

const CustomTextButton = ({textContent}:TextButtonProps) => {
  return (
    <button className='absolute top-[75%] left-[20%] bg-black'>
        {textContent}
    </button>
  )
}

export default CustomTextButton

//#F39DAA