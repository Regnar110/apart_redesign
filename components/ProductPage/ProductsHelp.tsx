import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ProductsHelp = () => {
  return (
    <div className='products_help flex flex-col lg:flex-row justify-center gap-5 px-5 lg:p-0'>
        <div className='customer_help w-full lg:w-[500px] xl:w-[600px] flex flex-col justify-start pt-10'>
            <div className='box_title text-[17px] border-b-[1px] border-black mb-5'>
                <h4>Pomoc przy zakupie</h4>
            </div>
            <div className='text-[14px] text-black transition-all hover:text-yellow-500 cursor-pointer font-light'><ChevronRightIcon fontSize='small'/><span>Ekspert w biżuterii</span></div>
            <div className='text-[14px] pt-1 text-black transition-all hover:text-yellow-500 cursor-pointer font-light'><ChevronRightIcon fontSize='small'/><span>Jak wybrać właściwy rozmiar pierścionka</span></div>
            <div className='text-[14px] pt-1 text-black transition-all hover:text-yellow-500 cursor-pointer font-light'><ChevronRightIcon fontSize='small'/><span>Jak kupować w eSklepie</span></div>
            <div className='text-[14px] pt-1 text-black transition-all hover:text-yellow-500 cursor-pointer font-light'><ChevronRightIcon fontSize='small'/><span>Wysyłka i formy płatności</span></div>
            <div className='text-[14px] pt-1 text-black transition-all hover:text-yellow-500 cursor-pointer font-light'><ChevronRightIcon fontSize='small'/><span>Apart Diamond Club</span></div>
            <div className='text-[14px] pt-1 text-black transition-all hover:text-yellow-500 cursor-pointer font-light'><ChevronRightIcon fontSize='small'/><span>Regulamin sprzedaży</span></div>
        </div>
        <div className='ask_for_product w-full lg:w-[500px] xl:w-[600px] flex flex-col gap-y-5 justify-start pt-10'>
            <div className='box_title text-[17px] border-b-[1px] border-black'>
                <h4>Zapytaj o produkt</h4>
            </div>
            <div className='ask flex flex-col'>
            <div className='checkbox_ask flex gap-3'>
            <input className='cursor-pointer' defaultChecked={true} type="checkbox" placeholder="Zapytaj o dostęp" /> 
            <label className='cursor-pointer'>Zapytaj o dostępność produktu</label>
            </div>
            <div className='checkbox_ask flex gap-3'>
            <input className='cursor-pointer' type="checkbox" placeholder="Zapytaj o dostęp" /> 
            <label className='cursor-pointer'>Zapytaj o parametry produktu</label>
            </div>
            <form className='ask_question form pt-3'>
                <label className='font-semibold'>Zadaj pytanie</label>
                <textarea className=' border-[1px] border-black w-full h-[200px]' required={true} minLength={20}/>
                <span className='text-[11px] font-light'>(wymagane, min. 20 znaków)</span>
                
                <div className='ask_question_email flex flex-col'>
                    <label className='font-semibold pt-3'>Adres email</label>
                    <div className='email_as_input flex items-end flex-col md:flex-row gap-2'>
                        <input className='border-[1px] w-full  border-black' type='email' required={true}/>
                        <button type='submit' className='p-[2px] shadow-lg w-[150px] bg-[#F4C1C5] text-[#ae535a] hover:bg-[#c7747b] hover:text-white' >Wyślij</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default ProductsHelp
