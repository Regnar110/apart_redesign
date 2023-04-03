import React from 'react'
import apart_logo from '../../public/logo.gif'
import Image from 'next/image'
import LinearProgress from '@mui/material/LinearProgress';
const Loader = () => {
  return (
    <div className='w-full h-[100vh] fixed bg-white z-50 text-white flex flex-col justify-center items-center'>
        <div className='relative w-full flex justify-center items-center'>
            <Image width={200} height={200} src={apart_logo}  alt={'s'}/>
        </div>
        <div className='relative w-[200px] h-[30px] text-[#df4848]'>
            <LinearProgress color='inherit' />
        </div>
        <span className='text-black font-roboto text-[14px] text-center w-full'>Ładowanie strony...</span>
    </div>
  )
}
export default Loader
