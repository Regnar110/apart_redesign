import Head from 'next/head'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

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
import LoginForm from '../components/LoginPage/LoginForm';
import RegisterForm from '../components/LoginPage/RegisterForm';

const Login = () => {
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
           <LoginForm />
           <RegisterForm/>
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
