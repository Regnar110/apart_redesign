import React from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'

interface Props {
    activityHandler: (status:boolean) => void;
    menuStatus: boolean
}

const MobileMenuPanel = ({activityHandler, menuStatus}: Props) => {
  return (
    <nav>
      <RxHamburgerMenu onClick={() => activityHandler(!menuStatus)} className='w-6 h-5'/>
      <div className='mm-panel-wrapper top-0 left-0 absolute w-full flex flex-row'>
        <div className='mm-content w-11/12 bg-gray-300'>
            NAVBART
        </div>
        <div className='mm-closing-tag w-1/12 text-center cursor-pointer'>
            <span className='bg-red-400 bg-opacity-25 text-black p-2'>X</span>
        </div>
      </div>
    </nav>
  )
}
export default MobileMenuPanel;