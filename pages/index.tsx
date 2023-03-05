import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import { autoFetch } from '../utils/autoFetch'

const Home = () => {
  return (
    <div className='h-[2000px]'>
      <Head>
        <title>Apart redesign</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <ProductProvider> */}
        <Navigation/>
      {/* </ProductProvider> */}
      
    </div>
  )
}

export default Home

export const getServerSideProps:GetServerSideProps<Props> = async () => {
  const categories = await autoFetch<Category[]>("getCategories") //Category is a reutrn Type and string is API route which we targeting with function
  let products = await autoFetch<ProductList>("getProducts")
  return {
      props:{
        categories,
        products
      }
    }
}