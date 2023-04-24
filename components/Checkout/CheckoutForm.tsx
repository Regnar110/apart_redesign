import React, { useState } from 'react'
import Router from 'next/router'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput';
import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'

const CheckoutForm = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();
    const [postalCode, setPostalCode] = useState<string>();

    const handlePostalCodeChange = (event) => {
      const { value } = event.target;
      const cleanedValue = value.replace(/\D/g, ''); // usuwa wszystkie nie-liczbowe znaki globalnie
      let formattedValue = '';
    
      if (cleanedValue.length > 2) { // sprawdza czy jest więcej niż dwie cyfry
        formattedValue = `${cleanedValue.slice(0, 2)}-${cleanedValue.slice(2, 5)}`;
      } else {
        formattedValue = cleanedValue;
      }
    
      setPostalCode(formattedValue);
    };
  return (
    <form className='flex flex-col'>
        <div className='user_and_delivery_data grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:justify-items-start'>
            <div className='delivery p-2 flex flex-col gap-y-3 w-full'>
            <h1 className='text-[18px] font-light'>Dostawa</h1>
            <div className='delivery_type_select'>
            <InputLabel id="demo-simple-select-label"><span className='font-extrabold'>Sposób dostawy*</span></InputLabel>
            <Select
                fullWidth
                input={<OutlinedInput />}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={0}
                label="Age"
                size='small'
                // onChange={handleChange}
            >
                <MenuItem value={0}>Dostawa kurierem do domu</MenuItem>
                <MenuItem value={1}>Dostawa do salonu Apart</MenuItem>
            </Select>
            </div>
            <div className='delivery_country'>
            <InputLabel id="demo-simple-select-label"><span className='font-extrabold'>Kraj*</span></InputLabel>
            <Select
                fullWidth
                input={<OutlinedInput/>}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={0}
                label="Kraj"
                size='small'
                // onChange={handleChange}
            >
                <MenuItem value={0}>Polska</MenuItem>
                <MenuItem value={1}>Inne</MenuItem>
            </Select>
            </div>
            </div>
            <div className='delivery_adress flex flex-col gap-y-4 w-full p-2'>
            <h1 className='text-[18px] font-light'>Adres dostawy</h1>
            <TextField 
            {...register("delivery_adress_name", 
                {required: "To pole jest wymagane", 
                maxLength:{value:80, message:"To imie jest zbyt długie"}
            })} 
            className='w-full' 
            id="input-with-sx" 
            label="Imie*" 
            variant="standard" 
            type="text" 
            />      
            <TextField 
            {...register("delivery_adress_surname", 
                {required: "To pole jest wymagane", 
                maxLength:{value:80, message:"To nazwisko jest zbyt długie"}
            })} 
            className='w-full' 
            id="input-with-sx" 
            label="Nazwisko*" 
            variant="standard" 
            type="text" 
            />
            <TextField 
            {...register("delivery_adress_street", 
                {
                required: "To pole jest wymagane", 
                } 
            )} 
            className='w-full' 
            id="input-with-sx" 
            label="Adres (ulica i numer domu/lokalu)*" 
            variant="standard" 
            type="text" 
            />
            <TextField 
            {...register("delivery_adress_street_additional")} 
            className='w-full' 
            id="input-with-sx" 
            label="Adres (ew. dodatkowe informacje)" 
            variant="standard" 
            type="text" 
            />
            <div className='delivery_city flex gap-2'>
                <TextField
                {...register("delivery_adress_city_postal", 
                {
                required: "To pole jest wymagane", 
                }
                )} 
                className='w-1/3'
                label="Kod pocztowy*"
                id='input-with-sx'
                variant='standard'
                type="text" // zmieniamy typ na "text" zamiast "number"
                inputProps={{ maxLength: 6, pattern: '\\d{2}-\\d{3}' }} // zwiększamy maksymalną długość do 6 i ustawiamy wzorzec do walidacji
                value={postalCode}
                onChange={handlePostalCodeChange}
                />
                <TextField 
                {...register("delivery_adress_city_name", 
                {
                    required: "To pole jest wymagane", 
                }
                )} 
                className='w-2/3' 
                id="input-with-sx" 
                label="Miejscowość*" 
                variant="standard" 
                type="text" 
                />
            </div>
            <TextField 
                {...register("delivery_adress_cellphone", 
                {
                    required: "To pole jest wymagane",
                    minLength:{value:9, message:"Numer jest zbyt krótki"}
                }
                )} 
                className='w-full' 
                id="input-with-sx" 
                label="Telefon komórkowy*" 
                variant="standard" 
                type="number" 
                />
                <TextField 
                {...register("delivery_adress_email", 
                {
                    required: "To pole jest wymagane",
                    pattern: {value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i, message:"Zły format adresu email"}
                }
                )} 
                className='w-full' 
                id="input-with-sx" 
                label="Adres e-mail*" 
                variant="standard" 
                type="text" 
                />
            </div>
            <div className='additional_data flex flex-col gap-y-3 p-2 w-full'>
            <h1 className='text-[18px] font-light'>Dane dodatkowe</h1>
            <div className='flex justify-start'>
                <Checkbox defaultChecked />
                <div className='flex flex-col '>
                <span className='font-bold text-[16px]'>Wysyłka jako upominek</span>
                <span className='text-[14px] font-light'>Zaznacz, jeśli chcesz dołączyć dedykację</span>
                </div>
            </div>
            <div className='flex justify-start'>
                <Checkbox />
                <div className='flex flex-col '>
                <span className='font-bold text-[16px]'>E-paragon</span>
                <span className='text-[14px] font-light'>To trwały i ekologiczny dowód zakupu</span>
                </div>
            </div>
            <div className='flex justify-start'>
                <Checkbox />
                <div className='flex flex-col '>
                <span className='font-bold text-[16px]'>Paragon w formie papierowej</span>
                </div>
            </div>
            <div className='flex justify-start'>
                <Checkbox />
                <div className='flex flex-col '>
                <span className='font-bold text-[16px]'>Faktura</span>
                <span className='text-[14px] font-light'>Zaznacz, jeśli chcesz otrzymać fakturę VAT</span>
                </div>
            </div>
            </div>
        </div>
        <div className='regulamin flex justify-start items-center p-2 border-t-[1px] border-[#c7747b]'>
        <Checkbox required size='small' defaultChecked={false}/>
        <span className='text-[13px] font-light'>Zapoznałem się z regulaminem sklepu internetowego prowadzonego przez E-R2 Sp. z o.o. S.K.A. oraz informacjami o produktach i akceptuję jego warunki. *</span>              
        </div>
        <div className='modal_basket_buttons font-light p-3 flex justify-between items-center text-[12px] md:text-[15px]'>
        <button onClick={() => Router.push("/basket")} className='px-3 py-1 border-[1px] border-[#adadad]'>Wstecz</button>
        <button onClick={() => Router.push("/checkout/confirm")} className='px-3 py-1 shadow-lg w-[120px] md:w-[170px] bg-[#F4C1C5] text-[#ae535a] hover:bg-[#c7747b] hover:text-white' >Podsumowanie</button>
        </div>
    </form>
  )
}

export default CheckoutForm
