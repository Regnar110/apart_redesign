import React from 'react'
import Image, { StaticImageData } from 'next/image'
import CustomTextButton from '../button/CustomTextButton'
import MediaQuery from 'react-responsive'
import try_desktop from '../../public/FourCardsImages/set_one/bizuteria-srebrna-pozlacane_desktop.jpg'
import try_mobile from '../../public/FourCardsImages/set_one/bizuteria-srebrna-pozlacana_mobile.webp'
import Router from 'next/router'

interface Props {
    title?: {
        topHeader_one?:string,
        topHeader_two?:string
        bottomText?:string,
        button?:boolean;
        buttonText?:string;
        buttonWidth?:string;
        position?: "right" | "left"
    },
    cards:[
        {
            desktopImage:StaticImageData;
            mobileImage:StaticImageData;
            subTitle:string;
            hrefQuery:string;
        },
        {
            desktopImage:StaticImageData;
            mobileImage:StaticImageData;
            subTitle:string;
            hrefQuery:string;
        },
        {
            desktopImage:StaticImageData;
            mobileImage:StaticImageData;
            subTitle:string;
            hrefQuery:string;
        },
        {
            desktopImage:StaticImageData;
            mobileImage:StaticImageData;
            subTitle:string;
            hrefQuery:string;
        }
    ]
}

const FourCards = ({title, cards}:Props) => {
  return (
    <div className='four_cards_container w-[100vw] flex justify-center items-center m-4 py-3'>
        <div className={`card_row flex ${title?.position && title?.position ==="right" ? "flex-row" : "flex-row-reverse"} w-full justify-center items-center gap-x-4`}>
            <>
            {
                cards.map(el => {
                    return(
                        <div onClick={() => Router.push(el.hrefQuery)} className='card flex flex-col gap-5 justify-around items-center sm:h-[200px] md:h-[340px] lg:h-[370px] xl:h-[460px]'>
                            <MediaQuery minWidth={1280}>
                                <Image src={el.desktopImage} width={190} height={380} style={{objectFit:"contain"}} alt="card_image"/> 
                                <h3 className='text-center w-[190px]'>
                                    {el.subTitle}
                                </h3>
                            </MediaQuery>
                            <MediaQuery minWidth={1024} maxWidth={1280}>
                                <Image src={el.desktopImage} width={160} height={380} style={{objectFit:"contain"}} alt="card_image"/> 
                                <h3 className='text-center w-[160px]'>
                                    {el.subTitle}
                                </h3>
                            </MediaQuery>
                            <MediaQuery minWidth={768} maxWidth={1024}>
                                <Image src={el.desktopImage} width={110} height={380} style={{objectFit:"contain"}} alt="card_image"/> 
                                <h3 className='text-center w-[110px]'>
                                    {el.subTitle}
                                </h3>
                            </MediaQuery>
                            <div className='button_size_setter w-[70px]'>
                                <CustomTextButton textContent='' hrefQuery={el.hrefQuery} isArrow={true} isAbsolute={false}/>
                            </div>
                        </div>                    
                    )
                })
            }
            {
                //WARUNKOWE WYŚWIETLANIE TYTUŁÓW
                title ?
                <>
                <MediaQuery maxWidth={1024}>
                    <div className={`cards_desc ${title.position === "right" ? "text-right items-end": "text-left items-start"} flex flex-wrap justify-between flex-col relative w-[200px]`}>
                        {title.topHeader_one ? <h2 className='font-playfair text-[25px]'>{title.topHeader_one}<br/>{title.topHeader_two}</h2>:null }
                        {title.bottomText ? <p className='font-roboto text-sm py-4 ml-[15px]'>{title.bottomText}</p>:null }
                        {
                            title.button ?
                            <div className={`button_size_setter ${title.buttonWidth}`}>
                                <CustomTextButton textContent={title.buttonText ? title.buttonText:""} hrefQuery='/' isArrow={true} isAbsolute={false}/>
                            </div>
                            :null
                        } 
                    </div>   
                </MediaQuery>
                <MediaQuery minWidth={1025}>
                    <div className={`cards_desc ${title.position === "right" ? "text-right items-end": "text-left items-start"} flex flex-wrap justify-between flex-col relative xl:w-[380px] lg:w-[300px] md:w-[380px]`}>
                        {title.topHeader_one ? <h2 className='font-playfair text-[40px]'>{title.topHeader_one}<br/>{title.topHeader_two}</h2>:null }
                        {title.bottomText ? <p className={`font-roboto text-sm py-4 ${title.position ==="right"?"ml-[15px]":"mr-[15px]"}`}>{title.bottomText}</p>:null }
                        {
                            title.button ?
                            <div className={`button_size_setter ${title.buttonWidth}`}>
                                <CustomTextButton textContent={title.buttonText ? title.buttonText:""} hrefQuery='/' isArrow={true} isAbsolute={false}/>
                            </div>
                            :null
                        } 
                    </div>                      
                </MediaQuery>                    
                </>
                : null
            }
           </>
        </div>
    </div>
  )
}

export default FourCards

// , width:"12vw