import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
interface Props {
    title:string;
    activityHandler: (dropdownStatus:boolean) => void
}

const DesktopNavDropdown = ({title, activityHandler }:Props) => {
    const {products} = useSelector((state:RootState) => state)
    return (
        <div onMouseLeave={() => activityHandler(false)} className='relative w-full bg-white flex justify-center items-center flex-col gap-y-7 py-10 overflow-visible'>
            <span onClick={() => activityHandler(false)} className='absolute top-5 right-5 w-8 h-8 p-1 bg-[#F4C1C5] text-black text-center cursor-pointer'>X</span>
            <h1 className='text-2xl'>{title.toUpperCase()}</h1>
            <div className='xl:w-11/12 w-full flex xl:justify-start justify-center items-start flex-row xl:gap-x-0  gap-x-4 gap-y-7'>
                {
                    Object.entries(products).map(el => {
                        return(
                            <div className='flex flex-col mr-10' key={el[0]}>
                                 <h2 className='text-md text-black font-bold'>{el[0].toUpperCase()}</h2>
                                 {
                                    el[1].map((el,i) => {
                                        return i<6? (
                                            <Link className='py-1 hover text-[12px] cursor-pointer hover:text-[#d6ac52]' key={el._id} href={`/product/${el.category._ref}/${el._id}`}>{el.title}</Link>
                                        ):
                                        null
                                    })
                                 }
                                 <Link className='w-full text-center text-[14px] text-red-500 border-2' href={`/category/${el[1][0].category._ref}`}>More</Link>
                            </div>
                        )
                    })
                }
            </div>
            <div className='w-full h-14 flex items-center justify-center bg-[#CCCCCC]'> 
                <div className='w-2/3 flex gap-x-10 text-sm'>
                    <span className='font-bold cursor-pointer'>ZOBACZ WSZYSTKO</span>
                    <span className='cursor-pointer'>NOWOŚCI</span>
                    <span className='text-red-500 font-bold cursor-pointer'>PROMOCJE</span>
                </div>
            </div>
        </div>
    )
}

export default DesktopNavDropdown;