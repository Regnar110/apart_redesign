import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { showLocalBasket } from '../redux/slices/localBasketSlice'

const Basket = () => { 
    const basketState = useSelector((state:RootState) => showLocalBasket(state))
    console.log(basketState)
  return (
    <div>
      Basket
    </div>
  )
}

export default Basket


//Basket jest komponentem, który renderuje zawartość koszyka użytkownika serwisu.
    // W zależności od tego czy użytkownik jest zalogowany czy nie komponent renderuje zawartość stanu
// lokalnego koszyka, który jest cachowany w pamięci podręcznej przeglądarki(bez logowania) lub wyświetla koszyk użytkownika,
// który jest aktualnie zalogowany.

    // Gdy użytkownik "Gość" dodaje produkty do koszyka to zostaną one zapisane w pamięci podręcznej. Jeżeli natomiast użytkownik ten postanowi np. 
// założyć nowe konto w serwisie, bądź zalogować się do już istniejącego konta to koszyk zostanie przekazany do nowego lub już istniejące konta  i tym samym
// lokalny koszyk gościa zostanie wyczyszczony, a jego zawartość przed tym zostanie wyemigrowana do stanu nowego lub istniejącego już użytkownika.