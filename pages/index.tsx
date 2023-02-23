import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from '../components/Navigation'

const Home: NextPage = () => {
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
