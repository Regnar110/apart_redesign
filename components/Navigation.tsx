import React from 'react'
import Image from 'next/image';
import apart_logo from '../public/logo.gif'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsPerson, BsHeart, BsHandbag} from 'react-icons/bs'
import {RxHamburgerMenu} from 'react-icons/rx'
const Navigation = () => {
  return (
    <nav className='p-5 flex items-center justify-around w-fill h-20'>
        <div className='hidden relative md:inline-flex h-7 font-roboto border-2 border-gray-300'>
            <AiOutlineSearch className='w-4 h-6 cursor-pointer divide-x divide-black '/>
            <input placeholder='Szukaj' className='border-0 outline-none'></input>
        </div>
        <div className='block md:hidden'>
            <RxHamburgerMenu className='w-6 h-5'/>
        </div>
        <Image  src={apart_logo} alt='apart-logo' style={{objectFit:"contain"}} className="w-24 md:w-40"/>
        <div className='flex gap-x-5'>  
            <BsPerson className='w-6 h-6'/>
            <BsHeart className='w-6 h-6'/>
            <BsHandbag className='w-6 h-6'/>
        </div>
    </nav>
  )
}

export default Navigation;