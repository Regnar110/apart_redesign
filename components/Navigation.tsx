import React, {useState, useEffect} from 'react'
import Image from 'next/image';
import apart_logo from '../public/logo.gif'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsPerson, BsHeart, BsHandbag} from 'react-icons/bs'
import {RxHamburgerMenu} from 'react-icons/rx'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive'
import "swiper/css/scrollbar";
// Import Swiper styles
import 'swiper/css';
import { Scrollbar } from 'swiper';

const Navigation = () => {
    const [mounted, setMounted ] = useState(false)
    useEffect(() => {
        setMounted(true)
    },[])
    const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1024px)' })
    const dummy = ["Pierścionki", "Kolczyki", "Naszyjniki", "Beads", "Charms", "Zawieszki", "Bransoletki", "Zegarki"]
  return (
    <nav className="p-2 md:p-8 flex flex-col w-full justify-center items-center">
        <div className='flex flex-wrap-reverse md:flex-nowrap items-center justify-around w-full h-30'>
            <div className='flex w-full md:w-auto h-7 font-roboto border-2 border-gray-200'>
                <AiOutlineSearch className='w-4 h-6 cursor-pointer'/>
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
        </div>
        <div className='w-2/3 flex justify-around items-center border-b-2 border-gray-300 text-xl font-light'>
            {
                mounted ? (
                    isMobileOrTablet ? 
                    <Swiper
                    spaceBetween={0}
                    slidesPerView={4}
                    centeredSlides={true}
                    scrollbar={{
                        hide: true,
                      }}
                      modules={[Scrollbar]}
                      className="text-center flex justify-center items-center w-full"
                    
                    >
                         {dummy.map((el, i) => <SwiperSlide className='my-2 hover:text-[#ebc470]' key={i}>{el.toUpperCase()}</SwiperSlide>)}
                    </Swiper>
                    :
                    dummy.map((el, i) => <span className='hover:text-[#ebc470]' key={i}>{el.toUpperCase()}</span>)
                )
                :
                null
            }
        </div>
    </nav>
  )
}

export default Navigation;
