import { AccountCircle } from '@mui/icons-material'
import { TextField, Button } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react'
import { useForm } from 'react-hook-form';

const RegisterForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data); // tutaj po otrzymaniu zwalidowanych danych kontaktujemy się z API i w zależności od tego czy jest to register czy login wykonujemy dane działanie.
    }
    console.log(errors)


  return (
    <form  onSubmit={handleSubmit((data) => onSubmit(data))} className='register_subsection flex w-full md:w-auto flex-col items-center gap-y-5'>
        <h2 className='text-center text-[22px] font-light'>Załóż nowe konto w esklepie i Apart Diamond Club</h2>
        <div className='email flex justify-center items-end w-full md:w-auto'>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField 
                error={errors.register_email?.message ? true : false} 
                helperText={`${errors.register_email?.message ? errors.register_email.message:""}`} 
                {...register("register_email", {
                    required: "To pole jest wymagane", 
                    maxLength:{value:80, message:"Email jest zbyt długi"}, 
                    pattern: {value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i, message:"Zły format adresu email"}
                })} 
                className='w-[95%] md:w-[250px] lg:w-[380px]' 
                id="input-with-sx" 
                label="Adres email" 
                variant="standard" 
                type="email" 
            />                

        </div>
        <div className='password flex justify-center items-end w-full md:w-auto'>
            <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField 
                error={errors.register_password?.message ? true : false} 
                helperText={`${errors.register_password?.message ? errors.register_password.message:""}`} 
                {...register("register_password", {
                    required: "To pole jest wymagane", 
                    minLength: {value: 6, message:"Hasło jest zbyt krótkie"}, 
                    maxLength: {value:100, message:"Hasło jest zbyt dlugie"}
                })} 
                className='w-[95%] md:w-[250px] lg:w-[380px]' 
                id="input-with-sx" 
                label="Hasło" 
                variant="standard" 
                type="password" 
            />                    
        </div>
        <div className='repeat_password flex justify-center items-end w-full md:w-auto'>
            <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField 
                error={errors.register_repeat_password?.message ? true : false} 
                helperText={`${errors.register_repeat_password?.message ? errors.register_repeat_password.message:""}`} 
                {...register("register_repeat_password", {
                    required: "To pole jest wymagane",
                    validate: (val:string) => {
                        if(watch("register_password") !== val) {
                            return "Hasła nie są zgodne"
                        }
                    }
                })} 
                className='w-[95%] md:w-[250px] lg:w-[380px]' 
                id="input-with-sx" 
                label="Potwierdź hasło" 
                variant="standard" 
                type="password" 
            />                    
        </div>
        <div className='data_set w-full flex flex-col justify-center lg:flex-row gap-5'>
            <div className='name flex justify-center items-end w-full md:w-auto'>
                <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField 
                    error={errors.register_name?.message ? true : false} 
                    helperText={`${errors.register_name?.message ? errors.register_name.message:""}`}
                    {...register("register_name", {
                        required: "To pole jest wymagane", 
                        maxLength: {value:100, message:"Imię jest zbyt długie"},
                    })} 
                    className='w-[95%] md:w-[250px] lg:w-[380px]' 
                    id="input-with-sx" 
                    label="Imię" 
                    variant="standard" 
                    type="text" 
                />                    
            </div>
            <div className='surname flex justify-center items-end w-full md:w-auto'>
                <TextField 
                    error={errors.register_surname?.message ? true : false} 
                    helperText={`${errors.register_surname?.message ? errors.register_surname.message:""}`}
                    {...register("register_surname", {
                        required: "To pole jest wymagane", 
                        maxLength: {value: 100, message:"Nazwisko jest zbyt długie"}
                    })} 
                    className='w-[95%] md:w-[250px] lg:w-[380px]' 
                    id="input-with-sx" 
                    label="Nazwisko" 
                    variant="standard" 
                    type="text" 
                />                    
            </div>                    
        </div>
        <Button type='submit' className='w-[95%] md:w-[250px] lg:w-[380px] bg-[#F4C1C5] text-[#ae535a] hover:bg-[#c7747b] hover:text-white' variant="contained">Zarejestruj się</Button>
    </form>
  )
}

export default RegisterForm
