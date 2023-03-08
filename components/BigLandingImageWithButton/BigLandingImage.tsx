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
        desktopButtonPosition: string;
      }
      mobile: {
        placing: "right" | "left" | "center"
        titles_color: string;
        mobileButtonPosition: string;
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
        buttonPosition,
        buttonHref,
    }:BigLandingImageWithButtonProps) => {
      const rightPositionStyleQuery = "right-[10%]"
      const leftPositionStyleQuery = "right-[70%]"

  return (
        <div className='landing-image relative w-full h-auto'>
          <MediaQuery maxWidth={maxQueryWidth}>
            <Image width={imageWidth} height={imageHeight} alt='landing_apart_image' priority style={{objectFit:"contain"}} src={mobileImageSrc}/>            
          </MediaQuery>
          <MediaQuery minWidth={minQueryWidth}>
            <Image width={imageWidth} height={imageHeight} alt='landing_apart_image' priority style={{objectFit:"contain"}} src={desktopImageSrc}/>            
          </MediaQuery>
          {
            !hasTitles ? 
            <CustomTextButton textContent={buttonTextContent} isAbsolute={buttonIsAbsolute} position={buttonPosition} hrefQuery={buttonHref ? buttonHref:'/'}/>
            :
            <div className='big_image_titles_conainter absolute top-0 left-0 w-full h-full flex lg:items-center  justify-center'>
              {/* mobileTitle query */}
              <MediaQuery maxWidth={maxQueryWidth}>
                <div className={`big_image_titles_conainter relative w-full font-playfair ${hasTitles.mobile.titles_color} flex text-center flex-col justify-end`}>
                  <span className='text-[6.6vw] BigLandingImageMobileTitlesShadow'>{hasTitles.top_title}</span>
                  <span className='text-[14.4vw] BigLandingImageMobileTitlesShadow mb-[80px]'>{hasTitles.bottom_title}</span>
                  <CustomTextButton textContent={buttonTextContent} isAbsolute={buttonIsAbsolute} position={hasTitles.mobile.mobileButtonPosition} hrefQuery={buttonHref ? buttonHref:'/'} />
                </div>           
              </MediaQuery>
              {/* desktop title query */}
              <MediaQuery minWidth={minQueryWidth}>
                <div className={`big_image_titles_conainter relative w-full font-playfair ${hasTitles.desktop.titles_color} flex text-right flex-col`}>
                  <span className={`text-[2.6vw] relative ${hasTitles.desktop.placing === "right" ? rightPositionStyleQuery : leftPositionStyleQuery}`}>{hasTitles.top_title || "Twoj styl teraz"}</span>
                  <span className={`text-[9.4vw] relative ${hasTitles.desktop.placing === "right" ? rightPositionStyleQuery : leftPositionStyleQuery}`}>{hasTitles.bottom_title || "Styl"}</span>
                  <CustomTextButton textContent={buttonTextContent} isAbsolute={buttonIsAbsolute} position={hasTitles.desktop.desktopButtonPosition} hrefQuery={buttonHref ? buttonHref:'/'} />
                </div> 
              </MediaQuery>       
            </div>

          }

        </div>
  )
}

export default BigLandingImageWithButton
