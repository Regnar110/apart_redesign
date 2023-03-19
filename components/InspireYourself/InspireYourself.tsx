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

import News from './News/News'
import sg_desktop from '../../public/inspire/News/sg_desktop.jpg'
import sg_mobile from '../../public/inspire/News/sg_mobile.webp'
import top_desktop from '../../public/inspire/News/top_desktop.jpg'
import top_mobile from '../../public/inspire/News/top_mobile.webp'
import sg_2_desktop from '../../public/inspire/News/sg_2_desktop.jpg'
import sg_2_mobile from '../../public/inspire/News/sg_2_mobile.webp'
const InspireYourself = () => {
  return (
    <section className='bg-[#FEF6F7] flex flex-col justify-center items-center my-5' >
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
        <News 
        images={
            [
                {
                    desktop:sg_desktop,
                    mobile:sg_mobile,
                    imageTopTitle: "Magdalena Boczarska ambasadorką marki Apart",
                    imageBottomTitle: "Trendy | 2023-03-15 | W 2 MINUTY",
                    description: "Wiosenno-letnia kampania marki Apart to premierowa odsłona wzorów oraz modeli biżuteryjnych, a jednocześnie debiutowa rola nowej ambasadorki marki. Magdalena Boczarska zaprezentowała najnowsze biżuteryjne trendy Apart w hiszpańskich plenerach Walencji i Madrytu."
                },
                {
                    desktop:top_desktop,
                    mobile:top_mobile,
                    imageTopTitle: "Studio Apart: Męska biżuteria w kobiecym wydaniu",
                    imageBottomTitle: "Studio Apart | 2023-03-13 | W 1 MINUTY",
                    description: "Jak mówił w Studiu Apart stylista Maciej Spadło, elementy męskiej biżuterii po które sięgają kobiety to trend widoczny od dawna. Jednym z pierwszych i najbardziej wyrazistych był i jest męski sygnet. Początkowo noszony tylko przez mężczyzn, szybko zyskał sympatię Pań."
                },
                {
                    desktop:sg_2_desktop,
                    mobile:sg_2_mobile,
                    imageTopTitle: "Biżuteria na wiosnę: najnowsze trendy",
                    imageBottomTitle: "Trendy | 2023-03-17 | W 2 MINUTY",
                    description: "Wszystkim zmęczonym jesienno-zimowym czasem humor poprawić powinna zapowiedź nowych trendów. Na jaką porę roku? Oczywiście na wiosnę! Warto poznać przegląd głównych motywów w biżuterii, jakie będą obowiązywały już niebawem. Oto najnowsze trendy w biżuterii na wiosnę."
                },
            ]
        }
        />
    </section>
  )
}

export default InspireYourself
