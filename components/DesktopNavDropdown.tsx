import React from 'react'
interface Props {
    title:string;
    activityHandler: (dropdownStatus:boolean) => void
    categories: Category[]
}
const DesktopNavDropdown = ({title, activityHandler, categories}:Props) => {
    return (

        <div onMouseLeave={() => activityHandler(false)} className='w-2/3 bg-white flex justify-center items-center flex-col gap-y-7 py-10'>
            <h1 className='text-2xl'>{title.toUpperCase()}</h1>
            <div className='w-full flex justify-start items-center flex-row gap-x-20 gap-y-7'>
                {
                    categories.map((category, i) => {
                    return (
                    <div className='flex flex-col' key={i}>
                        <h2 className='text-md text-black font-bold'>{category.title}</h2>
                        <span className='py-1 hover text-sm cursor-pointer hover:text-[#d6ac52]'>Produkt</span>
                        <span className='py-1 hover text-sm cursor-pointer hover:text-[#d6ac52]'>Produkt</span>
                        <span className='py-1 hover text-sm cursor-pointer hover:text-[#d6ac52]'>Produkt</span>
                        <span className='py-1 hover text-sm cursor-pointer hover:text-[#d6ac52]'>Produkt</span>
                        <span className='py-1 hover text-sm cursor-pointer hover:text-[#d6ac52]'>Produkt</span>
                        <span className='py-1 hover text-sm cursor-pointer hover:text-[#d6ac52]'>Produkt</span>
                        <span className='py-1 hover text-sm cursor-pointer hover:text-[#d6ac52]'>Produkt</span>
                        <span className='py-1 hover text-sm cursor-pointer hover:text-[#d6ac52]'>Produkt</span>
                        <span className='py-1 hover text-sm cursor-pointer hover:text-[#d6ac52]'>Produkt</span>
                        <span className='py-1 hover text-sm cursor-pointer hover:text-[#d6ac52]'>Produkt</span>
                        <span className='py-1 hover text-sm cursor-pointer hover:text-[#d6ac52]'>Produkt</span>
                    </div>
                    )
                    })
                }
            </div>
        </div>
    )
}

export default DesktopNavDropdown;