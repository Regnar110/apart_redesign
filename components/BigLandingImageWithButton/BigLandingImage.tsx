import React from 'react'
import MediaQuery from 'react-responsive'
import CustomTextButton from '../button/CustomTextButton'
import Image, { StaticImageData } from 'next/image'

interface BigLandingImageWithButtonProps {
    hasTitles?: { 
      top_title:string;
      bottom_title: string;
      desktop: {
        placing: "right" | "left" | "center"
        titles_color: string;
        desktopButtonPosition?: string;
        buttonWidth?:string
      }
      mobile: {
        placing: "right" | "left" | "center"
        titles_color: string;
        mobileButtonPosition?: string;
        buttonWidth?:string // jest to zastępstwo gdy nie wprowadzimy buttonposition. Pozwala to na wycentrowanie przycisku pod wycentrowanymi titles
      }

    }
    //Jeżeli na obrazie nie ma być żadnych tytułów tylko sam przycisk pomijamy dostarczanie właściwości hasTitles do komponentu
    maxQueryWidth:number, 
    minQueryWidth:number, 
    imageWidth:number, 
    imageHeight:number, 
    mobileImageSrc:StaticImageData, 
    desktopImageSrc: StaticImageData,
    buttonTextContent:string,
    buttonIsAbsolute?:boolean,
    arrowButton?:boolean
    buttonPosition?:string
    buttonHref?:string
}

const BigLandingImageWithButton = (
    {
        hasTitles,
        maxQueryWidth, 
        minQueryWidth, 
        imageWidth, 
        imageHeight, 
        mobileImageSrc, 
        desktopImageSrc,
        buttonTextContent,
        buttonIsAbsolute,
        arrowButton,
        buttonPosition,
        buttonHref,
    }:BigLandingImageWithButtonProps) => {
      const rightPositionStyleQuery = "right-[10%]"
      const leftPositionStyleQuery = "left-[10%]"

  return (
        <div className='landing-image relative w-[100vw] h-auto flex justify-center items-center'>
          <MediaQuery maxWidth={maxQueryWidth}>
            <Image alt='landing_apart_image' priority style={{objectFit:"contain", width:"100%"}} src={mobileImageSrc}/>            
          </MediaQuery>
          <MediaQuery minWidth={minQueryWidth}>
            <Image alt='landing_apart_image' priority style={{objectFit:"contain", width:"100%"}} src={desktopImageSrc}/>            
          </MediaQuery>
          {
            !hasTitles ? 
            <CustomTextButton isArrow={arrowButton} textContent={buttonTextContent} isAbsolute={buttonIsAbsolute} position={buttonPosition} hrefQuery={buttonHref ? buttonHref:'/'}/>
            :
            <div className='big_image_titles_conainter absolute top-0 left-0 w-full h-full flex lg:items-center  justify-center'>
              {/* mobileTitle query */}
              <MediaQuery maxWidth={maxQueryWidth}>
                <div className={`big_image_titles_conainter relative w-full font-playfair ${hasTitles.mobile.titles_color} flex text-center flex-col justify-end items-center py-6`}>
                  <span className='text-[6.6vw] BigLandingImageMobileTitlesShadow'>{hasTitles.top_title}</span>
                  <span className='text-[14.4vw] BigLandingImageMobileTitlesShadow mb-[80px]'>{hasTitles.bottom_title}</span>
                  <div className='button_width_setter'>

                  </div>
                  <CustomTextButton isArrow={arrowButton} buttonWidth={hasTitles.mobile.buttonWidth} textContent={buttonTextContent} isAbsolute={buttonIsAbsolute} position={hasTitles.mobile.mobileButtonPosition} hrefQuery={buttonHref ? buttonHref:'/'} />
                </div>           
              </MediaQuery>
              {/* desktop title query */}
              <MediaQuery minWidth={minQueryWidth}>
                <div className={`big_image_titles_conainter relative w-full font-playfair ${hasTitles.desktop.titles_color} flex ${hasTitles.desktop.placing === "right" ? "text-right" : "text-left"} flex-col`}>
                  <span className={`text-[2.6vw] 2xl:text-[67px] relative ${hasTitles.desktop.placing === "right" ? rightPositionStyleQuery : leftPositionStyleQuery}`}>{hasTitles.top_title}</span>
                  <span className={`text-[9.4vw] 2xl:text-[150px] relative ${hasTitles.desktop.placing === "right" ? rightPositionStyleQuery : leftPositionStyleQuery}`}>{hasTitles.bottom_title}</span>
                  <div className='button_width_setter reative w-full'>
                    <CustomTextButton isArrow={arrowButton} textContent={buttonTextContent} isAbsolute={buttonIsAbsolute} position={hasTitles.desktop.desktopButtonPosition} hrefQuery={buttonHref ? buttonHref:'/'} />
                  </div>
                  
                </div> 
              </MediaQuery>       
            </div>
            // text-[2.6vw]
            // text-[9.4vw]

          }

        </div>
  )
}

export default BigLandingImageWithButton
