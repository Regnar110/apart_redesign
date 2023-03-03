import React, {useState, useContext} from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineDown, AiOutlineClose} from 'react-icons/ai'
import {slide as Menu } from 'react-burger-menu'
interface Props {
    activityHandler: (status:boolean) => void;
    menuStatus: boolean
}

const MobileMenuPanel = ({activityHandler, menuStatus}: Props) => {

  // const products = useContext(ProductsContext)

  const [revealedContentId, setRevealedContentId] = useState('')
  const revealContent = (id:string) => {
    id === revealedContentId ? setRevealedContentId("") : setRevealedContentId(id)
  }

  return (
    <div>
      <RxHamburgerMenu className='w-8 h-8' onClick={() => activityHandler(!menuStatus)}/>
      <div className='mm-wrapper absolute top-0 left-0'>
          <Menu itemListClassName={"flex flex-col "} menuClassName='bg-white' width={'280px'} isOpen={menuStatus}>
            <h1 className='text-[#f4c1c5] text-center p-2'>MENU</h1>
            <AiOutlineClose className='absolute w-5 h-5 right-2 top-2 bg-[#f4c1c5]'/>
            <div className='ml-3 gap-y-1 divide-y-2' style={{display: "flex", flexDirection:"column"}}>
              <div className='flex flex-col'>
                <div 
                  className='flex justify-between py-3 pr-3 text-[14px] text-[#777]'
                  onClick={() => revealContent('someId')}
                  >
                  <span>BRANSOLETKI</span>
                  <AiOutlineDown  className='-rotate-90'/>
                </div>
                <div id='someId' className={`mm-category-content overflow-hidden w-full transition-all ${revealedContentId === 'someId' ? 'transform h-auto':'h-0'} flex flex-col ml-3 text-[#777] text-[14px] divide-y-2`}>
                  <span className='py-3'>Pierścionek Deluxe V2</span>
                  <span className='py-3'>Pierścionek Deluxe V2</span>
                  <span className='py-3'>Pierścionek Deluxe V2</span>
                  <span className='py-3'>Pierścionek Deluxe V2</span>
                  <span className='py-3'>Pierścionek Deluxe V2</span>
                  <span className='py-3'>Pierścionek Deluxe V2</span>
                  <span className='py-3'>Pierścionek Deluxe V2</span>
                  <span className='py-3'>Pierścionek Deluxe V2</span>
                  <span className='py-3'>Pierścionek Deluxe V2</span>
                  <span className='py-3'>Pierścionek Deluxe V2</span>

                </div>
              </div>
              <div className='flex justify-between py-3 pr-3 text-[14px] text-[#777]'>
                <span>BRANSOLETKI</span>
                <AiOutlineDown  className='-rotate-90'/>
              </div>                     
              <div className='flex justify-between py-3 pr-3 text-[14px] text-[#777]'>
                <span>BRANSOLETKI</span>
                <AiOutlineDown  className='-rotate-90'/>
              </div>        
              <div className='flex justify-between py-3 pr-3 text-[14px] text-[#777]'>
                <span>BRANSOLETKI</span>
                <AiOutlineDown  className='-rotate-90'/>
              </div>        
              <div className='flex justify-between py-3 pr-3 text-[14px] text-[#777]'>
                <span>BRANSOLETKI</span>
                <AiOutlineDown  className='-rotate-90'/>
              </div>        
              <div className='flex justify-between py-3 pr-3 text-[14px] text-[#777]'>
                <span>BRANSOLETKI</span>
                <AiOutlineDown  className='-rotate-90'/>
              </div>        
              <div className='flex justify-between py-3 pr-3 text-[14px] text-[#777]'>
                <span>BRANSOLETKI</span>
                <AiOutlineDown  className='-rotate-90'/>
              </div>        
              <div className='flex justify-between py-3 pr-3 text-[14px] text-[#777]'>
                <span>BRANSOLETKI</span>
                <AiOutlineDown  className='-rotate-90'/>
              </div>
              <div className='py-3 pr-3 text-[14px] text-[#DC143C] font-semibold'>
                <span>PROMOCJE</span>
              </div>
              <div className='py-3 pr-3 text-[14px] text-[#777]'>
                <span>NOWOŚCI</span>
              </div>
              <div className='flex justify-between py-3 pr-3 text-[14px] text-[#777]'>
                <span>ŚWIAT APART</span>
                <AiOutlineDown  className='-rotate-90'/>
              </div>
            </div>
          </Menu>
      </div>

      {/* <RxHamburgerMenu onClick={() => activityHandler(!menuStatus)} className='w-6 h-5'/>
      <div className='mm-panel-wrapper top-0 left-0 absolute w-full flex flex-row'>
        <div className='mm-content w-11/12 bg-gray-300'>
            NAVBART
        </div>
        <div className='mm-closing-tag w-1/12 text-center cursor-pointer'>
            <span className='bg-red-400 bg-opacity-25 text-black p-2'>X</span>
        </div>
      </div> */}
    </div>
  )
}
export default MobileMenuPanel;