import Head from 'next/head';
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation';
import RandomAmountProducts from '../../components/RandomAmountProducts/RandomAmountProducts';
import { selectedProduct } from '../../redux/slices/productsSlice';
import { RootState } from '../../redux/store';
import toast, { Toaster } from 'react-hot-toast';
import ErrorIcon from '@mui/icons-material/Error';
import FlagIcon from '@mui/icons-material/Flag';
import BasketModal from '../../components/BasketModal/BasketModal';
import ProductOperations from '../../components/ProductPage/ProductOperations';
import ProductImagesGrid from '../../components/ProductPage/ProductImagesGrid';
import ProductDetailsSection from '../../components/ProductPage/ProductDetailsSection';
import ProductsHelp from '../../components/ProductPage/ProductsHelp';
import EkoOpakowania from '../../components/ProductPage/EkoOpakowania';
import ProductPagePresentationSection from '../../components/ProductPage/ProductPagePresentationSection';

const Product = () => {
    const [basketModal, setBasketModal] = useState<boolean>(false);
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

    const notifyBasket = (status:boolean) => setBasketModal(status)
    // 768PX Mobile break point
    const router = useRouter();
    const {product_id} = router.query // tablica [id produktu, referencja do kategori tego produktu]
    let singleProduct;
    if(product_id && typeof product_id[1] === "string") singleProduct = useSelector((state:RootState) => selectedProduct(state, product_id[1], product_id[0])) // product_id[0] to odniesienie do kategori, w której znajduje się produkt tj product_id[1].
    const details = singleProduct ? Object.entries(singleProduct.details) : null
    return(
        <div className={`product_page box-border overflow-x-hidden ${basketModal ? "overscroll-none":""}`}>
            <Head>
            <title>{singleProduct?.title}</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation/>
            <div className='product_container  px-5'>
                <ProductPagePresentationSection>
                    <ProductImagesGrid singleProduct={singleProduct as Product}/>
                    <ProductOperations singleProduct={singleProduct as Product} notifyAction={notifyAction} notifyBasket={notifyBasket}/>           
                </ProductPagePresentationSection>
                <ProductDetailsSection singleProduct={singleProduct as Product} details={details}/>
                <EkoOpakowania />               
            </div>
            <RandomAmountProducts header={'Produkty do kompletu'} />
            <RandomAmountProducts header={'Najczęściej wybierane'} />
            <ProductsHelp />
            <Footer/>
            {
                basketModal ? <BasketModal notifyBasket={notifyBasket}/> :null
            }
            <Toaster position='bottom-center'/>
        </div>
    )
}
export default Product