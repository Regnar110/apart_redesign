import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useSelector,  } from 'react-redux'
import Navigation from '../components/Navigation'
import { RootState } from '../redux/store'
import { autoFetch } from '../utils/autoFetch'
import { containInStore } from '../utils/containInStore'

const Home = ({categories }:Props) => {
  const prods = useSelector((state:RootState) => state)
  console.log(prods)
  return (
    <div className='h-[2000px]'>
      <Head>
        <title>Apart redesign</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <ProductProvider> */}
        <Navigation categories={categories.categories}/>
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