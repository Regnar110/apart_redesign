import React from 'react'
interface Props {
    headerContent:string
}

const LandingHeader = ({headerContent}:Props) => {
  return (
      <h1 className='text-center font-bold text-[4vw] sm:text-[3.1vw] md:text-[2.8vw]  lg:text-[1.8vw] my-7'>{headerContent}</h1>
  )
}

export default LandingHeader
