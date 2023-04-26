import React from 'react'

const BasketAlertMessage = () => {
  return (
    <div className='basket_alert_message bg-[#FCF8E3] text-[12px] lg:text-[14px] font-light md:w-[768px] lg:w-[1024px] xl:w-[1280px] text-center p-10 lg:px-40 lg:py-10 flex flex-col gap-y-5'>
        <span>
        Jeśli posiadasz aktywną i zarejestrowaną kartę Apart Diamond Club, w celu skorzystania z przysługujących przywilejów i rabatów, w kolejnym kroku musisz się zalogować.
        Rabat zostanie wówczas naliczony automatycznie.
        </span>
        <span>
        Jeśli posiadasz kartę Apart Diamond Club <span className='font-semibold'>z kodem PIN na odwrocie</span>, która nie została jeszcze zarejestrowana, należy przed dokonaniem zakupu dokonać jej <span className='font-semibold'>rejestracji</span>.
        </span>
        <span>
        W przypadku posiadania karty ADC bez nadanego numeru PIN, prosimy na adres mailowy adc.bok@apart.pl podać:
        <br/>
        numer karty ADC, imię i nazwisko posiadacza karty ADC, adres do korespondencji, data urodzenia (opcjonalnie), numer telefonu do kontaktu.
        <br/>
        W godzinach pracy BOK można skontaktować się
        <br/>
        telefonicznie +48 61 89 55 555.
        </span>
    </div>
  )
}

export default BasketAlertMessage
