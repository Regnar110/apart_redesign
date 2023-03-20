import React from 'react'
import Link from 'next/link'
import {CiFacebook ,CiInstagram ,CiYoutube} from 'react-icons/ci'
import {FaPinterest} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='site_footer w-full flex flex-col justify-center items-center mt-3 py-6 gap-y-6 bg-[#F1F1F1]'>
      <div className='responsive_row_1 flex w-[90%] lg:w-[70%] flex-wrap md:flex-nowrap justify-around gap-5'>
        <div className='row_1_col1 flex flex-col w-[100%] md:w-auto'>
            <h4 className='font-roboto text-[18px] text-[#333333] font-normal my-3'>ZAKUPY ONLINE</h4>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>Pomoc - częste pytania</Link>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>Wysyłka i płatność</Link>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>Jak kupować</Link>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>Zwrot</Link>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>Regulamin</Link>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>Odstąpienie od umowy</Link>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>Kontakt</Link>
        </div>
        <div className='row_1_col2 flex flex-col w-[100%] md:w-auto'>
            <h4 className='font-roboto text-[18px] text-[#333333] font-normal my-3'>KARTY PODARUNKOWE</h4>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>Kup kartę podarunkową</Link>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>Sprawdź saldo i termin ważności</Link>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>Aktywuj kartę</Link>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>Regulamin</Link>
        </div>
        <div className='row_1_col3 flex flex-col w-[100%] md:w-auto'>
            <h4 className='font-roboto text-[18px] text-[#333333] font-normal my-3'>APART DIAMOND CLUB</h4>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>Dołącz do ADC przez WWW</Link>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>Aplikacja ADC</Link>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>Regulamin ADC</Link>
        </div>
        <div className='row_1_col4 flex flex-col w-[100%] md:w-auto'>
            <h4 className='font-roboto text-[18px] text-[#333333] font-normal my-3'>FIRMA</h4>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>O nas</Link>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>Salony Apart</Link>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>Historia</Link>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>CSR</Link>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>Kariera</Link>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>Sprzedaż korporacyjna B2B</Link>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>Regulamin serwisu Apart</Link>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>Polityka Prywatności</Link>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>Teksty prawne</Link>
        </div> 
        <div className='row_1_col5 flex flex-col w-[100%] md:w-auto'>
            <h4 className='font-roboto text-[18px] text-[#333333] font-normal my-3'>SERWISY APART</h4>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>mennica apart.pl</Link>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>exclusive.apart.pl</Link>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>fashion.apart.pl</Link>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>press.apart.pl</Link>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>apart.cz</Link>
            <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black' href={"/"}>apart.eu</Link>
        </div>
      </div>
      <div className='responsive_row_2 flex w-[90%] lg:w-[70%] flex-wrap md:flex-nowrap gap-y-5 md:gap-y-0 justify-around'>
        <div className='row_2_col1 font-roboto flex flex-col w-[100%] md:w-auto'>
          <h4 className='font-roboto text-[18px] text-[#333333] font-normal my-3'>NEWSLETTER</h4>
          <p>Otrzymuj najnowsze oferty</p>
          <small>Zamawiam usługę Newsletter i Wyrażam zgodę <br/> na świadczenie jej na podstawie Regulaminu Usługi Newsletter</small>
          <div className='footer_email_input flex gap-1'>
            <input placeholder='Podaj adres email' className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-200" id="inline-email" type="email" value=""/>
            <div className='p-3 cursor-pointer bg-[#F4C1C5] hover:bg-[#c7747b] text-[#ae535a] hover:text-white transition-all'>Zapisz się</div>
          </div>
        </div>
        <div className='row_2_col2 flex flex-col gap-3 w-[100%] md:w-auto'>
          <h4 className='font-roboto text-[18px] text-[#333333] font-normal my-0'>KONTAKT</h4>
          <Link className='cursor-pointer font-roboto text-[12px] lg:text-[14px] font-light text-[#777777] hover:text-black mb-3' href={"/"}>info@apart.pl</Link>
          <div className='social_footer_icons flex gap-4'>
            <CiFacebook className='cursor-pointer w-8 h-8'/>
            <CiInstagram className='cursor-pointer w-8 h-8'/>
            <CiYoutube className='cursor-pointer w-8 h-8'/>
            <FaPinterest className='cursor-pointer w-8 h-8'/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
