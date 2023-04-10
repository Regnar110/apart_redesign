import Head from 'next/head'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer/Footer'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { getLoggedUser, getWishListProductsRefs, isUserLogged } from '../redux/slices/userSlice'
import Router from 'next/router'
import { multipleSelectedProductsById } from '../redux/slices/productsSlice'
import WishListProduct from '../components/WishListProduct/WishListProduct'
import toast, { Toaster } from 'react-hot-toast';
import ErrorIcon from '@mui/icons-material/Error';
import FlagIcon from '@mui/icons-material/Flag';

const wishlist = () => {

    const isUser = useSelector((state:RootState) => isUserLogged(state))
    const { user_email, wishList_productsRef } = useSelector((state:RootState) => getLoggedUser(state))
    const products = useSelector((state:RootState) => multipleSelectedProductsById(state, wishList_productsRef as string[]))

    const notifyAction= (toastNotification:string, httpStatusCode:number) => { // NEXT - TO PRZENIEŚĆ DO OSOBNEGO KOMPONENTU I W FUNKCJI ZWRACAĆ TLKO TEN KOMPONENT
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
        <div className='wishlist_page box-border relative flex flex-col items-center'>
        <Head>
            <title>Lista życzeń / Apart</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navigation/>
        <section className='wishlist_page_container text-[14px] font-light min-h-[450px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] px-4 lg:px-0 py-8'>
            <h1 className='text-[28px] font-normal'>Lista życzeń</h1>
            {
                wishList_productsRef?.length === 0 ? <span>Lista jest pusta</span> : null
            }
            {
                !isUser ? 
                (
                <>
                    <div className='flex gap-x-2 items-center pb-3'>
                        <span>Jeśli chcesz skorzystać z listy życzeń najpierw się zaloguj</span>
                        <button onClick={() => Router.push("/login")} className='px-3 py-1 border-[1px] border-[#adadad]'>Zaloguj się</button>
                    </div>
                </>
                )
                :
                (
                <div className='wishlist_products grid sm:grid-cols-2 lg:grid-cols-3'>
                    {
                        products.map(el => {
                            return(
                                <WishListProduct key={el._id} product_id={el._id} product_category_ref={el.category._ref} user_email={user_email as string} product_name={el.title} price={el.cena} image={el.image} notifyAction={notifyAction}/>
                            )
                        })
                    }
                </div>
                )
            }

        </section>
        <Footer />
        <Toaster position='bottom-center'/>
        </div>
  )
}

export default wishlist
