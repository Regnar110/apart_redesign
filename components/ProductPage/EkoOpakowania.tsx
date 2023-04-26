import React from 'react'
import Image from 'next/image'
import eko_opakowania from '../../public/eko.jpg'
const EkoOpakowania = () => {
  return (
    <div className='eko_opakowania relative flex flex-col lg:flex-row justify-center items-center text-left gap-x-5 pt-10'>
        <div className='opis_eko flex flex-col gap-y-5 w-full lg:w-[500px] xl:w-[600px]'>
            <div className='box_title text-[17px] border-b-[1px] border-black'>
                <h4>Piękne opakowania gratis</h4>
            </div>
            <span className='text-[14px]'>Kupione na apart.pl produkty są domyślnie pakowane w ekologiczne opakowania, które wprowadziliśmy w trosce o ochronę środowiska. Są one estetyczne, a co najważniejsze przyjazne naszej planecie. W eSklepie Apart są dostępne także nowe opakowania w zachwycającej subtelnością tonacji pudrowego różu. Darmowy zestaw to wybrane piękne pudełko oraz dołączona torebka upominkowa.</span>
        </div>
        <Image className='w-[450px] lg:h-auto lg:w-[500px] xl:w-[600px]' width={415} height={335} style={{objectFit:"contain"}} src={eko_opakowania} alt={'eko_opakowania'} />   
    </div> 
  )
}

export default EkoOpakowania
