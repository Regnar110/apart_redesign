import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import { autoFetch } from '../utils/autoFetch'

const Home = ({categories}:Props) => {
  
  return (
    <div>
      <Head>
        <title>Apart redesign</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation categories={categories}/>
    </div>
  )
}

export default Home

export const getServerSideProps:GetServerSideProps<Props> = async () => {

  const categories = await autoFetch<Category>("getCategories") //Category is a reutrn Type and string is API route which we targeting with function
  return {
      props:{
        categories
      }
    }
}