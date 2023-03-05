import React, {useState, useEffect} from 'react'
import Image from 'next/image';
import apart_logo from '../public/logo.gif'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsPerson, BsHeart, BsHandbag} from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive'
import "swiper/css/scrollbar";
// Import Swiper styles
import 'swiper/css';
import { Scrollbar } from 'swiper';
import DesktopNavDropdown from './DesktopNavDropdown';
import MobileMenuPanel from './MobileMenuPanel';

import { urlFor } from '../sanity';
import ReactDOM from 'react-dom';
import Router from 'next/router';

interface NavigationProps {
    categories: Category[]
}

const Navigation = ({categories }:NavigationProps) => {
    const [mounted, setMounted ] = useState(false)
    const [ mobileMenuPanelStatus, setMobileMenuPanelStatus ] = useState(false)
    const [ dropdown, setDropdown ]= useState("")
    const [ dropdownActive, setDropdownActive ] = useState(true)
    const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1024px)' })
    useEffect(() => {
        setMounted(true)
    },[])
    
    
    const showDropdown = (drodpownType:string) => {
        Promise.resolve().then(() => { 
            ReactDOM.unstable_batchedUpdates(() => {
                setDropdown(drodpownType)
                setDropdownActive(true)
            })
        })

        //powyżej tworzymy obietnice, która rozwiązuje się po wykonaniu asynchronicznego kodu zmiany stanu w jej ciele.
        //W środku używamy metody ReactDOM.unstable_batchedUpdates, która grupuje asynchroniczne wywołania funkcji zmiany stanów i rozwiązuje je wszystkie na raz.
        // Chodzi o to że dzięki temu react jest zmuszany do tego żeby nie re-renderować komponentu przy każdej pojedyńczej zmianie stanu tylko dopiero przy
        // rozwiązaniu się obietnicy w której zmieniamy grupę stanów.
    }
    const dropdownActivityHandler = (dropdownStatus:boolean) => {
        Promise.resolve().then(() => {
            ReactDOM.unstable_batchedUpdates(() => {
                setDropdownActive(dropdownStatus)
                setDropdown("")                
            })
        })
    }

    const showOrHideMobileMenu = (status:boolean) => {
        setMobileMenuPanelStatus(status)
    } 

    useEffect(() => console.log("mount nav"),[])

  return mounted? ( // mounted jest po to żeby react-responsive działał bez wywalania błędu Warning: Prop `className` did not match. co oznacza że classname na serverze i po stronie klienta się różnią co psuje layout
    <nav className="fixed py-2 md:py-8 flex flex-col w-full justify-center items-center">
        <div className={`flex ${isMobileOrTablet? "flex-wrap-reverse justify-between px-3": "flex-nowrap justify-around"} items-center w-full h-30`}>
            <div className={`flex ${isMobileOrTablet? "w-full" : "md:w-auto"} h-7 font-roboto border-2 border-gray-200 mx-5`}>
                <AiOutlineSearch className='w-4 h-6 cursor-pointer'/>
                <input placeholder="Szukaj" className='w-full border-0 outline-none bg-[#F1F1F1] md:bg-white'></input>
            </div>
            <div className={`flex items-center justify-center gap-x-6 ${isMobileOrTablet? "py-4 gap-x-2": "hidden"}`}>
                <MobileMenuPanel activityHandler={showOrHideMobileMenu} menuStatus={mobileMenuPanelStatus}/>
                <Image priority src={apart_logo} alt='apart-logo' style={{objectFit:"contain"}} className="w-28 md:w-36"/>
            </div>
            <Image priority src={apart_logo} alt='apart-logo' style={{objectFit:"contain"}} className={`w-24 ${isMobileOrTablet? "hidden":"visible"} md:w-40`}/>
            <div className='flex gap-x-5'>  
                <BsPerson className='w-6 h-6'/>
                <BsHeart className='w-6 h-6'/>
                <BsHandbag className='w-6 h-6'/>
            </div>            
        </div>
        <div className='w-full flex justify-center items-center gap-x-10 border-b-2 border-gray-300 font-light'>
            {
                isMobileOrTablet ? 
                <Swiper spaceBetween={0} slidesPerView={4} centerInsufficientSlides={true}
                scrollbar={{
                    hide: true,
                    }}
                    modules={[Scrollbar]}
                    className="text-center flex justify-center items-center w-full"
                >

                        {
                        categories.map((category, i) => {
                            return (
                            <SwiperSlide className='my-2' key={i}>
                                <div key={category._id} onClick={() => Router.push({pathname:`/category/${category._id}`})} className="relative flex flex-col items-center justify-center">
                                    <div  className='relative w-11 h-11 md:w-14 md:h-14'>
                                        <Image sizes='(min-width: 1024px) 44px' className=' relative' src={urlFor(category.image[0]).url()} fill style={{objectFit:"contain"}} alt={`${category.title}-image`}/>
                                    </div>
                                    <div className='relative'>
                                        <span className='h=10 text-xs md:text-md hover:text-[#ebc470] cursor-pointer' id={category.title} key={i}>{category.title.toUpperCase()}</span>                                    
                                    </div>
                                    
                                </div>
                            </SwiperSlide>
                            )
                        })
                        }
                </Swiper>
                :
                categories.map((category, i) => {
                    return (
                        <div key={i} onClick={() => Router.push({pathname:`/category/${category._id}`})} className="relative flex flex-col items-center justify-center">
                            <div  className='relative w-14 h-14'>
                                <Image sizes='(max-width: 1024px) 56px' className=' relative' src={urlFor(category.image[0]).url()} fill style={{objectFit:"contain"}} alt={`${category.title}-image`}/>
                            </div>
                            <div className='relative'>
                                <span className='h-10 text-md hover:text-[#ebc470] cursor-pointer' id={category.title} key={i} onMouseEnter={() => showDropdown(category.title)}>{category.title.toUpperCase()}</span>                                    
                            </div>
                            
                        </div>
                        
                    )
                })
            }
        </div>
        {
            dropdown.length > 0 && dropdownActive && !isMobileOrTablet ?
            // jeżeli dropdown został wybrany(stan zmieniony na typ dropdownu && dropdown jest aktywny(zapobiega zamykaniu się go po wyjściu kursora z pola kategori<span>Kategoria</span>) 
            // && jeżeli urządzenie nie jest urzadzeniem mobilnym(zapobiega otwarciu się elementu na telefonach)
                (
                    <DesktopNavDropdown title={dropdown} activityHandler={dropdownActivityHandler}/>
                ) 
                
                : null
        }
    </nav>
  ): null;
}

export default Navigation;
