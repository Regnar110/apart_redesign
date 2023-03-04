import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
interface Props {
    title:string;
    activityHandler: (dropdownStatus:boolean) => void
    categories: Category[]
}

const DesktopNavDropdown = ({title, activityHandler, categories}:Props) => {
    const {products} = useSelector((state:RootState) => state)
    return (
        <div onMouseLeave={() => activityHandler(false)} className='w-full bg-white flex justify-center items-center flex-col gap-y-7 py-10 overflow-visible'>
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
                                            <Link className='py-1 hover text-[12px] cursor-pointer hover:text-[#d6ac52]' href={'/'}>{el.title}</Link>
                                        ):
                                        null
                                    })
                                 }
                            </div>
                        )
                    })
                    // categories.map((category, i) => {
                    // return (
                    // <div className='flex flex-col' key={i}>
                    //     <h2 className='text-md text-black font-bold'>{category.title}</h2>
                    //     <span className='py-1 hover text-sm cursor-pointer hover:text-[#d6ac52]'>Produkt</span>
                    //     <span className='py-1 hover text-sm cursor-pointer hover:text-[#d6ac52]'>Produkt</span>
                    //     <span className='py-1 hover text-sm cursor-pointer hover:text-[#d6ac52]'>Produkt</span>
                    //     <span className='py-1 hover text-sm cursor-pointer hover:text-[#d6ac52]'>Produkt</span>
                    //     <span className='py-1 hover text-sm cursor-pointer hover:text-[#d6ac52]'>Produkt</span>
                    //     <span className='py-1 hover text-sm cursor-pointer hover:text-[#d6ac52]'>Produkt</span>
                    //     <span className='py-1 hover text-sm cursor-pointer hover:text-[#d6ac52]'>Produkt</span>
                    //     <span className='py-1 hover text-sm cursor-pointer hover:text-[#d6ac52]'>Produkt</span>
                    //     <span className='py-1 hover text-sm cursor-pointer hover:text-[#d6ac52]'>Produkt</span>
                    //     <span className='py-1 hover text-sm cursor-pointer hover:text-[#d6ac52]'>Produkt</span>
                    //     <span className='py-1 hover text-sm cursor-pointer hover:text-[#d6ac52]'>Produkt</span>
                    // </div>
                    // )
                    // })
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