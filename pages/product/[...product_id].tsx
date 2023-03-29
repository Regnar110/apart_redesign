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
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';

const Product = () => {

    // 768PX Mobile break point
    const router = useRouter();
    const {product_id} = router.query // tablica [id produktu, referencja do kategori tego produktu]
    let singleProduct;
    if(product_id && typeof product_id[1] === "string") singleProduct = useSelector((state:RootState) => selectedProduct(state, product_id[1], product_id[0])) // product_id[0] to odniesienie do kategori, w której znajduje się produkt tj product_id[1].
    console.log(singleProduct)
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
                            <SwiperSlide><Image width={380} height={300} style={{objectFit:"contain", width:"100%", height:"300px"}} src={urlFor(singleProduct?.image[0]).url()} alt={'product_image'} /></SwiperSlide>
                            <SwiperSlide><Image width={380} height={300} style={{objectFit:"contain", width:"100%", height:"300px"}} src={urlFor(singleProduct?.image[0]).url()} alt={'product_image'} /></SwiperSlide>
                            <SwiperSlide><Image width={380} height={300} style={{objectFit:"contain", width:"100%", height:"300px"}} src={urlFor(singleProduct?.image[0]).url()} alt={'product_image'} /></SwiperSlide>
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
                        <button className='text-[14px] my-5 p-4 shadow-lg w-[300px] md:w-[100%] bg-black text-white hover:bg-[#c7747b] hover:text-white transition-all' >DODAJ DO KOSZYKA</button>
                        <p className='mt-5 text-[14px]'>Dostawa <span className='font-bold'>GRATIS</span>  |  Wysyłka zamówienia w <span className='font-bold'>24 godziny</span></p>
                        <p className='mb-5 text-[14px]'>100 dni na <span className='font-bold'>DARMOWY ZWROT</span>  |  Piękne opakowanie gratis</p>
                        <div className='product_interface_icons flex flex-col gap-y-3'>
                            <div className='wish_list flex gap-x-3 items-center cursor-pointer'>
                                <FavoriteBorderIcon className='w-10 h-10 transition-all text-black hover:text-[#c7747b] '/>
                                <span className='text-[14px] transition-all text-black hover:text-[#c7747b] '>Dodaj do listy życzeń</span>
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
                <div className='product_details_section'>
                    details
                </div>                 
            </div>
            <RandomAmountProducts header={'Produkty do kompletu'} />
            <RandomAmountProducts header={'Najczęściej wybierane'} />
            <div className='products_help flex'>
                <div className='customer_help'>customer help</div>
                <div className='ask_for_product'>ask for product</div>
            </div>
            <Footer/>
        </div>
    )
}
export default Product