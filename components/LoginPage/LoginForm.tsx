import { AccountCircle } from '@mui/icons-material'
import { TextField } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import React, {useEffect} from 'react'
import { useForm } from 'react-hook-form';
import { handleLoginOrRegister } from '../../utils/handleLoginOrRegister';
import { useRouter } from 'next/router';
import { userSignIn } from '../../redux/slices/userSlice';
import store from '../../redux/store';

interface Props {
    notifyAction(toastNotofication:string, httpStatusCode:number):void
}

const LoginForm = ({notifyAction}:Props) => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();
    const {dispatch} = store
    const {push} = useRouter();
    const onSubmit = async (data:SuccessLoginData) => {
        console.log(data)
        const loginResponse = await handleLoginOrRegister<LoginResponse>(`userLogin`, data)
        console.log(loginResponse);
        if(loginResponse.is_error) {
            notifyAction(loginResponse.error_message as string, 500)
            console.error(loginResponse.error_message)
        } else { // jeżeli zwrócony dokument użytkownika nie zawiera pola is_error oznacza, że użytkownik zalogowął się w pełni poprawnie!
            dispatch(userSignIn({...loginResponse}))
            push("/")
        }
    }

    useEffect(() => {
        console.log("effect")
        if(isSubmitSuccessful === true) {
            reset()
        }
        
    },[reset, isSubmitSuccessful])
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='login_subsection flex w-full md:w-auto flex-col items-center gap-y-5'>
        <h2 className='text-center text-[22px] font-light'>Mam już konto</h2>
        <div className='email flex justify-center items-end w-full md:w-auto'>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField 
                error={errors.login_email?.message ? true : false} 
                helperText={`${errors.login_email?.message ? errors.login_email.message:""}`} 
                {...register("login_email", 
                    {required: "To pole jest wymagane", 
                    maxLength:{value:80, message:"Email jest zbyt długi"}, 
                    pattern: {value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i, message:"Zły format adresu email"}
                })} 
                className='w-[95%] md:w-[250px] lg:w-[380px]' 
                id="input-with-sx" 
                label="Wpisz adres email" 
                variant="standard" 
                type="email" 
            />                    
        </div>
        <div className='password flex justify-center items-end w-full md:w-auto'>
            <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField 
                error={errors.login_password?.message ? true : false} 
                helperText={`${errors.login_password?.message ? errors.login_password.message:""}`} 
                {...register("login_password", {
                    required: "To pole jest wymagane", 
                    minLength:{value:6, message:"Hasło jest zbyt krótkie"}, 
                    maxLength:{value:100, message:"Hasło jest zbyt długie"}
                })} 
                className='w-[95%] md:w-[250px] lg:w-[380px]' 
                id="input-with-sx" 
                label="Wpisz hasło" 
                variant="standard" 
                type="password" 
            />                    
        </div>
        <button type='submit' className='p-2 rounded-md shadow-lg w-[95%] md:w-[250px] lg:w-[380px] bg-[#F4C1C5] text-[#ae535a] hover:bg-[#c7747b] hover:text-white' >Zaloguj się</button>
        <div className='login_note bg-[#FCF8E3] w-[95%] md:w-[370px] p-4 text-[13px]'>
        Jeśli posiadasz aktywną i zarejestrowaną kartę Apart Diamond Club, w celu skorzystania z przysługujących przywilejów i rabatów musisz się zalogować.
        <br/>
        <br/>
        Jeżeli nie posiadasz karty Apart Diamond Club, możesz zarejestrować nowe konto z kartą wirtualną Apart Diamond Club.
        </div>
    </form>
  )
}

export default LoginForm
