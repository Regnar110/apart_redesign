import Head from 'next/head'
import React, { useState } from 'react'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation'
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import Pajacyk from '../components/Pajacyk/Pajacyk';
import LandingHeader from '../components/LandingHeader/LandingHeader';
import Benefits from '../components/Benefits/Benefits';

const Login = () => {
    //Local page state's.
    //Login
    const [login_email, set_login_email] = useState<string>("")
    const [login_password, set_login_password] = useState<string>("")
    //Register
    const [register_email, set_register_email] = useState<string>("")
    const [register_password, set_register_password] = useState<string>("")
    const [register_repeat_password, set_register_repeat_password] = useState<string>("")
    const [register_name, set_register_name] = useState<string>("")
    const [register_surname, set_register_surname] = useState<string>("")
    const [field_error, set_field_error] = useState<string[]>([]) // stan służąct nam do rozpoznania, które pola są błędnie wprowadzone. W połączeniu z metodą find.
    
    const onInputFieldChange = (field_type:string, targetValue:string) => {
        switch(field_type) {
            case "login_email":
                set_login_email(targetValue);
                break;
            case "login_password":
                set_login_password(targetValue);
                break;
            case "register_email":
                set_register_email(targetValue);
                break;
            case "register_password":
                set_register_password(targetValue)
                break;
            case "register_repeat_password":
                set_register_repeat_password(targetValue);
                break;
            case "register_name":
                set_register_name(targetValue)
                break;
            case "register_surname": 
                set_register_surname(targetValue);
                break;
        }
    }
    
    const submitCertainForm = () => {
        console.log("zatwierdzam konkretną formę")
    }

  return (
    <div className='login_page box-border overflow-x-hidden'>
    <Head>
        <title>Apart login</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navigation/>
    <section className='login_register_section flex flex-col items-center'>
        <div className='titles w-[100%] md:w-[90%] lg:w-[80%]'>
            <h1 className='login_page_title font-roboto text-[28px]'>Moje Konto</h1>
            <p className='subtitle text-[14px]'>Zaloguj się lub utwórz nowe konto</p>            
        </div>
        <div className='login_and_register_container flex flex-col justify-around 2xl:justify-center gap-y-14 gap-x-4 2xl:gap-x-48 md:flex-row w-full md:w-[80%] '>
            <form className='login_subsection flex w-full md:w-auto flex-col items-center gap-y-5'>
                <h2 className='text-center text-[22px] font-light'>Mam już konto</h2>
                <div className='email flex justify-center items-end w-full md:w-auto'>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField onChange={(e) => onInputFieldChange("login_email", e.target.value)} error={field_error.some(el =>  el ==="login_email")} className='w-[95%] md:w-[250px] lg:w-[380px]' id="input-with-sx" label="Wpisz adres email" variant="standard" type="email" />                    
                </div>
                <div className='password flex justify-center items-end w-full md:w-auto'>
                    <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField onChange={(e) => onInputFieldChange("login_password", e.target.value)} error={field_error.some(el =>  el ==="login_password")} className='w-[95%] md:w-[250px] lg:w-[380px]' id="input-with-sx" label="Wpisz hasło" variant="standard" type="password" />                    
                </div>
                <Button onClick={() => submitCertainForm()} className='w-[95%] md:w-[250px] lg:w-[380px] bg-[#F4C1C5] text-[#ae535a] hover:bg-[#c7747b] hover:text-white' variant="contained">Zaloguj się</Button>
                <div className='login_note bg-[#FCF8E3] w-[95%] md:w-[370px] p-4 text-[13px]'>
                Jeśli posiadasz aktywną i zarejestrowaną kartę Apart Diamond Club, w celu skorzystania z przysługujących przywilejów i rabatów musisz się zalogować.
                <br/>
                <br/>
                Jeżeli nie posiadasz karty Apart Diamond Club, możesz zarejestrować nowe konto z kartą wirtualną Apart Diamond Club.
                </div>
            </form>
            <form className='register_subsection flex w-full md:w-auto flex-col items-center gap-y-5'>
                <h2 className='text-center text-[22px] font-light'>Załóż nowe konto w esklepie i Apart Diamond Club</h2>
                <div className='email flex justify-center items-end w-full md:w-auto'>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField onChange={(e) => onInputFieldChange("register_email", e.target.value)} error={field_error.some(el =>  el ==="register_email")} required={true} className='w-[95%] md:w-[250px] lg:w-[380px]' id="input-with-sx" label="Adres email" variant="standard" type="email" />                    
                </div>
                <div className='password flex justify-center items-end w-full md:w-auto'>
                    <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField onChange={(e) => onInputFieldChange("register_password", e.target.value)} error={field_error.some(el =>  el ==="register_password")} required={true} className='w-[95%] md:w-[250px] lg:w-[380px]' id="input-with-sx" label="Hasło" variant="standard" type="password" />                    
                </div>
                <div className='repeat_password flex justify-center items-end w-full md:w-auto'>
                    <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField onChange={(e) => onInputFieldChange("register_repeat_password", e.target.value)} error={field_error.some(el =>  el ==="register_repeat_password")} required={true} className='w-[95%] md:w-[250px] lg:w-[380px]' id="input-with-sx" label="Potwierdź hasło" variant="standard" type="password" />                    
                </div>
                <div className='data_set w-full flex flex-col justify-center lg:flex-row gap-5'>
                    <div className='name flex justify-center items-end w-full md:w-auto'>
                        <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField onChange={(e) => onInputFieldChange("register_name", e.target.value)} error={field_error.some(el =>  el ==="register_name")} required={true} className='w-[95%] md:w-[250px] lg:w-[380px]' id="input-with-sx" label="Imię" variant="standard" type="text" />                    
                    </div>
                    <div className='surname flex justify-center items-end w-full md:w-auto'>
                        <TextField onChange={(e) => onInputFieldChange("register_surname", e.target.value)} error={field_error.some(el =>  el ==="register_surname")} required={true} className='w-[95%] md:w-[250px] lg:w-[380px]' id="input-with-sx" label="Nazwisko" variant="standard" type="text" />                    
                    </div>                    
                </div>
                <Button onClick={() => submitCertainForm()} className='w-[95%] md:w-[250px] lg:w-[380px] bg-[#F4C1C5] text-[#ae535a] hover:bg-[#c7747b] hover:text-white' variant="contained">Zarejestruj się</Button>
            </form>
        </div>
        <LandingHeader headerContent='Załóż konto i wspieraj akcje charytatywną!' />
        <Pajacyk />
        <LandingHeader headerContent='Korzyści kupowania na Apart.pl'/>
        <Benefits />
    </section>
    <Footer/>
    </div>
  )
}

export default Login
