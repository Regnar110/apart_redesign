import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import MediaQuery from 'react-responsive'
import pajacyk from '../../public/csr/pajacyk.jpg'
import pajacyk_mobile from '../../public/csr/pajacyk_mobile.webp'
import CustomTextButton from '../button/CustomTextButton'


const Pajacyk = () => {
  const [isMounted, setIsMounted] = useState(false) // pozwala na uniknięcie Hydration Error. 
  useEffect(() => {
    setIsMounted(true)
  },[])
  return isMounted ?
    <div className='csr_pajacyk flex flex-col md:flex-row w-[98%] md:w-[90%] justify-center items-center md:items-start  lg:items-end'>
      <div className='pajacyk_image_container relative flex justify-start items-start'>
        <MediaQuery minWidth={768}>
            <Image src={pajacyk} width={900} style={{objectFit:"contain"}} alt="pajacyk"/>            
        </MediaQuery>
        <MediaQuery maxWidth={767}>
            <Image src={pajacyk_mobile} style={{objectFit:"contain"}} alt="pajacyk"/>   
        </MediaQuery>
      </div>
      <div className='pajacyk_description text-center md:text-right flex flex-col gap-y-5 justify-center items-center md:items-end mt-5 md:ml-20'>
        <p className='font-roboto text-[13px] md:text-[11px] lg:text-[14px] text-ellipsis w-[300px] md:w-[250px] lg:w-[300px]'>Kontynuujemy naszą współpracę z Polską Akcją Humanitarną jako partner strategiczny tej wspaniałej, istniejącej już od ponad 30 lat organizacji. Nadal będziemy wspierać jedną z flagowych inicjatyw PAH - program Pajacyk, czyli pomoc żywnościową oraz psychospołeczną dla dzieci i młodzieży w trudnej sytuacji</p>
        <CustomTextButton hrefQuery='/' textContent='DOWIEDZ SIĘ WIĘCEJ' isArrow={true}/>
      </div>
    </div>
  :
  null
}

export default Pajacyk
