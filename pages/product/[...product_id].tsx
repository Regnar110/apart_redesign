import Head from 'next/head';
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation';
import RandomAmountProducts from '../../components/RandomAmountProducts/RandomAmountProducts';
import { selectedProduct } from '../../redux/slices/productsSlice';
import { RootState } from '../../redux/store';
import { urlFor } from '../../sanity';
import Image from 'next/image'
import MediaQuery from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from "swiper";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import eko_opakowania from '../../public/eko.jpg'
import AddToWishList from '../../components/AddToWishList/AddToWishList';
import { isUserLogged } from '../../redux/slices/userSlice';
import toast, { Toaster } from 'react-hot-toast';
import ErrorIcon from '@mui/icons-material/Error';
import FlagIcon from '@mui/icons-material/Flag';
import AddToBasket from '../../components/AddToBasket/AddToBasket';
import { showLocalBasket } from '../../redux/slices/localBasketSlice';

const Product = () => {
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
      const basket = useSelector((state:RootState) => showLocalBasket(state))
      console.log(basket)
    // 768PX Mobile break point
    const router = useRouter();
    const userLogged= useSelector((state:RootState) => isUserLogged(state))
    const {product_id} = router.query // tablica [id produktu, referencja do kategori tego produktu]
    let singleProduct;
    if(product_id && typeof product_id[1] === "string") singleProduct = useSelector((state:RootState) => selectedProduct(state, product_id[1], product_id[0])) // product_id[0] to odniesienie do kategori, w której znajduje się produkt tj product_id[1].
    const details = singleProduct ? Object.entries(singleProduct.details) : null
    return(
        <div className='product_page box-border overflow-x-hidden'>
            <Head>
            <title>{singleProduct?.title}</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation/>
            <div className='product_container py-14 px-5'>
                <div className='product_presentation_section flex flex-col md:flex-row justify-center gap-x-10'>
                    <div className='product_images_grid relative w-full md:w-auto md:grid md:grid-cols-2'>
                        <MediaQuery minWidth={1280}>
                            <Image className='col-span-2' width={800} height={630} style={{objectFit:"contain"}} src={urlFor(singleProduct?.image[0]).url()} alt={'product_image'} />   
                            <Image className='col-span-1' width={400} height={350} style={{objectFit:"contain"}} src={urlFor(singleProduct?.image[0]).url()} alt={'product_image'} />
                            <Image className='col-span-1' width={400} height={350} style={{objectFit:"contain"}} src={urlFor(singleProduct?.image[0]).url()} alt={'product_image'} /> 
                        </MediaQuery>
                        <MediaQuery minWidth={768} maxWidth={1279}>
                            <Image className='col-span-2' width={415} height={335} style={{objectFit:"contain"}} src={urlFor(singleProduct?.image[0]).url()} alt={'product_image'} />   
                            <Image className='col-span-1' width={197} height={260} style={{objectFit:"contain"}} src={urlFor(singleProduct?.image[0]).url()} alt={'product_image'} />
                            <Image className='col-span-1' width={197} height={260} style={{objectFit:"contain"}} src={urlFor(singleProduct?.image[0]).url()} alt={'product_image'} /> 
                        </MediaQuery>
                        <MediaQuery maxWidth={767}>
                        <Swiper
                            slidesPerView={1}
                            scrollbar={{
                                hide: true,
                                }}
                            modules={[Scrollbar]}
                        >
                            <SwiperSlide><Image priority width={380} height={300} style={{objectFit:"contain", width:"100%", height:"300px"}} src={urlFor(singleProduct?.image[0]).url()} alt={'product_image'} /></SwiperSlide>
                            <SwiperSlide><Image priority width={380} height={300} style={{objectFit:"contain", width:"100%", height:"300px"}} src={urlFor(singleProduct?.image[0]).url()} alt={'product_image'} /></SwiperSlide>
                            <SwiperSlide><Image priority width={380} height={300} style={{objectFit:"contain", width:"100%", height:"300px"}} src={urlFor(singleProduct?.image[0]).url()} alt={'product_image'} /></SwiperSlide>
                        </Swiper>
                        </MediaQuery>
     
                    </div>
                    <div className='product_operations w-full md:max-w-[350px] lg:max-w-[420px] text-left font-roboto flex flex-col h-fit'>
                        <h1 className='text-[28px] text-[#333333]'>{singleProduct?.title}</h1>
                        <span className='product_number text-[13px] text-[#777777]'>{singleProduct?.details.nr_wzoru}</span>
                        <div className='size_selection flex gap-x-4 py-3 items-center'>
                            <span className='font-bold text-[14px]'>Rozmiar:</span>
                            <form className='flex justify-center items-center'>
                                <select className='border-[1px] border-[#777777] p-2'>
                                    <option value="12">12</option>
                                    <option value="14">14</option>
                                    <option value="16">16</option>
                                    <option value="19">19</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                </select>
                            </form>
                        </div>
                        <div className='product_price flex gap-x-5'>
                            <span className='text-[28px]'>{singleProduct?.cena} zł</span>
                            <div className='product_price_before_sale flex flex-col'>
                                <span className='line-through text-[20px]'>{((150/100) * singleProduct?.cena!).toFixed(2)} zł</span>
                                <span className='text-[12px] text-[#777777]'>Najniższa cena w okresie ostatnich 30 dni przed obniżką</span>
                            </div>
                        </div>
                        <AddToBasket represented_product_id={singleProduct?._id as string}/>
                        <p className='mt-5 text-[14px]'>Dostawa <span className='font-bold'>GRATIS</span>  |  Wysyłka zamówienia w <span className='font-bold'>24 godziny</span></p>
                        <p className='mb-5 text-[14px]'>100 dni na <span className='font-bold'>DARMOWY ZWROT</span>  |  Piękne opakowanie gratis</p>
                        <div className='product_interface_icons flex flex-col gap-y-3'>
                            <div className='wish_list flex gap-x-3 items-center cursor-pointer'>
                                
                                <AddToWishList wishProductId={singleProduct?._id as string} isUserLogged={userLogged} notifyAction={notifyAction}/>
                                {/* <FavoriteBorderIcon className='w-10 h-10 transition-all text-black hover:text-[#c7747b] '/> */}
                            </div>
                            <div className='location flex gap-x-3 items-center cursor-pointer'>
                                <ModeOfTravelIcon className='w-10 h-10 transition-all text-black hover:text-[#c7747b] '/>
                                <span className='text-[14px] transition-all text-black hover:text-[#c7747b] '>Sprawdź dostępność i zarezerwuj w salonie</span>
                            </div>
                            <div className='compare flex gap-x-3 items-center cursor-pointer'>
                                <CompareArrowsIcon className='w-10 h-10 transition-all text-black hover:text-[#c7747b] '/>
                                <span className='text-[14px] transition-all text-black hover:text-[#c7747b] '>Dodaj do  porównania</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='product_details_section flex flex-col lg:flex-row justify-center gap-x-5'>
                    <div className='details w-full md:w-[90%] lg:w-[500px] xl:w-[600px] flex flex-col gap-y-5 pt-10'>
                        <div className='box_title text-[17px] border-b-[1px] border-black'>
                            <h4>Cechy produktu</h4>
                        </div>
                        <div className='product_properties flex flex-col'>
                            {
                                details!.map(el => {
                                    return (
                                        <div key={el[0]} className='property text-[14px] flex gap-x-4'>
                                            <span className='font-semibold'>{el[0]}:</span>
                                            <span className='font-light'>{el[1]}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='description w-full md:w-[90%] lg:w-[500px] xl:w-[600px] flex flex-col gap-y-5 justify-start pt-10'>
                        <div className='box_title text-[17px] border-b-[1px] border-black'>
                            <h4>Opis produktu</h4>
                        </div>
                        <span className='text-[14px] font-light'>
                            {singleProduct?.Opis[0].children[0].text}
                        </span>
                    </div>
                </div>
                <div className='eko_opakowania relative flex flex-col lg:flex-row justify-center text-left gap-x-5 pt-10'>
                    <div className='opis_eko flex flex-col gap-y-5 w-full lg:w-[500px] xl:w-[600px]'>
                        <div className='box_title text-[17px] border-b-[1px] border-black'>
                            <h4>Piękne opakowania gratis</h4>
                        </div>
                        <span className='text-[14px]'>Kupione na apart.pl produkty są domyślnie pakowane w ekologiczne opakowania, które wprowadziliśmy w trosce o ochronę środowiska. Są one estetyczne, a co najważniejsze przyjazne naszej planecie. W eSklepie Apart są dostępne także nowe opakowania w zachwycającej subtelnością tonacji pudrowego różu. Darmowy zestaw to wybrane piękne pudełko oraz dołączona torebka upominkowa.</span>
                    </div>
                    <Image className='w-full h-[350px] lg:h-auto lg:w-[500px] xl:w-[600px]' width={415} height={335} style={{objectFit:"contain"}} src={eko_opakowania} alt={'eko_opakowania'} />   
                </div>                 
            </div>
            <RandomAmountProducts header={'Produkty do kompletu'} />
            <RandomAmountProducts header={'Najczęściej wybierane'} />
            <div className='products_help flex flex-col lg:flex-row justify-center gap-5 px-5 lg:p-0'>
                <div className='customer_help w-full lg:w-[500px] xl:w-[600px] flex flex-col justify-start pt-10'>
                    <div className='box_title text-[17px] border-b-[1px] border-black mb-5'>
                        <h4>Pomoc przy zakupie</h4>
                    </div>
                    <div className='text-[14px] text-black transition-all hover:text-yellow-500 cursor-pointer font-light'><ChevronRightIcon fontSize='small'/><span>Ekspert w biżuterii</span></div>
                    <div className='text-[14px] pt-1 text-black transition-all hover:text-yellow-500 cursor-pointer font-light'><ChevronRightIcon fontSize='small'/><span>Jak wybrać właściwy rozmiar pierścionka</span></div>
                    <div className='text-[14px] pt-1 text-black transition-all hover:text-yellow-500 cursor-pointer font-light'><ChevronRightIcon fontSize='small'/><span>Jak kupować w eSklepie</span></div>
                    <div className='text-[14px] pt-1 text-black transition-all hover:text-yellow-500 cursor-pointer font-light'><ChevronRightIcon fontSize='small'/><span>Wysyłka i formy płatności</span></div>
                    <div className='text-[14px] pt-1 text-black transition-all hover:text-yellow-500 cursor-pointer font-light'><ChevronRightIcon fontSize='small'/><span>Apart Diamond Club</span></div>
                    <div className='text-[14px] pt-1 text-black transition-all hover:text-yellow-500 cursor-pointer font-light'><ChevronRightIcon fontSize='small'/><span>Regulamin sprzedaży</span></div>
                </div>
                <div className='ask_for_product w-full lg:w-[500px] xl:w-[600px] flex flex-col gap-y-5 justify-start pt-10'>
                    <div className='box_title text-[17px] border-b-[1px] border-black'>
                        <h4>Zapytaj o produkt</h4>
                    </div>
                    <div className='ask flex flex-col'>
                    <div className='checkbox_ask flex gap-3'>
                       <input className='cursor-pointer' defaultChecked={true} type="checkbox" placeholder="Zapytaj o dostęp" /> 
                       <label className='cursor-pointer'>Zapytaj o dostępność produktu</label>
                    </div>
                    <div className='checkbox_ask flex gap-3'>
                       <input className='cursor-pointer' type="checkbox" placeholder="Zapytaj o dostęp" /> 
                       <label className='cursor-pointer'>Zapytaj o parametry produktu</label>
                    </div>
                     <form className='ask_question form pt-3'>
                        <label className='font-semibold'>Zadaj pytanie</label>
                        <textarea className=' border-[1px] border-black w-full h-[200px]' required={true} minLength={20}/>
                        <span className='text-[11px] font-light'>(wymagane, min. 20 znaków)</span>
                        
                        <div className='ask_question_email flex flex-col'>
                            <label className='font-semibold pt-3'>Adres email</label>
                            <div className='email_as_input flex items-end flex-col md:flex-row gap-2'>
                                <input className='border-[1px] w-full  border-black' type='email' required={true}/>
                                <button type='submit' className='p-[2px] shadow-lg w-[150px] bg-[#F4C1C5] text-[#ae535a] hover:bg-[#c7747b] hover:text-white' >Wyślij</button>
                            </div>
                        </div>
                     </form>
                    </div>
                </div>
            </div>
            <Footer/>
            <Toaster position='bottom-center'/>
        </div>
    )
}
export default Product