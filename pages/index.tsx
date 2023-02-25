import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import { fetchCategories } from '../utils/fetchCategories'

const Home = ({categories}:Props) => {
  console.log(categories)
  return (
    <div>
      <Head>
        <title>Apart redesign</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
    </div>
  )
}

export default Home

export const getServerSideProps:GetServerSideProps<Props> = async () => {
  const categories = await fetchCategories()
  return {
      props:{
        categories
      }
    }
}