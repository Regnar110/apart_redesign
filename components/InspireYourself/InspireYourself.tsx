import React from 'react'
import LandingHeader from '../LandingHeader/LandingHeader'
import Inspirations from './Inspirations/Inspirations'

import instagram_desktop from '../../public/inspire/instagram_desktopo.jpg'
import instagram_mobile from '../../public/inspire/instagram_mobile.webp'
import lookbook_desktop from '../../public/inspire/lookbook_desktop.jpg'
import lookbook_mobile from '../../public/inspire/lookbook_mobile.webp'
import upart_desktop from '../../public/inspire/magazyn-upart_desktop.jpg'
import upart_mobile from '../../public/inspire/magazyn-upart_mobile.webp'
import wyszuk_zdj_desktop from '../../public/inspire/wyszukiwanie-zdjeciem_desktop.jpg'
import wyszuk_zdj_mobile from '../../public/inspire/wyszukiwanie-zdjeciem_mobile.webp'

const InspireYourself = () => {
  return (
    <section className='bg-[#FEF6F7] flex flex-col' >
        <LandingHeader headerContent='ZAINSPIRUJ SIĘ' />
        <Inspirations 
            images={[
                {
                    desktop: instagram_desktop,
                    mobile: instagram_mobile,
                    titleLine_1:"Obserwuj nas na",
                    titleLine_2:"Instagramie"
                },
                {
                    desktop: lookbook_desktop,
                    mobile: lookbook_mobile,
                    titleLine_1:"Lookbook Apart tworzony",
                    titleLine_2:"przez Was"
                },
                {
                    desktop: upart_desktop,
                    mobile: upart_mobile,
                    titleLine_1:"Up!Art",
                    titleLine_2:"Magazyn inspiracji"
                },
                {
                    desktop: wyszuk_zdj_desktop,
                    mobile: wyszuk_zdj_mobile,
                    titleLine_1:"Wszykiwanie",
                    titleLine_2:"zdjęciem"
                },
                
            ]}
        />
    </section>
  )
}

export default InspireYourself
