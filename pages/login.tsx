import Head from 'next/head'
import React, { useState } from 'react'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation'
import Pajacyk from '../components/Pajacyk/Pajacyk';
import LandingHeader from '../components/LandingHeader/LandingHeader';
import Benefits from '../components/Benefits/Benefits';
import LoginForm from '../components/LoginPage/LoginForm';
import RegisterForm from '../components/LoginPage/RegisterForm';
import ErrorIcon from '@mui/icons-material/Error';
import FlagIcon from '@mui/icons-material/Flag';
import toast, {Toaster}  from 'react-hot-toast';

const Login = () => {
  const notifyAction= (toastNotification:string, httpStatusCode:number) => {
    // return httpStatusCode === 200 ? toast.success(toastNotofication): toast.error(toastNotofication)
    return toast.custom(t => (
        <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} ${httpStatusCode === 500 ? "bg-[#c7747b] text-white font-bold" : "bg-white text-black font-medium"} max-w-md w-full p-5 shadow-2xl rounded-lg pointer-events-auto flex gap-x-5 items-center justify-center ring-1 ring-black ring-opacity-5`}>
        {
            httpStatusCode === 500 ? <ErrorIcon className='w-8 h-8' style={{color:"#F7C600"}}/> :<FlagIcon className='w-8 h-8' style={{color:"green"}}/>
        }
        <p>{toastNotification}</p>
        </div>
    ))
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
           <LoginForm notifyAction={notifyAction}/>
           <RegisterForm notifyAction={notifyAction}/>
        </div>
        <LandingHeader headerContent='Załóż konto i wspieraj akcje charytatywną!' />
        <Pajacyk />
        <LandingHeader headerContent='Korzyści kupowania na Apart.pl'/>
        <Benefits />
    </section>
    <Footer/>
    <Toaster position='bottom-center'/>
    </div>
  )
}

export default Login
